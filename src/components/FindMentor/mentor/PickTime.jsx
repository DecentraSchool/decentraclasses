

const PickTime = ({ schedule, selectedDateIndex, handleTimeSelect, selectedTime }) => {



    return (
        <div className="relative">
            <select
                onChange={handleTimeSelect}
                value={selectedTime}
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white focus:shadow-outline-indigo"
            >
                {schedule[selectedDateIndex]?.timings?.map((stime, index) => (
                    <option key={index} value={stime} className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white focus:shadow-outline-indigo">
                        {stime}
                    </option>
                ))}
            </select>
        </div>

    );
};

export default PickTime;
