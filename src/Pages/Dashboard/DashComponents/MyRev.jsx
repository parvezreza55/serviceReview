import React, { Suspense, useEffect, useState } from "react";
import useReviewApi from "../../../Api/useReviewApi";
import UseAuth from "../../../Hook/UseAuth";
import MyRevTable from "./MyRevTable";

const MyRev = () => {
  const { user } = UseAuth();
  const { myReviews } = useReviewApi();
  const [myReviewData, setMyReviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user?.email && user?.accessToken) {
      myReviews(user?.email, user?.accessToken).then((data) =>
        setMyReviewData(data)
      );
      setLoading(false);
    }
  }, [user?.email, user?.accessToken]);
  if (loading) {
    return (
      <>
        <div className="text-center h-[100vh]">
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      </>
    );
  }
  return (
    <div>
      <MyRevTable myReviewData={myReviewData}></MyRevTable>
    </div>
  );
};

export default MyRev;
