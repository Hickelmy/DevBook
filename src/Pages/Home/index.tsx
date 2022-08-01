import React from "react";
import { HomeTop } from "../../Components/HomeComponents/Top";
import { HomeMid } from "../../Components/HomeComponents/Mid";
import { HomeBot } from "../../Components/HomeComponents/Bot";

export function Home() {
  return (
    <div>
      <div className="m-2 py-3">
        <HomeTop />
      </div>
      <div className="m-2 px-5 py-3">
        <HomeMid />
      </div>

      <div className="m-2 px-5 py-3">
        <HomeBot />
      </div>
    </div>
  );
}
