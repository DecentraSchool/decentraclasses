import React from 'react'
const CoursePayment = () => {
  return (
    <div>
        <div className='flex'>
        {/* Left details component */}
        <div className='w-[60%] h-[100%] p-10 mb-10'>
            <h1 className='text-[2.5em] font-semibold mb-5'>Let's Make Payment</h1>
            <p className='text-md mb-8'>To start your subscription, input your card details to make payment. 
                You will be redirected to your banks authorization page . </p>
            <form action="#">
                <label className='block'>Card Holder's Name</label>
                    <input type="text" placeholder='Your name' className='p-6 h-[40px] w-[60%] my-3 rounded-lg border-b-2 border-[#9563FF]' />
                <label className='block'>Card Number</label>
                <input type="text" placeholder='0000 0000 0000 0000 ' className='p-6 h-[40px] w-[60%] my-3 rounded-lg border-b-2 border-[#9563FF] ' />
                <div className='flex justify-start'>
                    <div>
                <label className='block'>Expiry Date</label>
                <input type="date" className='p-6 h-[40px] w-[100%] my-3 rounded-lg border-b-2 border-[#9563FF]' />
                </div>
                <div>
                <label className='block mx-10'>CVV</label>
                <input type="text" placeholder='***' className='p-6 mx-10 h-[40px] w-[60%] my-3 rounded-lg border-b-2 border-[#9563FF]'/>
                </div>
                </div>
                <label className='block '>Discount Code</label>
                <input type="text" placeholder='CHMXY#$' className='p-6 h-[40px] w-[70%] my-3 rounded-lg border-b-2 border-[#9563FF]'/>
                <button className='relative right-20 text-[#9563FF] font-semibold'>Apply</button>
                <button className='block w-[20%] h-[50px] mt-3 bg-[#9563FF] text-white font-semibold rounded-lg'>Pay</button>
            </form>

        </div>
        {/* Payment component */}
        <div className='w-[30%] bg-[#e5e1e1] h-[100%] blur-5 mix-blend-multiply mx-10 my-[50px]'>
        {/* <span className='opacity-90 z-0 blur-md'><img src={blob} alt="blob"/></span> */}
        <p className='px-10 pb-5 mt-10 z-2 text-lg font-semibold opacity-60'>You're paying,</p>
        <h1 className='px-[2em] mb-[1em] text-[3em] font-semibold'>Rs.450.00</h1>
        <div className='mt-[3em] mb-[3em] flex justify-between'>
        <span className='px-[2em] text-[1.5em] font-semibold'>Blockchain course</span>
        <span className='px-[2em] py-1 text-[1em]'>Rs.450</span>
        </div>
        
        <div  className='mt-[3em] mb-[3em] flex justify-between'>
        <span className='px-[2em] text-[1.5em] font-semibold'>Discounts & Offers</span>
        <span className='px-[2em] py-1 text-[1em]'>Rs.0</span> 
        </div>
        <hr className='w-[80%] mx-auto opacity-40'></hr>

        <div  className='mt-[3em] mb-[3em] flex justify-between'>
        <span className='px-[2em] text-[1.5em] font-semibold'>Tax</span>
        <span className='px-[2em] py-1 text-[1em]'>Rs.0</span> 
        </div>

        <div  className='mt-[3em] mb-[3em] flex justify-between'>
        <span className='px-[2em] text-[1.5em] font-semibold'>Total</span>
        <span className='px-[2em] py-1 text-[1em]'>Rs.450</span> 
        </div>
           
            
        </div>
        </div>
    </div>
  )
}

export default CoursePayment