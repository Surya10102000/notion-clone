'use server';

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    auth().protect() // if and unauthorized user tries to create a newDocument he will be redirected to the login page

    const { sessionClaims } = await auth();

    const docCollectoinRef = adminDb.collection("documents");
    const docRef = await docCollectoinRef.add({
        title : "New Doc"
    })

    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt : new Date(),
        roomId : docRef.id
    })

    return { docId : docRef.id};
}