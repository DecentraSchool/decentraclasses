import huddle01 from '../../assets/huddle01.jpg';
import lighthouse from '../../assets/lighthouse.jpg';
import polybase from '../../assets/polybase.jpg';

export default function Truster() {
    return (
        <div className="pb-4 pt-10 px-10 flex flex-col items-center gap-16">
            <h1 className="font-extrabold text-3xl">Trusted By</h1>
            <div className="flex gap-16 flex-row transform translate-x-[-22%] animate-run items-center">
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 ">
                    <img src={huddle01} className="w-8" alt="" />
                    <h3>Huddle01</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 ">
                    <img src={lighthouse} className="w-8" alt="" />
                    <h3>Lighthouse</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 b ">
                    <img src={polybase} className="w-7" alt="" />
                    <h3>Polybase</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 ">
                    <img src={huddle01} className="w-8" alt="" />
                    <h3>Huddle01</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 ">
                    <img src={lighthouse} className="w-8" alt="" />
                    <h3>Lighthouse</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 b ">
                    <img src={polybase} className="w-7" alt="" />
                    <h3>Polybase</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 ">
                    <img src={huddle01} className="w-8" alt="" />
                    <h3>Huddle01</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 ">
                    <img src={lighthouse} className="w-8" alt="" />
                    <h3>Lighthouse</h3>
                </div>
                <div className="flex items-center gap-4 w-[180px] px-4 py-3 rounded-md backdrop-blur-sm bg-white/30 b ">
                    <img src={polybase} className="w-7" alt="" />
                    <h3>Polybase</h3>
                </div>
            </div>
        </div>

    )
}