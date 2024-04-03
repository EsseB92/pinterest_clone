"use client";

import ArticleList from "@/app/components/ArticleList";
import app from "@/app/db/firebaseConfig";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Home() {
  const db = getFirestore(app);
  const [listArticles, setListArticles] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const q = query(collection(db, "post"));
      const querySnapshot = await getDocs(q);
      const updatedArticles = querySnapshot.docs.map((doc) => doc.data());
      setListArticles((prevListArticles) => [
        ...prevListArticles,
        ...updatedArticles,
      ]);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <>
      <div className="p-3">
        <ArticleList listPosts={listArticles} />
      </div>
    </>
  );
}
