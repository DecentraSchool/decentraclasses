import mentors from "./mentors.json";
import Mentor from './Mentor'


const FindMentor = () => {
    return (
        <main className='px-[88px] mb-[24px]'>
            <div className='flex items-center justify-center py-[29px]'>
                <div className='flex flex-1 text-[15px] max-w-2xl  justify-center font-medium  items-center  relative '>
                    <input type="text" placeholder='Search...' className='text-neutral-400 flex-1 py-[17px] pl-[28px] pr-[138px]  rounded-[10px] border-[1px] border-[#ababab] outline-none' />
                    <button className='w-auto text-[12px] text-white px-[20px] py-[11px] bg-blue-600 rounded-[10px] absolute right-3'>Search</button>
                </div>
            </div>
            <section className="py-[15px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-[45px] pl-[36px] pr-[54px]">
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