import { useCallback } from "react";
import streakStatus from "./streak.svg";
import badge from "./badge.svg"
const StudentDashboard= () => {
  const onCommunityTextClick = useCallback(() => {
    // Please sync "Community's page" to the project
  }, []);

  const onCareerTextClick = useCallback(() => {
    // Please sync "Careers" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke-200 w-full h-[1556px] overflow-y-auto text-left text-5xl text-black font-body">
      {/* <img
        className="absolute top-[0px] left-[0px] w-[2376px] h-[4101px] opacity-[0.5]"
        alt=""
        src="/blurbg.svg"
      /> */}
      {/* <div className="absolute h-[2.51%] w-[73.13%] top-[2.76%] right-[10%] bottom-[94.73%] left-[16.88%] text-xl">
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
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[110px] bg-deepskyblue" />
          <div className="absolute top-[12.5%] left-[17.59%] tracking-[-0.02em] font-medium">
            Register
          </div>
        </div>
      </div> */}
      <div className="absolute top-[158px] left-[18px] rounded-xl [background:linear-gradient(116.96deg,_rgba(92,_92,_92,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(40px)] box-border w-[245px] h-[971px] border-[1px] border-solid border-white" />
      <div className="absolute top-[210px] left-[47px] rounded-xl bg-gainsboro box-border w-44 h-[43px] border-[1px] border-solid border-deepskyblue" />
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
      <i className="absolute top-[203px] left-[calc(50%_-_111px)] tracking-[-0.02em] font-bold">{`Welcome to the DecentraSchool `}</i>
      <div className="absolute top-[342px] left-[281px] rounded-mini bg-white shadow-[0px_0px_31px_rgba(44,_50,_63,_0.02)] w-[617px] h-[323px] text-lg font-source-sans-pro">
        <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none bg-white w-[617px] flex flex-row pt-[15px] pb-2.5 pr-0 pl-[3px] box-border items-start justify-start">
          <div className="relative w-[609px] h-7">
            <div className="absolute top-[-10.8px] left-[12px] leading-[21.6px] font-semibold">
              Streak Status
            </div>
            <div className="absolute top-[-8px] left-[232.25px] flex flex-row py-0 pr-0 pl-[217.140625px] items-center justify-start gap-[10px] text-2xs text-slategray font-roboto">
              <div className="relative w-[53.22px] h-[16.5px]">
                <div className="absolute top-[calc(50%_-_4.5px)] left-[-22px] rounded-31xl bg-royalblue w-[9px] h-[9px]" />
                <div className="absolute top-[1.25px] left-[-8.39px] leading-[16.5px] flex items-center w-[53px] h-[13px]">
                  blockchain
                </div>
              </div>
              <div className="relative w-[51.89px] h-[16.5px]">
                <div className="absolute top-[calc(50%_-_4.5px)] left-[0px] rounded-31xl bg-skyblue w-[9px] h-[9px]" />
                <div className="absolute top-[1px] left-[14px] leading-[16.5px] flex items-center w-[38.09px] h-[13px]">
                  Web3
                </div>
              </div>
              <div className="relative rounded-md bg-whitesmoke-300 w-[25px] h-7 text-sm text-black font-font-awesome-5-free">
                <div className="absolute top-[7px] left-[9.88px] leading-[14px] flex items-center w-[5.45px] h-3.5">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_155.5px)] left-[8px] w-[773px] h-[350px] overflow-hidden text-center text-xs text-darkslategray-200 font-helvetica">
          <div className="absolute top-[0px] left-[calc(50%_-_386.5px)] w-[797px] h-[350px]">
            <div className="absolute h-[81%] w-[73.25%] top-[7.86%] right-[22.25%] bottom-[11.14%] left-[4.5%]">
              {/* <img
                className="absolute h-[93.24%] top-[10.58%] bottom-[-3.83%] left-[6.93%] max-h-full w-0 opacity-[0]"
                alt=""
              /> */}
              <div className="absolute h-[9.17%] w-[98.54%] top-[90.83%] right-[1.41%] bottom-[0%] left-[0.04%]">
                <div className="absolute h-[53.85%] w-[90.41%] top-[46.15%] right-[9.59%] bottom-[0%] left-[0%]">
                  <div className="absolute w-[3.96%] top-[0%] left-[0%] inline-block">
                    Jan
                  </div>
                  <div className="absolute w-[4.16%] top-[0%] left-[23.91%] inline-block">
                    Feb
                  </div>
                  <div className="absolute w-[4.16%] top-[0%] left-[47.82%] inline-block">
                    Mar
                  </div>
                  <div className="absolute w-[3.77%] top-[0%] left-[71.93%] inline-block">
                    Apr
                  </div>
                  <div className="absolute w-[4.56%] top-[0%] left-[95.44%] inline-block">
                    May
                  </div>
                </div>
                {/* <img
                  className="absolute h-[3.85%] w-[98.21%] top-[-1.92%] right-[0%] bottom-[98.08%] left-[1.79%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/svgjsline1048.svg"
                /> */}
              </div>
              {/* <img
                className="absolute h-[95.89%] w-[99.29%] top-[0.71%] right-[0%] bottom-[3.4%] left-[0.71%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/text-input-container.svg"
              />
              <img
                className="absolute h-[95.01%] w-[95.06%] top-[0%] right-[4.94%] bottom-[4.99%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/container.svg"
              />
              <img
                className="absolute w-[96.6%] top-[10.58%] right-[-3.49%] left-[6.89%] max-w-full overflow-hidden h-0 opacity-[0]"
                alt=""
              />
              <img
                className="absolute w-[99.25%] top-[10.58%] right-[-6.14%] left-[6.89%] max-w-full overflow-hidden h-0 opacity-[0]"
                alt=""
              />
              <img
                className="absolute h-[35.27%] w-[17.66%] top-[10.58%] right-[75.41%] bottom-[54.14%] left-[6.93%] max-w-full overflow-hidden max-h-full"
                alt=""
              />
              <img
                className="absolute h-[35.27%] w-[17.66%] top-[10.58%] right-[75.41%] bottom-[54.14%] left-[6.93%] max-w-full overflow-hidden max-h-full"
                alt=""
              /> */}
            </div>
            {/* <img
              className="absolute h-[28.57%] w-[12.94%] top-[1.43%] right-[87.06%] bottom-[70%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
            /> */}
            <div className="absolute h-[79.24%] w-[1.68%] top-[5.89%] right-[96.22%] bottom-[14.87%] left-[2.1%] text-right text-2xs">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute w-full top-[0%] left-[0%] inline-block">
                  80
                </div>
                <div className="absolute w-full top-[15.89%] left-[0%] inline-block">
                  70
                </div>
                <div className="absolute w-full top-[31.77%] left-[0%] inline-block">
                  60
                </div>
                <div className="absolute w-full top-[47.66%] left-[0%] inline-block">
                  50
                </div>
                <div className="absolute w-full top-[63.54%] left-[0%] inline-block">
                  40
                </div>
                <div className="absolute w-full top-[79.43%] left-[0%] inline-block">
                  30
                </div>
                <div className="absolute w-full top-[95.31%] left-[0%] inline-block">
                  20
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[687px] left-[284px] rounded-mini bg-white shadow-[0px_0px_31px_rgba(44,_50,_63,_0.02)] w-[962px] h-[399px] flex flex-col pt-0 px-0 pb-[25px] box-border items-center justify-start gap-[25px] text-lg font-source-sans-pro">
        <div className="relative rounded-t-mini rounded-b-none bg-white w-[788.5px] h-[53px]">
          <div className="absolute top-[17.2px] left-[15px] leading-[21.6px] font-semibold">
            Your Community
          </div>
          <div className="absolute top-[calc(50%_-_11.5px)] left-[748.5px] rounded-md bg-whitesmoke-300 w-[25px] h-7 text-sm font-font-awesome-5-free">
            <div className="absolute top-[7px] left-[9.88px] leading-[14px] flex items-center w-[5.45px] h-3.5">
              
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-start text-mini text-darkslategray-100 font-roboto">
          <div className="flex flex-col pt-0 px-0 pb-[0.5px] items-start justify-start">
            <div className="flex flex-row items-start justify-start">
              <div className="bg-whitesmoke-100 flex flex-row pt-[11px] pb-[13px] pr-[104.6875px] pl-3 items-start justify-start border-b-[1px] border-solid border-aliceblue">
                <div className="relative leading-[22.5px] font-semibold">
                  ID
                </div>
              </div>
              <div className="bg-whitesmoke-100 flex flex-row pt-[11px] pb-[13px] pr-[205.484375px] pl-3 items-start justify-start border-b-[1px] border-solid border-aliceblue">
                <div className="relative leading-[22.5px] font-semibold">
                  Name
                </div>
              </div>
              <div className="bg-whitesmoke-100 flex flex-row pt-[11px] pb-[13px] pr-[29.671875px] pl-[30.28125px] items-start justify-start text-center border-b-[1px] border-solid border-aliceblue">
                <div className="relative leading-[22.5px] font-semibold">
                  Marks
                </div>
              </div>
              <div className="bg-whitesmoke-100 flex flex-row pt-[11px] pb-[13px] pr-10 pl-[39.84375px] items-start justify-start text-center border-b-[1px] border-solid border-aliceblue">
                <div className="relative leading-[22.5px] font-semibold">
                  Percentage
                </div>
              </div>
              <div className="bg-whitesmoke-100 flex flex-row pt-[11px] pb-[13px] pr-[12.421875px] pl-[46.109375px] items-start justify-start text-right border-b-[1px] border-solid border-aliceblue">
                <div className="relative leading-[22.5px] font-semibold">
                  Year
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-dimgray">
              <div className="relative w-[738.5px] h-[50px]">
                <div className="absolute top-[12.75px] left-[12px] leading-[22.5px]">
                  PRE2209
                </div>
                <div className="absolute top-[14.97px] left-[143.69px] w-[114.66px] h-[18px]">
                  <img
                    className="absolute top-[calc(50%_-_11.47px)] left-[0px] rounded-smi-5 w-[25px] h-[25px] object-cover"
                    alt=""
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  />
                  <div className="absolute top-[0px] left-[35px] leading-[22.5px] flex items-center w-[79.86px] h-[18px]">
                    John Smith
                  </div>
                </div>
                <div className="absolute top-[12.75px] left-[422.8px] leading-[22.5px] text-center">
                  1185
                </div>
                <div className="absolute top-[12.75px] left-[556.63px] leading-[22.5px] text-center">
                  98%
                </div>
                <div className="absolute top-[12.75px] left-[691.8px] leading-[22.5px] text-right">
                  2019
                </div>
                <div className="relative w-[540px] h-[589px]" />
              </div>
              <div className="relative bg-gray w-[738.5px] h-[50px]">
                <div className="absolute top-[12.75px] left-[12px] leading-[22.5px]">
                  PRE1245
                </div>
                <div className="absolute top-[14.97px] left-[143.69px] w-[128.73px] h-[18px]">
                  <img
                    className="absolute top-[calc(50%_-_11.47px)] left-[0px] rounded-smi-5 w-[25px] h-[25px] object-cover"
                    alt=""
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  />
                  <div className="absolute top-[0px] left-[35px] leading-[22.5px] flex items-center w-[93.93px] h-[18px]">
                    Jolie Hoskins
                  </div>
                </div>
                <div className="absolute top-[12.75px] left-[422.8px] leading-[22.5px] text-center">
                  1195
                </div>
                <div className="absolute top-[12.75px] left-[550.44px] leading-[22.5px] text-center">
                  99.5%
                </div>
                <div className="absolute top-[12.75px] left-[691.8px] leading-[22.5px] text-right">
                  2018
                </div>
              </div>
              <div className="relative w-[738.5px] h-[50px]">
                <div className="absolute top-[12.75px] left-[12px] leading-[22.5px]">
                  PRE1625
                </div>
                <div className="absolute top-[14.97px] left-[143.69px] w-[142.03px] h-[18px]">
                  <img
                    className="absolute top-[calc(50%_-_11.47px)] left-[0px] rounded-smi-5 w-[25px] h-[25px] object-cover"
                    alt=""
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  />
                  <div className="absolute top-[0px] left-[35px] leading-[22.5px] flex items-center w-[107.23px] h-[18px]">
                    Pennington Joy
                  </div>
                </div>
                <div className="absolute top-[12.75px] left-[422.8px] leading-[22.5px] text-center">
                  1196
                </div>
                <div className="absolute top-[12.75px] left-[550.44px] leading-[22.5px] text-center">
                  99.6%
                </div>
                <div className="absolute top-[12.75px] left-[691.8px] leading-[22.5px] text-right">
                  2017
                </div>
              </div>
              <div className="relative bg-gray w-[738.5px] h-[50px]">
                <div className="absolute top-[12.75px] left-[12px] leading-[22.5px]">
                  PRE2516
                </div>
                <div className="absolute top-[14.97px] left-[143.69px] w-[136.78px] h-[18px]">
                  <img
                    className="absolute top-[calc(50%_-_11.47px)] left-[0px] rounded-smi-5 w-[25px] h-[25px] object-cover"
                    alt=""
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  />
                  <div className="absolute top-[0px] left-[35px] leading-[22.5px] flex items-center w-[101.98px] h-[18px]">
                    Millie Marsden
                  </div>
                </div>
                <div className="absolute top-[12.75px] left-[422.8px] leading-[22.5px] text-center">
                  1187
                </div>
                <div className="absolute top-[12.75px] left-[550.44px] leading-[22.5px] text-center">
                  98.2%
                </div>
                <div className="absolute top-[12.75px] left-[691.8px] leading-[22.5px] text-right">
                  2016
                </div>
              </div>
              <div className="relative w-[738.5px] h-[50px]">
                <div className="absolute top-[12.75px] left-[12px] leading-[22.5px]">
                  PRE2209
                </div>
                <div className="absolute top-[14.97px] left-[143.69px] w-[114.66px] h-[18px]">
                  <img
                    className="absolute top-[calc(50%_-_11.47px)] left-[0px] rounded-smi-5 w-[25px] h-[25px] object-cover"
                    alt=""
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  />
                  <div className="absolute top-[0px] left-[35px] leading-[22.5px] flex items-center w-[79.86px] h-[18px]">
                    John Smith
                  </div>
                </div>
                <div className="absolute top-[12.75px] left-[422.8px] leading-[22.5px] text-center">
                  1185
                </div>
                <div className="absolute top-[12.75px] left-[556.63px] leading-[22.5px] text-center">
                  98%
                </div>
                <div className="absolute top-[12.75px] left-[691.8px] leading-[22.5px] text-right">
                  2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[192px] left-[1074px] w-[179px] h-[78px] text-center text-xl">
        <img
          className="absolute top-[0px] left-[0px] w-[179px] h-14"
          src={streakStatus}
          alt=""
          
        />
        <div className="absolute top-[58px] left-[0px] tracking-[-0.02em] font-medium flex items-center justify-center w-[172px] h-5">
          Current Streak
        </div>
        <div className="absolute top-[calc(50%_-_29px)] left-[67px] text-[29px] tracking-[-0.02em] font-extrabold font-futura-hv-bt text-white">
          X 0
        </div>
      </div>
      <div className="absolute top-[342px] left-[911px] w-[332px] h-[323px] text-center text-xl font-heading">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-white w-[332px] h-[323px]" />
        <b className="absolute top-[17px] left-[14px] tracking-[-0.02em] flex text-left items-center w-[81px] h-[23px]">
          Badges
        </b>
        <b className="absolute top-[183px] left-[24px] tracking-[-0.02em] flex items-center justify-center w-[277px] h-[37px]">
          Level 025
        </b>
        <div className="absolute top-[242px] left-[16px] tracking-[-0.02em] font-medium font-body flex items-center w-[285px] h-[54px]">
          <span className="[line-break:anywhere] w-full">
            <span>{`need `}</span>
            <span className="text-orange">{`268 `}</span>
            <span>Points for next level</span>
          </span>
        </div>
        <img
          className="absolute h-[43.19%] w-[31.23%] top-[15.71%] right-[35.14%] bottom-[41.1%] left-[33.63%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={badge}
        />
        <div className="absolute top-[50px] left-[95px] w-[133px] h-[133px] overflow-hidden" />
      </div>
      <div className="absolute top-[183px] left-[282px] w-[211px] h-[68px] text-xl">
        <div className="absolute top-[6px] left-[73px] tracking-[-0.02em] font-medium inline-block w-[138px] h-[19px]">
          Good Morning!
        </div>
        <i className="absolute top-[36px] left-[73px] tracking-[-0.02em] inline-block font-bold w-[138px] h-[19px]">
          Ramy Desuza
        </i>
        <img
          className="absolute top-[0px] left-[0px] w-[68px] h-[68px] rounded-full"
          alt=""
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
      </div>
    </div>
  );
};

export default StudentDashboard;
