import { faCalendarWeek, faCircleInfo, faClock, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TimingFrame = ({ isOpen, setOpen, time, date }) => {
    const modalClasses = isOpen ? 'block' : 'hidden';

    return (
        <div className={`fixed inset-0 ${modalClasses} z-50 flex items-center justify-center bg-black bg-opacity-40`}>
            <div className={`bg-white px-[24px] transition-all py-[18px] flex flex-col w-[637px] rounded-[15px] border border-zinc-300  ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between pb-[32px]">
                    <p className="text-black text-base font-medium">Confirm Details and Complete Booking</p>
                    <button>
                        <FontAwesomeIcon icon={faXmark} style={{ color: "#545454", }} onClick={() => setOpen({
                            ...open, timing: false
                        })} />
                    </button>
                </div>
                <div className="flex flex-col pb-[10px] border-b-[2px] border-zinc-300">
                    <div className="flex sm:flex-row flex-col gap-[32px] pb-[14px]">
                        <div className=" rounded-[5px] flex-1 border border-zinc-300 flex items-start py-[14px] px-[12px] gap-[13px]">
                            <FontAwesomeIcon icon={faCalendarWeek} style={{ color: '#00000091' }} />
                            <p className="flex flex-col gap-[5px]">
                                <span className="text-xs ">Session&apos;s date:</span>
                                <span className="text-base font-medium">{date}</span>
                            </p>
                        </div>
                        <div className="flex-1 rounded-[5px] border border-zinc-300 flex items-start py-[14px] px-[12px] gap-[13px]">
                            <FontAwesomeIcon icon={faClock} style={{ color: '#00000091' }} />
                            <p className="flex flex-col gap-[5px]">
                                <span className="text-xs ">Session&apos;s time:</span>
                                <span className="text-base font-medium">{time}</span>
                            </p>
                        </div>
                    </div>
                    <p className="flex gap-[7px]">
                        <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#545454", }} />
                        <span className=" text-xs">We will send confirmation to your email and register phone number.</span>
                    </p>
                </div>
                <div className="pt-[24px] flex justify-end">
                    <button className="text-white text-[16px] px-[33px] py-[10px] rounded-[5px] font-[500] truncate bg-[#0E76FD]" onClick={() => setOpen({
                        done: true, timing: false
                    })}>Proceed to Book</button>
                </div>
            </div>

        </div>
    );
};

export default TimingFrame;
