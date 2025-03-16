importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCbitWscKqUdRWe9tlo1lO3C2kpB128Hew",
  authDomain: "goair-fcm.firebaseapp.com",
  projectId: "goair-fcm",
  storageBucket: "goair-fcm.firebasestorage.app",
  messagingSenderId: "485424992997",
  appId: "1:485424992997:web:4a5a74b1b941a2ea093a0c",
  measurementId: "G-XZPGS1CYM1"
});

const messaging = firebase.messaging();

// Manejamos notificaciones en segundo plano (esto se usa aunque solo necesites primer plano)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification?.title || 'Notificación';
  const notificationOptions = {
    body: payload.notification?.body || 'Mensaje sin cuerpo',
    icon: ''
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
