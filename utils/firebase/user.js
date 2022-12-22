import { getDoc, doc, getFirestore } from "firebase/firestore";

export async function getUser(userId) {
  const db = getFirestore();
  // const q = query(collection(db, "/users"), where("userId", "==", userId));
  const docRef = doc(db, "users", userId);
  const userSnapshot = await getDoc(docRef);

  return userSnapshot.data();
}
