import { faCalendarWeek, faClock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { fetchAllData, formatDateString } from "../constant";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimingFrame from "./TimingFrame";
import CompleteFrame from "./CompleteFrame";
import PickDate from "./PickDate";
import PickTime from "./PickTime";
import { useAccount } from "wagmi";

const Schedule = ({ id }) => {
    const [schedule, setSchedule] = useState([]);
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);
    const [selectedTime, setSelectedTime] = useState(null)
    const [open, setOpen] = useState({
        timing: false,
        done: false
    });
    const { isConnected } = useAccount();
    const [selectedSlot, setSelectedSlot] = useState({ date: null, time: null });
    const handleDateClick = (index) => {
        setSelectedDateIndex(index);
        const sdate = schedule[index].date;
        const stime = schedule[index].timings[0];
        setSelectedSlot({ date: formatDateString(sdate), time: stime })
    };
    const handleTimeSelect = (event) => {
        setSelectedTime(event.target.value);
        setSelectedSlot({ ...selectedSlot, time: event.target.value })
    };
    const getAllSchedule = async (endPoint) => {
        const res = await fetchAllData(endPoint);
        if (!res.error) {
            setSchedule(res.data.availability);
        }
    }
    console.log(isConnected);
    const handleContinue = () => {
        //wallet

        if (selectedSlot.date && selectedSlot.time) {
            setOpen({
                ...open, timing: true
            })
        }

    }

    useEffect(() => {
        getAllSchedule(`mentorInfo/${id}/availability`);

    }, [])


    return (
        <div className='sm:p-[29px] p-[12px]  h-full border-[#D9D9D9] border-[1px] rounded-[15px]'>
            <TimingFrame isOpen={open.timing} setOpen={setOpen} date={selectedSlot.date || "date"} time={selectedSlot.time || "time"} />
            <CompleteFrame isOpen={open.done} setOpen={setOpen} />
            <div className='flex flex-col gap-[24px] justify-between w-full'>
                <div className="flex flex-col gap-[20px]">
                    <p className="xl:text-[20px] sm:text-[18px] text-[16px] font-semibold truncate">Schedule Session</p>
                    <p className="text-[#776c6ca1] xl:text-[16px] sm:text-[15px] text-[14px] flex gap-3 items-center">
                        <FontAwesomeIcon icon={faCalendarWeek} /> Pick a date</p>
                </div>
                <PickDate schedule={schedule} handleDateClick={handleDateClick} selectedDateIndex={selectedDateIndex} />
                <p className="text-[#000000A1] xl:text-[16px] sm:text-[15px] text-[14px]  flex items-center gap-3">
                    <FontAwesomeIcon icon={faClock} />
                    Pick a date</p>
                <PickTime schedule={schedule} selectedDateIndex={selectedDateIndex} selectedTime={selectedTime} handleTimeSelect={handleTimeSelect} />
                <div className="flex justify-between gap-[20px] pt-[18px]">
                    <div className="flex flex-col text-[12px] gap-[12px] text-[#000000A1]">
                        <p className="flex items-baseline gap-2">
                            <FontAwesomeIcon icon={faCalendarWeek} />{selectedSlot.date || "Date"}</p>
                        <p className="flex items-baseline gap-2"><FontAwesomeIcon icon={faClock} />{selectedSlot.time || "Time"}</p>
                    </div>
                    {
                        isConnected ? <button className="text-white sm:text-[16px] text-[14px] md:px-[33px] px-[16px] py-[8px] md:py-[10px] rounded-[5px] font-[500] truncate bg-[#0E76FD]" onClick={handleContinue}>Continue</button>
                            : <ConnectButton />
                    }

                </div>
            </div>
        </div>
    )
}

export default Schedule