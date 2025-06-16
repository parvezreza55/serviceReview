import React, { Suspense } from "react";
import UseAuth from "../Hook/UseAuth";
import MyServiceTable from "./MyServiceTable";
import useServiceApi from "../Api/useServiceApi";

const MyServices = () => {
  const { user } = UseAuth();
  const { myServices } = useServiceApi();
  return (
    <div>
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
          myServices={myServices(user.email, user.accessToken)}
        ></MyServiceTable>
      </Suspense>
    </div>
  );
};

export default MyServices;
