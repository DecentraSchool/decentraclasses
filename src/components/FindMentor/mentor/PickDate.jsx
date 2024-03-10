import { useEffect, useState } from 'react';
import { getDayAbbreviation, getMonthAbbreviationWithDate } from '../constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const PickDate = ({ schedule, handleDateClick, selectedDateIndex }) => {
    const itemsPerPage = 3;
    const [startIndex, setStartIndex] = useState(0);

    const handlePrevClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };
    

    const handleNextClick = () => {
        if (startIndex + itemsPerPage < schedule.length) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className="flex gap-[18px]">
            <button onClick={handlePrevClick}><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
            {schedule?.slice(startIndex, startIndex + itemsPerPage).map((sch, index) => (
                <div
                    key={index + startIndex}
                    onClick={() => handleDateClick(index + startIndex)}
                    className={`border-[#D9D9D9D9] hover:border-black hover:scale-105 transition-all duration-200 cursor-pointer group text-[14px] w-[78px] bg-white flex-col items-center py-[10px] rounded-[15px] border-[1px]  flex gap-[4px] ${selectedDateIndex === index + startIndex ? 'border-black' : ''
                        }`}
                >
                    <p className={`text-[#0000008A] group-hover:text-black text-[12px]`}>
                        {getDayAbbreviation(sch.date)}
                    </p>
                    <p>{getMonthAbbreviationWithDate(sch.date)}</p>
                    <p className="text-[#65FF99] text-[12px]">
                        {sch.slotsAvailable <= 1
                            ? `${sch.slotsAvailable} Slot`
                            : `${sch.slotsAvailable} Slots`}
                    </p>
                </div>
            ))}
            <button onClick={handleNextClick}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
        </div>
    );
};

export default PickDate;