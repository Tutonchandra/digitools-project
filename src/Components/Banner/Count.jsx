import React from 'react'

const Count = () => {
    return (
        <>
            <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] h-75 mt-20 mb-20  content-center '>
                <div className='container mx-auto flex justify-around text-white '>
                    <div className=' justify-center text-center space-y-2 p-5'>
                        <h1 className='text-7xl'>50K</h1>
                        <p className='text-3xl text-zinc-200'>Active User</p>
                    </div>
                    <div className=' justify-center text-center space-y-2 p-5'>
                        <h1 className='text-7xl'>200K</h1>
                        <p className='text-3xl text-zinc-200'>Premium tools</p>
                    </div>
                    <div className=' justify-center text-center space-y-2 p-5'>
                        <h1 className='text-7xl'>4.5k</h1>
                        <p className='text-3xl text-zinc-200'>Rating</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Count