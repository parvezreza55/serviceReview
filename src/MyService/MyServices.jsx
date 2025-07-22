import React, { Suspense } from "react";
import UseAuth from "../Hook/UseAuth";
import MyServiceTable from "./MyServiceTable";
import useServiceApi from "../Api/useServiceApi";
import { Helmet } from "react-helmet-async";

const MyServices = () => {
  const { user } = UseAuth();
  const { myServices } = useServiceApi();
  const myService = myServices(user?.email, user?.accessToken);
  return (
    <div className="md:w-9/12 mx-auto">
      <Helmet>
        <title>Service || My Service</title>
      </Helmet>
      <Suspense
        fallback={
          <>
            <div className="text-center min-h-[100vh]">
              <span className="loading loading-spinner text-neutral"></span>
            </div>
          </>
        }
      >
        <MyServiceTable myServices={myService}></MyServiceTable>
      </Suspense>
    </div>
  );
};

export default MyServices;
