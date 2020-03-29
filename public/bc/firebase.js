
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDRoIN0R4YmO8bmkPPztZ6-4EzxWxpzA9Y",
    authDomain: "peryahan-ni-juan-color-g-494.firebaseapp.com",
    databaseURL: "https://peryahan-ni-juan-color-g-494.firebaseio.com",
    projectId: "peryahan-ni-juan---color-g-494",
    storageBucket: "peryahan-ni-juan---color-g-494.appspot.com",
    messagingSenderId: "612923689579",
    appId: "1:612923689579:web:587dfde28e75717c4dff2e",
    measurementId: "G-9PP9JEE1FG"
}; var firebaseInited = false;

// Initialize Firebase.
function bc_firebase_init(debug) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    firebaseInited = true;
    if(debug) {
        console.log('Firebase had been initialized!');
    }
}

// Call Firebase Remotte Config.
function bc_firebase_remoteConfig(fetchIntv, defaultObj, callback, debug) {
    //Make sure to initialized firebase if not.
    if(firebaseInited == false) {
        bc_firebase_init();
    }

    //Get reference for remoteConfig reference. 
    const remoteConfig = firebase.remoteConfig();

    //Set the fetch interval from remote.
    remoteConfig.settings = {
        minimumFetchIntervalMillis: fetchIntv,
    };

    //Initialized default configs.
    remoteConfig.defaultConfig = (defaultObj);

    //Initialized firebase remoteConfig.
    remoteConfig.ensureInitialized()
        .then(() => {
            if( debug ) {
                console.log('Firebase Remote Config is initialized.');
            }
            remoteConfig.fetchAndActivate()
                .then(() => {
                    if( debug ) {
                        console.log('Firebase Remote Config fetch and activation was successful.');
                    }
                    callback( true, remoteConfig );
                })
                .catch((err) => {
                    if( debug ) {
                        console.error('Firebase fetch and activate return error: ' + err);
                    }
                    callback( false, null );
                });
        })
        .catch((err) => {
            if( debug ) {
                console.error('Firebase Remote Config failed to initialize: ', err);
            }
            callback( false, null );
        });
}