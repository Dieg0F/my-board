import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Task } from '../../model/task/task.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;

  constructor(
    private db: AngularFirestore
  ) { this.setTasks(); }

  private setTasks() {
    this.tasks = this.db.collection<Task>('/tasks',
      (ref: CollectionReference) => ref.orderBy('done', 'asc').orderBy('title', 'asc'));
  }

  public getDoneTasks(isDone: boolean) {
    return this.db.collection<Task>('/tasks',
      (ref: CollectionReference) => ref.where('done', '==', isDone).orderBy('title', 'asc'));
  }

  public create(task: Task): Promise<void> {
    console.log("Task: ", task);
    const uid = this.db.createId();
    return this.tasks.doc<Task>(uid)
      .set({
        uid,
        title: task.title,
        description: task.description,
        done: false
      });
  }

  public update(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid)
      .update(task);
  }

  public delete(taskId: string): Promise<void> {
    return this.tasks.doc<Task>(taskId)
      .delete();
  }

  public get(uid: string): Observable<Task> {
    return this.tasks.doc<Task>(uid).valueChanges();
  }
}
