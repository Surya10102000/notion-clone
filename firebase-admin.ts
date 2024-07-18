import { initializeApp, getApp,App, getApps, cert } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";

const servicekey = require('@/service_key.json')

let app : App

if (getApps().length === 0 ){
    app = initializeApp({
        credential : cert(servicekey)
    })
}else {
    app = getApp()
}

const adminDb = getFirestore(app)

export { app as admin , adminDb}