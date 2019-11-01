import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from './user.model';
import * as firebase from 'firebase/app';
import { Observable, from,of } from 'rxjs';
import{AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {switchMap} from 'rxjs/operators';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<User>;
  constructor(public afAuth:AngularFireAuth,
    public afs:AngularFirestore,
    public router:Router) { 
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user =>{
          if(user){
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          }else{
            return of(null);
          }
        })
      );
    }
  async doGoogleLogin(){
    
    let provider = new firebase.auth.GoogleAuthProvider();
    const credential =await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  async signOut(){
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/login']);
  }
  private updateUserData(user){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data ={
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoUrl:user.photoUrl
    };
       

    return userRef.set(data,{merge:true});
  }
}
