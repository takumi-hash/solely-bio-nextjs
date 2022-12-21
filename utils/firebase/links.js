import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

export async function getLinks() {
  const links = new Array();
  const db = getFirestore();
  const q = query(
    collection(db, "/links")
    // where("userId", "==", "FjPPN8aSxrhprblDg1tA")
  );
  const linksSnapshot = await getDocs(q);

  linksSnapshot.forEach((doc) => {
    const link = doc.data();
    console.log("link");
    links.push({ ...link, id: doc.id });
  });

  return links;
}
