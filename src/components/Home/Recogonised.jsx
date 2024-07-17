import aws from "../../assets/awsStartup.png";
import innovation from "../../assets/innovation.jpeg";
import corner from "../../assets/corner.png";
import up from "../../assets/up.png";

export default function Recogonised() {
    return (
        <div className="pb-4 pt-10 px-10 flex flex-col items-center gap-16">
            <h1 className="font-extrabold text-3xl">Recognised By</h1>
            <div className="flex gap-16 flex-row transform translate-x-[-22%] animate-run items-center">
                <div className="flex items-center gap-4 w-[200px]  rounded-md backdrop-blur-sm  ">
                    <img className="w-full h-full" src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/Logo1.png" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src="https://startinup.up.gov.in/wp-content/themes/blankslate/assets/img/logo2.png" className="" alt="" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src="https://serviceshub.microsoft.com/ngx/static/media/microsoft-Logocf73ed798c3e36a55c40.svg" className="" alt="" />
                    <h3>Hub</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src="https://www.glbitm.org/Uploads/image/me-LOGO-GLBCRI-july21.jpg" className="w-12" alt="" />
                    <h3>GL Bajaj Incubation</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src={aws} className="w-18" alt="" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src={corner} className="w-22" alt="" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src={innovation} className="w-28" alt="" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src={up} className="w-22" alt="" />
                    <h3>UPID</h3>
                </div>



                <div className="flex items-center gap-4 w-[200px]  rounded-md backdrop-blur-sm  ">
                    <img className="w-full h-full" src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/Logo1.png" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src="https://startinup.up.gov.in/wp-content/themes/blankslate/assets/img/logo2.png" className="" alt="" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src="https://serviceshub.microsoft.com/ngx/static/media/microsoft-Logocf73ed798c3e36a55c40.svg" className="" alt="" />
                    <h3>Hub</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src="https://www.glbitm.org/Uploads/image/me-LOGO-GLBCRI-july21.jpg" className="w-12" alt="" />
                    <h3>GL Bajaj Incubation</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src={aws} className="w-18" alt="" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src={corner} className="w-22" alt="" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src={innovation} className="w-28" alt="" />
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm  ">
                    <img src={up} className="w-22" alt="" />
                    <h3>UPID</h3>
                </div>

            </div>
        </div>
    );
}
