import { initializeApp, getApps } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";




// export const analytics = isSupported() ? getAnalytics(app) : undefined;

let app = undefined;

export const logEvent = (feedbackDelta, pageURL) => {
  if (typeof window !== 'undefined') {
    import('firebase/analytics').then(a => {
      // Initialize the Firebase Analytics library here
      // analytics.initialize();
      if (!getApps().length) {
        app = initializeApp({
          apiKey: "AIzaSyAQz3qOswirZrgrPFIlk_e4aluX37IulNY",
          authDomain: "chatty-cloud.firebaseapp.com",
          projectId: "chatty-cloud",
          storageBucket: "chatty-cloud.appspot.com",
          messagingSenderId: "804452310835",
          appId: "1:804452310835:web:539ef280f949e948dce846",
          measurementId: "G-ZF20SV5S6F"
        })
      }

      const analytics = a.getAnalytics(app);
      a.logEvent(analytics, 'select_item', {
        feedback: feedbackDelta,
        url: pageURL
      });
    });
  }

}
