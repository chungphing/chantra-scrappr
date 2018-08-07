import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyD5Tb1JvhUakO32evhOUNcfYPGvzbMV4mg',
  authDomain: 'chantra-scrappr.firebaseapp.com',
  databaseURL: 'https://chantra-scrappr.firebaseio.com',
  projectId: 'chantra-scrappr',
  storageBucket: 'chantra-scrappr.appspot.com',
  messagingSenderId: '1082795335647'
}
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
