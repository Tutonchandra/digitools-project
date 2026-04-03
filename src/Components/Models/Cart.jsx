import { toast } from "react-toastify";


const Cart = ({ carts, setCarts }) => {



    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successfull")
    };
    const handleRemove = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.error("Item Successfully Removed")
    }

    return (

        <div className=' container mx-auto p-10 mb-5  rounded-lg'>
            <h1 className="text-2xl font-semibold">Your Cart</h1>

            {
                carts.length === 0 ? <p className=" bg-gray-100 justify-center text-center items-center m-10 p-20 rounded-2xl text-2xl text-zinc-500">Cart is Empty</p> : <>

                    <div className=" space-y-5 mt-5 rounded-xl  ">
                        {carts.map(item =>
                            <div className=" space-y-2.5 bg-white shadow-md justify-between items-center p-8 rounded-lg" key={item.id}>

                                <div className="flex justify-between gap-10 items-center content-center ">
                                    <div className=" space-x-2 gap-5 items-center">
                                        <div className="flex gap-5 space-y-2">
                                            <img className="h-10 w-10 object-contain" src={item.image} />
                                            <h2 className="text-xl font-bold">{item.title}</h2>
                                        </div>
                                        <h2 className="text-md font-bold">${item.price}/month</h2>
                                    </div>

                                    <button className=" text-xl cursor-pointer text-red-400 capitalize hover:" onClick={() => handleRemove(item)} >remove</button>
                                </div>


                            </div>)
                        }
                    </div>
                    <div className="flex justify-between text-zinc-600 p-5 mt-5 rounded-lg text-2xl font-bold">
                        <div>Total</div>
                        <div>${totalPrice}</div>
                    </div>
                    <button onClick={handlePayment} className="btn w-full text-2xl rounded-lg bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white mt-5  px-10 p-8 justify-center">Proceed To Checkout</button>
                </>
            }





        </div>


    )
}

export default Cart;