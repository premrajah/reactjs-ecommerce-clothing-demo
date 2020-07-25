import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDLTqi3OVHtgv5lA0WFNd5kskK5I3Yp1ag',
  authDomain: 'clothing-demo-2020.firebaseapp.com',
  databaseURL: 'https://clothing-demo-2020.firebaseio.com',
  projectId: 'clothing-demo-2020',
  storageBucket: 'clothing-demo-2020.appspot.com',
  messagingSenderId: '847095444479',
  appId: '1:847095444479:web:8cc0656aac47cdb06badca',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: ' select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
