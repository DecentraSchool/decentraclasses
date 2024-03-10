
const CompleteFrame = ({ isOpen, setOpen }) => {
    const modalClasses = isOpen ? 'block' : 'hidden';

    return (
        <div className={`fixed inset-0 ${modalClasses} z-50 flex items-center justify-center bg-black bg-opacity-40`}>
            <div className="bg-white px-[50px] pb-[38px] pt-[41px] items-center flex flex-col w-[400px] rounded-[15px] border border-zinc-300">
                <div className="w-[100px] flex items-center  justify-center h-[100px] bg-cyan-100 rounded-full">
                    <img src="../images/mentor-bg/trophy.png" />
                </div>
                <div className="pt-[15px] text-opacity-70 text-base font-semibold">Success!</div>
                <div className=" sm:text-[32px] text-[20px] pt-[24px] pb-[32px] font-bold  flex justify-center ">
                    <p className="w-full truncate">Class is Scheduled </p>
                </div>
                <div className="flex items-center  justify-center">
                    <button className="text-white text-[16px] px-[33px] py-[10px] rounded-[5px] font-[500] truncate bg-[#0E76FD]" onClick={() => setOpen({ ...open, done: false })}>Done</button>
                </div>
            </div>
        </div>

    )
}

export default CompleteFrame