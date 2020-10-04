import firebase from 'firebase';

const config ={
    apiKey:"AIzaSyBfIiZsvSRvQmOenDAZwt6x-FWRL2_335A",
    authDomain: "pc-builder-web-app-17316.firebaseapp.com",
    databaseURL:"https://pc-builder-web-app-17316.firebaseio.com",
    projectId: "pc-builder-web-app-17316",
    storageBucket: "pc-builder-web-app-17316.appspot.com",
    messagingSenderId: "266637122410",
    appId: "1:266637122410:web:bd6a70c33a0766b182e313"
};

const fire = firebase.initializeApp(config);
export default fire;


