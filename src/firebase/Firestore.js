import firebase from 'firebase';
import firebaseconfig from './firebaseconfig'

const config = firebaseconfig


firebase.initializeApp(config);
export default firebase;