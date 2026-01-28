// Firebase Configuration for AL-Huda School System
// IMPORTANT: Replace these placeholder values with your actual Firebase project credentials
// Follow the FIREBASE_SETUP_GUIDE.md for detailed instructions

// Load config from window.APP_CONFIG (from config.js) or global defaults
const firebaseConfig = window.APP_CONFIG?.FIREBASE || {
    apiKey: "REMOVED_FOR_SECURITY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
window.firebaseConfig = firebaseConfig; // Expose for App.js check

// Initialize Firebase
try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        window.firebaseAuth = firebase.auth();
        window.firebaseDB = firebase.firestore();

        console.log('✅ Firebase initialized successfully');

        // Enable offline persistence
        window.firebaseDB.enablePersistence()
            .catch((err) => {
                if (err.code === 'failed-precondition') {
                    console.warn('⚠️ Multiple tabs open, persistence can only be enabled in one tab at a time.');
                } else if (err.code === 'unimplemented') {
                    console.warn('⚠️ The current browser does not support offline persistence');
                }
            });
    } else {
        console.error('❌ Firebase SDK not loaded. Please check your internet connection.');
    }
} catch (error) {
    console.error('❌ Firebase initialization error:', error);
}

// Cloud Sync is active.
// Login with your registered Firebase account.
