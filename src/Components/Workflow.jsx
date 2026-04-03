import React from 'react'

const Workflow = () => {
    return (
        <div>

            <div className='text-center justify-items-center content-center md:bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white space-y-5 mt-20 pt-20 pb-20 '>
                <h2 className=' text-3xl md:text-2xl lg:text-5xl  font-semibold'>Ready to Transform Your Workflow?</h2>
                <p className='text-lg mx-auto  md:w-80 lg:w-4/12'>Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.</p>



                <div className="flex  flex-wrap gap-4 pt-4 ">
                    <button className=" bg-white text-purple-600 hover:text-white hover:bg-linear-to-r from-[#4f39f6]  to-[#9514fa] border-3 border-purple-500 px-8 py-4 rounded-full font-extrablod text-lg flex items-center gap-3">

                        Watch Video
                    </button>
                    <button className=" bg-linear-to-r from-[#4f39f6]  to-[#9514fa]  text-white hover:bg-white hover:text-white  border-3 border-purple-500 px-8 py-4 rounded-full font-extrablod text-lg flex items-center gap-3">

                        View Pricing
                    </button>
                </div>
                <p className='text-center justify-center text-sm'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    )
}

export default Workflow