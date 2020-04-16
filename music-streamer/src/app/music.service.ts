import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirebaseError } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
   export class MusicService { 

   constructor(
    private db: AngularFirestore
   ) {

   }


 getCollectionRef(path: string, sortBy?: string): 
  AngularFirestoreCollection {
    if (sortBy === undefined) {
      return this.db.collection(path);
    } else {
      return this.db.collection(path, ref => ref.orderBy(sortBy));
    }
  }

  getDocumentRef(path: string): AngularFirestoreDocument {
    return this.db.doc(path);
  }

  getCollectionSnapshot(
    path: string,
    sortBy?: string
  ): Observable<any[]> {
    return this.getCollectionRef(path, sortBy).snapshotChanges();
  }

   getDocumentSnapshot(
    path: string,
  ): Observable<any> {
    return this.getDocumentRef(path).snapshotChanges();
  }

  getCollectionValue(
    path: string,
    sortBy?: string
  ): Observable<any[]> {
    return this.getCollectionRef(path, sortBy).valueChanges();
  }

  getDocumentValue(
    path: string,
  ): Observable<any> {
    return this.getDocumentRef(path).valueChanges();
  }

  getDocument(path: string): Observable<any> {
    return this.getDocumentSnapshot(path).pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        return { id, ...data };
      })
    );
  }

  getCollection(path: string, sortBy?: string): Observable<any[]> {
    return this.getCollectionSnapshot(path, sortBy).pipe(
      map(changes => {
        return changes.map(change => {
          const data = change.payload.doc.data();
          const id = change.payload.doc.id;
          return { id, ...data };
        });
      }
      ));

  }

  createDocument(path: string, data: object):
  Promise<any | FirebaseError> {
    return this.getDocumentRef(path).set(data)
    .then(() => {
      return null;
    })
    .catch((error: FirebaseError) => {
      return error;
    });
  }

  updateDocument(path: string, data: object):
  Promise<any | FirebaseError> {
    return this.getDocumentRef(path).update(data)
    .then(() => {
      return null;
    })
    .catch((error: FirebaseError) => {
      return error;
    });
  }

  deleteDocument(path: string):
   Promise<any | FirebaseError> {
    return this.getDocumentRef(path).delete()
    .then(() => {
      return null;
    })
    .catch((error: FirebaseError) => {
      return error;
    });
  }

  createCollectionItem(path: string, data: object):
   Promise<any | FirebaseError> {
    return this.getCollectionRef(path).add(data)
    .then(() => {
      return null;
    })
    .catch((error: FirebaseError) => {
      return error;
    });
  }


 }