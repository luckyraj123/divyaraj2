// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDTggbQItkm3tQw5XlLyer9TiMcjJJ9-BA",
    authDomain: "chatapp-d17aa.firebaseapp.com",
    databaseURL: "https://chatapp-d17aa-default-rtdb.firebaseio.com",
    projectId: "chatapp-d17aa",
    storageBucket: "chatapp-d17aa.appspot.com",
    messagingSenderId: "509026966415",
    appId: "1:509026966415:web:fce5d369d9d501bd0989fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



