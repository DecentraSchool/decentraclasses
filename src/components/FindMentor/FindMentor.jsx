import mentors from "./mentors.json";
import Mentor from './Mentor'


const FindMentor = () => {
    return (
        <main className='xl:px-[88px] md:px-[44px] px-[20px] mb-[24px]'>
            <div className='flex items-center justify-center py-[29px]'>
                <div className="flex items-center flex-col">
                    <div className="w-[770px] text-center text-neutral-700 text-5xl font-bold leading-[75px]">Learn and grow with the help of world-class mentors</div>
                    <div className="w-[471px] text-center text-neutral-400 text-base font-normal  leading-[34px]">Book and meet over 100+ mentors for 1:1 mentorship in our global community.</div>
                    <div className='flex flex-1 text-[15px]   justify-center font-medium  items-center  relative rounded-[10px]'>
                        <input type="text" placeholder='Search...' className='text-neutral-400 flex-1 py-[17px] pl-[28px] pr-[110px]    md:pr-[138px]  rounded-[10px] border-[1px] border-[#ababab] outline-none' />
                        <button className='truncat md:text-[12px] text-[10px] text-white px-[16px] md:px-[20px] py-[8px] md:py-[11px] bg-blue-600 rounded-[10px] absolute right-[10px] w-max'>Search</button>
                    </div>
                </div>
            </div>
            <section className="py-[15px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-[45px] md:pl-[36px] md:pr-[54px]">
                {
                    mentors.data.map((mentor) => {
                        return (
                            <Mentor id={mentor._id} key={mentor._id} isrc={mentor.img} name={mentor.name} tagline={mentor.tagLine} experience={mentor.experience} linkedIn={mentor.contact.Linkdin} />
                        )
                    })
                }
            </section>
        </main>
    )
}

export default FindMentor