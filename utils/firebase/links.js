import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

export async function getLinks(userId) {
  const links = new Array();
  const db = getFirestore();
  const q = query(collection(db, "/links"), where("userId", "==", userId));
  const linksSnapshot = await getDocs(q);

  linksSnapshot.forEach((doc) => {
    const link = doc.data();
    links.push({ ...link, id: doc.id });
  });

  return links;
}
