import { useCallback } from "react";
import status from "./status.svg"
import meter from "./meter.svg"
import streakStatus from "./streak.svg";
import video from "./video.svg"
const StudentsCourses = () => {
  const onCommunityTextClick = useCallback(() => {
    // Please sync "Community's page" to the project
  }, []);

  const onCareerTextClick = useCallback(() => {
    // Please sync "Careers" to the project
  }, []);

  const onButtomContainerClick = useCallback(() => {
    // Please sync "Courses page 3" to the project
  }, []);

  const onPolygonClick = useCallback(() => {
    // Please sync "Courses page 2" to the project
  }, []);

  const onButtomContainer1Click = useCallback(() => {
    // Please sync "Courses page 3" to the project
  }, []);

  const onPolygon1Click = useCallback(() => {
    // Please sync "Courses page 2" to the project
  }, []);

  const onButtomContainer2Click = useCallback(() => {
    // Please sync "Courses page 3" to the project
  }, []);

  const onPolygon2Click = useCallback(() => {
    // Please sync "Courses page 2" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke-200 w-full h-[1556px] overflow-y-auto text-left text-5xl text-black font-body">
      {/* <img
        className="absolute top-[0px] left-[0px] w-[2376px] h-[4101px] opacity-[0.5]"
        alt=""
        src="/blurbg.svg"
      />
      <div className="absolute h-[2.51%] w-[73.13%] top-[2.76%] right-[10%] bottom-[94.73%] left-[16.88%] text-xl">
        <img
          className="absolute h-[82.22%] w-[21.37%] top-[8.89%] right-[78.63%] bottom-[8.89%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/logo-1.svg"
        />
        <div className="absolute top-[22.22%] left-[43.49%] tracking-[-0.02em] font-medium">
          Home
        </div>
        <div className="absolute top-[22.22%] left-[50.9%] tracking-[-0.02em] font-medium">
          Learn
        </div>
        <div
          className="absolute top-[22.22%] left-[59.83%] tracking-[-0.02em] font-medium cursor-pointer"
          onClick={onCommunityTextClick}
        >
          Community
        </div>
        <div
          className="absolute top-[22.22%] left-[71.79%] tracking-[-0.02em] font-medium cursor-pointer"
          onClick={onCareerTextClick}
        >{`Career `}</div>
        <div className="absolute top-[22.22%] left-[79.77%] tracking-[-0.02em] font-medium">
          About Us
        </div>
        <div className="absolute h-[71.11%] w-[10.26%] top-[13.33%] right-[0%] bottom-[15.56%] left-[89.74%] text-darkslategray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-91xl bg-deepskyblue" />
          <div className="absolute top-[12.5%] left-[17.59%] tracking-[-0.02em] font-medium">
            Register
          </div>
        </div>
      </div> */}
      <div className="absolute top-[158px] left-[18px] rounded-xl [background:linear-gradient(116.96deg,_rgba(92,_92,_92,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] box-border w-[245px] h-[971px] border-[1px] border-solid border-white" />
      <div className="absolute top-[291px] left-[47px] rounded-xl bg-gainsboro box-border w-44 h-[43px] border-[1px] border-solid border-deepskyblue" />
      <div className="absolute top-[217px] left-[56px] tracking-[-0.02em] font-medium">
        🚀 My Progress
      </div>
      <div className="absolute top-[298px] left-[62px] tracking-[-0.02em] font-medium">
        📚 Courses
      </div>
      <div className="absolute top-[342px] left-[62px] tracking-[-0.02em] font-medium">
        🧩 Quiz
      </div>
      <div className="absolute top-[386px] left-[62px] tracking-[-0.02em] font-medium">
        {" "}
        About
      </div>
      <div className="absolute top-[265.5px] left-[33.5px] box-border w-[214px] h-px border-t-[1px] border-solid border-black" />
      <i className="absolute top-[169px] left-[calc(50%_-_111px)] tracking-[-0.02em] font-bold">{`Welcome to the DecentraSchool `}</i>
      <div className="absolute top-[158px] left-[1073px] w-[179px] h-[78px] text-center text-xl">
        <img
          className="absolute top-[0px] left-[0px] w-[179px] h-14"
          alt=""
          src={streakStatus}
        />
        <div className="absolute top-[58px] left-[0px] tracking-[-0.02em] font-medium flex items-center justify-center w-[172px] h-5">
          Current Streak
        </div>
        <div className="absolute top-[calc(50%_-_29px)] left-[67px] text-10xl tracking-[-0.02em] font-extrabold font-futura-hv-bt text-white">
          X 0
        </div>
      </div>
      <div className="absolute top-[266px] left-[340px] w-[858px] h-[1064px] text-center text-xl">
        <div className="absolute top-[0px] left-[0px] w-[858px] h-[332px]">
          <div className="absolute top-[0px] left-[0px] w-[858px] h-[332px]">
            <div className="absolute top-[0px] left-[0px] w-[858px] h-[332px]">
              <div className="absolute top-[0px] left-[0px] rounded-21xl [background:linear-gradient(116.96deg,_rgba(92,_92,_92,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] box-border w-[858px] h-[332px] border-[1px] border-solid border-white" />
              <div
                className="absolute top-[252px] left-[566px] w-[172.78px] h-[57.59px] cursor-pointer font-heading"
                onClick={onButtomContainerClick}
              >
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-orange w-[175px] h-[50px]" />
                <b className="absolute top-[3px] left-[12px] tracking-[-0.02em] flex items-center justify-center w-[150px] h-[50px]">
                  Resume Learning
                </b>    
              </div>
              <div className="absolute top-[200px] left-[38.4px] text-base tracking-[-0.02em] font-medium flex items-center justify-center w-[244.46px] h-[25.59px]">
                Code a BRC-20 token in Clarity on Stacks Blockchain
              </div>
              <div className="absolute top-[253.4px] left-[36.9px] text-sm tracking-[-0.02em] font-medium inline-block w-[244.46px] h-[49.62px]">
                <p className="m-0">
                  A hands-on course for devs to create their first BRC-20 token.
                  Learn Clarity programming language
                </p>
                <p className="m-0"></p>
              </div>
            </div>
            <div className="absolute top-[23.24px] left-[30.92px] w-[257.92px] h-[150.41px]">
              <img
                className="absolute top-[1.55px] left-[1.5px] w-[256.43px] h-[148.86px] object-cover"
                alt=""
                src={video}
              />
              <div className="absolute top-[0px] left-[0px] bg-silver w-[257.92px] h-[150.41px] opacity-[0.7]" />
              {/* <img
                className="absolute top-[45.03px] left-[107.6px] w-[58.86px] h-[73.92px] cursor-pointer"
                alt=""
                src="/polygon-1.svg"
                onClick={onPolygonClick}
              /> */}
            </div>
            <div className="absolute top-[22px] left-[512px] w-[278px] h-[178px]">
              <div className="absolute top-[41px] left-[11px] w-[260px] h-[118px] flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <img
                    className="relative w-[258px] h-[120.92px]"
                    alt=""
                    src={meter}
                  />
                </div>
              </div>
              <div className="absolute top-[161px] left-[0px] tracking-[-0.02em] font-medium flex items-center justify-center w-[50px] h-[17px]">
                Low
              </div>
              <div className="absolute top-[161px] left-[228px] tracking-[-0.02em] font-medium flex items-center justify-center w-[50px] h-[17px]">
                High
              </div>
              <div className="absolute top-[0px] left-[46px] tracking-[-0.02em] font-medium flex items-center justify-center w-[188px] h-[30px]">
                Popularity Meter
              </div>
            </div>
            <div className="absolute top-[25px] left-[360px] w-[81px] h-[285px] text-darkgreen font-heading">
              <b className="absolute top-[0px] left-[7px] tracking-[-0.02em] flex items-center justify-center w-[66px] h-[33px]">
                30%
              </b>
              <div className="absolute top-[32px] left-[5px] rounded-3xs bg-gainsboro w-[70px] h-[217px]" />
              <img
                className="absolute top-[120.55px] left-[5px] rounded-3xs w-[71px] h-[131.5px]"
                alt=""
                src={status}
              />
              <b className="absolute top-[262px] left-[0px] tracking-[-0.02em] flex text-black items-center justify-center w-[81px] h-[23px]">
                Course Status
              </b>
            </div>
          </div>
        </div>
        {/* <div className="absolute top-[357px] left-[0px] w-[858px] h-[332px]">
          <div className="absolute top-[0px] left-[0px] w-[858px] h-[332px]">
            <div className="absolute top-[0px] left-[0px] w-[858px] h-[332px]">
              <div className="absolute top-[0px] left-[0px] rounded-21xl [background:linear-gradient(116.96deg,_rgba(92,_92,_92,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] box-border w-[858px] h-[332px] border-[1px] border-solid border-white" />
              <div
                className="absolute top-[252px] left-[566px] w-[172.78px] h-[57.59px] cursor-pointer font-heading"
                onClick={onButtomContainer1Click}
              >
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-orange w-[172.78px] h-[57.59px]" />
                <b className="absolute top-[6.4px] left-[25.92px] tracking-[-0.02em] flex items-center justify-center w-[120.94px] h-[44.8px]">
                  Resume Learning
                </b>
              </div>
              <div className="absolute top-[188.24px] left-[38.4px] text-base tracking-[-0.02em] font-medium flex items-center justify-center w-[244.46px] h-[25.59px]">
                Code a BRC-20 token in Clarity on Stacks Blockchain
              </div>
              <div className="absolute top-[253.4px] left-[36.9px] text-sm tracking-[-0.02em] font-medium inline-block w-[244.46px] h-[49.62px]">
                <p className="m-0">
                  A hands-on course for devs to create their first BRC-20 token.
                  Learn Clarity programming language
                </p>
                <p className="m-0"></p>
              </div>
            </div>
            <div className="absolute top-[23.24px] left-[30.92px] w-[257.92px] h-[150.41px]">
              <img
                className="absolute top-[1.55px] left-[1.5px] w-[256.43px] h-[148.86px] object-cover"
                alt=""
                src="/image-5@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] bg-silver w-[257.92px] h-[150.41px] opacity-[0.7]" />
              <img
                className="absolute top-[45.03px] left-[107.6px] w-[58.86px] h-[73.92px] cursor-pointer"
                alt=""
                src="/polygon-1.svg"
                onClick={onPolygon1Click}
              />
            </div>
            <div className="absolute top-[22px] left-[512px] w-[278px] h-[178px]">
              <div className="absolute top-[41px] left-[11px] w-[260px] h-[118px] flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <img
                    className="relative w-[258px] h-[120.92px]"
                    alt=""
                    src="/group-3141.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[161px] left-[0px] tracking-[-0.02em] font-medium flex items-center justify-center w-[50px] h-[17px]">
                Low
              </div>
              <div className="absolute top-[161px] left-[228px] tracking-[-0.02em] font-medium flex items-center justify-center w-[50px] h-[17px]">
                High
              </div>
              <div className="absolute top-[0px] left-[46px] tracking-[-0.02em] font-medium flex items-center justify-center w-[188px] h-[30px]">
                Popularity Meter
              </div>
            </div>
            <div className="absolute top-[25px] left-[360px] w-[81px] h-[285px] text-darkgreen font-heading">
              <b className="absolute top-[0px] left-[7px] tracking-[-0.02em] flex items-center justify-center w-[66px] h-[33px]">
                30%
              </b>
              <div className="absolute top-[32px] left-[5px] rounded-3xs bg-gainsboro w-[70px] h-[217px]" />
              <img
                className="absolute top-[120.55px] left-[5px] rounded-3xs w-[71px] h-[131.5px]"
                alt=""
                src="/rectangle-40.svg"
              />
              <b className="absolute top-[262px] left-[0px] tracking-[-0.02em] flex text-black items-center justify-center w-[81px] h-[23px]">
                Course Status
              </b>
            </div>
          </div>
        </div>
        <div className="absolute top-[732px] left-[0px] w-[858px] h-[332px]">
          <div className="absolute top-[0px] left-[0px] w-[858px] h-[332px]">
            <div className="absolute top-[0px] left-[0px] w-[858px] h-[332px]">
              <div className="absolute top-[0px] left-[0px] rounded-21xl [background:linear-gradient(116.96deg,_rgba(92,_92,_92,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] box-border w-[858px] h-[332px] border-[1px] border-solid border-white" />
              <div
                className="absolute top-[252px] left-[566px] w-[172.78px] h-[57.59px] cursor-pointer font-heading"
                onClick={onButtomContainer2Click}
              >
                <div className="absolute top-[0px] left-[0px] rounded-21xl bg-orange w-[172.78px] h-[57.59px]" />
                <b className="absolute top-[6.4px] left-[25.92px] tracking-[-0.02em] flex items-center justify-center w-[120.94px] h-[44.8px]">
                  Resume Learning
                </b>
              </div>
              <div className="absolute top-[188.24px] left-[38.4px] text-base tracking-[-0.02em] font-medium flex items-center justify-center w-[244.46px] h-[25.59px]">
                Code a BRC-20 token in Clarity on Stacks Blockchain
              </div>
              <div className="absolute top-[253.4px] left-[36.9px] text-sm tracking-[-0.02em] font-medium inline-block w-[244.46px] h-[49.62px]">
                <p className="m-0">
                  A hands-on course for devs to create their first BRC-20 token.
                  Learn Clarity programming language
                </p>
                <p className="m-0"></p>
              </div>
            </div>
            <div className="absolute top-[23.24px] left-[30.92px] w-[257.92px] h-[150.41px]">
              <img
                className="absolute top-[1.55px] left-[1.5px] w-[256.43px] h-[148.86px] object-cover"
                alt=""
                src="/image-5@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] bg-silver w-[257.92px] h-[150.41px] opacity-[0.7]" />
              <img
                className="absolute top-[45.03px] left-[107.6px] w-[58.86px] h-[73.92px] cursor-pointer"
                alt=""
                src="/polygon-1.svg"
                onClick={onPolygon2Click}
              />
            </div>
            <div className="absolute top-[22px] left-[512px] w-[278px] h-[178px]">
              <div className="absolute top-[41px] left-[11px] w-[260px] h-[118px] flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <img
                    className="relative w-[258px] h-[120.92px]"
                    alt=""
                    src="/group-3141.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[161px] left-[0px] tracking-[-0.02em] font-medium flex items-center justify-center w-[50px] h-[17px]">
                Low
              </div>
              <div className="absolute top-[161px] left-[228px] tracking-[-0.02em] font-medium flex items-center justify-center w-[50px] h-[17px]">
                High
              </div>
              <div className="absolute top-[0px] left-[46px] tracking-[-0.02em] font-medium flex items-center justify-center w-[188px] h-[30px]">
                Popularity Meter
              </div>
            </div>
            <div className="absolute top-[25px] left-[360px] w-[81px] h-[285px] text-darkgreen font-heading">
              <b className="absolute top-[0px] left-[7px] tracking-[-0.02em] flex items-center justify-center w-[66px] h-[33px]">
                30%
              </b>
              <div className="absolute top-[32px] left-[5px] rounded-3xs bg-gainsboro w-[70px] h-[217px]" />
              <img
                className="absolute top-[120.55px] left-[5px] rounded-3xs w-[71px] h-[131.5px]"
                alt=""
                src="/rectangle-40.svg"
              />
              <b className="absolute top-[262px] left-[0px] tracking-[-0.02em] flex text-black items-center justify-center w-[81px] h-[23px]">
                Course Status
              </b>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default StudentsCourses;
