import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAjLGO47X-BlrV4E2e8J08iSu5ANPQVqeI',
  authDomain: 'guidemus.firebaseapp.com',
  databaseURL: 'https://guidemus.firebaseio.com',
  projectId: 'guidemus',
  storageBucket: 'guidemus.appspot.com',
  messagingSenderId: '589695062330',
  appId: '1:589695062330:web:009704904645aa1ff78003',
  measurementId: 'G-WZC8E2454S'
}

!firebase.apps.length && firebase.initializeApp(config)
export const auth = firebase.auth()
export const db = firebase.firestore()
