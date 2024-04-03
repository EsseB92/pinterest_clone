"use client";

import UserInfo from "@/app/components/UserInfo";
import app from "@/app/db/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function page({ params }) {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (params) {
      getUserInfo(params.userId.replace("%40", "@"));
    }
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      setUserInfo(userData);
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="bg-[#e9e9e9] min-h-screen flex items-center justify-center">
      {userInfo ? (
        <div>
          <UserInfo userInfo={userInfo} />
        </div>
      ) : null}
    </div>
  );
}
