import React from "react";
export default function Start() {
  return (
    <div className="">
      <div className="p-10 px-10 flex flex-col items-center gap-16">
        <h1 className="font-extrabold text-3xl">How To Start ?</h1>
        <div className="md:grid grid-cols-2 grid-rows-4 items-center gap-x-32 gap-y-8 space-y-10">
          <div className="flex flex-col gap-8 items-center">
            <h2 className="font-semibold md:text-[1.5em]">Connect your wallet</h2>
            <img src="/images/coin1.png" alt="" className="w-20 md:w-40" />
          </div>
          <div className="flex flex-col gap-8 items-center row-start-2 col-start-2 ">
            <h2 className="font-semibold md:text-[1.5em]">Enroll in a Courses</h2>
            <img src="/images/layer4.png" alt="" className="w-20 md:w-40" />
          </div>
          <div className="flex flex-col gap-8 items-center row-start-3 ">
            <h2 className="font-semibold md:text-[1.5em]">Complete simple Task</h2>
            <img src="/images/Design.png" alt="" className="w-20 md:w-40" />
          </div>
          <div className="flex flex-col gap-8 items-center row-start-4 col-start-2">
            <h2 className="font-semibold md:text-[1.5em]">Earn Rewards</h2>
            <img src="/images/Coins.png" alt="" className="w-20 md:w-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
