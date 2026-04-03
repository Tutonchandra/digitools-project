import React, { use } from 'react'
import Models from '../Models/Models';
import { LucideCheck } from 'lucide-react';


const Pricing = ({ pricingPromise }) => {
    const plans = use(pricingPromise)



    return (
        <div>
            <div className='text-center space-y-5 mt-20 mb-2'>
                <h2 className=' text-3xl md:text-2xl lg:text-5xl  font-semibold'>Simple, Transparent Pricing</h2>
                <p className='text-lg mx-auto text-zinc-600  md:w-80 lg:w-4/12'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="container mx-auto grid md:grid-cols-3 gap-8 mt-12 mb-10">
                {plans.map(plan =>
                    <div key={plan.id}
                        className={`p-8 rounded-2xl shadow-md bg-green-300
                            ${plan.popular
                                ? "bg-linear-to-r text-whtie from-[#4f39f6] to-[#9514fa] text-white" : "bg-zinc-100 "
                            }`}>

                        {
                            plan.popular && (<div className="absolute left-1/2 -mt-12 mb-2 -translate-x-1/2 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-md"> Most Popular

                            </div>
                            )}



                        <div className='space-y-2'>
                            <h1 className='text-2xl font-bold capitalize'>{plan.name}</h1>
                            <h1 className='text-xl font-medium text-zinc-400'>{plan.subtitle}</h1>
                        </div>
                        <div className='mt-4'>
                            <p className='text-5xl font-bold '>${plan.price}/<span className='text-3xl font-light text-zinc-400'>month</span></p>
                        </div>
                        <div className='mt-5'>
                            <ul className='space-y-3 gap-5'>
                                {plan.features.map((f, i) =>
                                    <li className='flex gap-2' key={i}><LucideCheck color="#05f555" />{f}</li>
                                )}
                            </ul>
                        </div>

                        <button className={`btn btn-block border-none normal-case text-lg h-10 mt-5 rounded-full ${plan.popular
                            ? 'bg-white text-[#7C3AED] hover:bg-gray-100'
                            : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white '
                            }`}>{plan.button}</button>



                    </div>
                )}
            </div>
        </div>
    )
}

export default Pricing;