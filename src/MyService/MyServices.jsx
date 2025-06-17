import React, { Suspense } from "react";
import UseAuth from "../Hook/UseAuth";
import MyServiceTable from "./MyServiceTable";
import useServiceApi from "../Api/useServiceApi";
import { Helmet } from "react-helmet-async";

const MyServices = () => {
  const { user } = UseAuth();
  const { myServices } = useServiceApi();
  return (
    <div>
      <Helmet>
        <title>Service || My Service</title>
      </Helmet>
      <Suspense
        fallback={
          <>
            <div className="text-center">
              <span className="loading loading-spinner text-neutral"></span>
            </div>
          </>
        }
      >
        <MyServiceTable
          myServices={myServices(user?.email, user?.accessToken)}
        ></MyServiceTable>
      </Suspense>
    </div>
  );
};

export default MyServices;
