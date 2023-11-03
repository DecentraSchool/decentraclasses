import hero1 from '../../assets/findMentor/hero1.jpeg'
import Mentor from './Mentor'


const FindMentor = () => {
    return (
        <main className='bg-white -z-20'>
            <section className='flex lg:flex-row items-center lg:justify-between gap-[100px] px-[36px] pb-[12px] lg:flex-nowrap justify-center flex-col'>
                <div className='w-[171px] '>
                    <img src={hero1} alt="" />
                </div>
                <div className='flex flex-1 text-[15px] font-medium  items-center  relative '>
                    <input type="text" placeholder='Search query..' className='text-neutral-400 flex-1 py-[18px] pl-[28px] pr-[138px]  rounded-[10px] border-[1px] border-x-dimgray outline-none' />
                    <button className='w-auto text-[12px] text-white px-[20px] py-[11px] bg-sky-700 rounded-[10px] absolute right-2'>Search</button>
                </div>
                <div className='w-[171px]'>
                    <img src={hero1} alt="" />
                </div>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-[45px] pl-[36px] pr-[54px]">
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
                <Mentor />
            </section>
        </main>
    )
}

export default FindMentor