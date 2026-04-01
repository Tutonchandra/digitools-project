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

        <div className=' container mx-auto p-10 mb-5 bg-zinc-50 rounded-lg'>
            <h1 className="text-2xl font-semibold">Your Cart</h1>

            {
                carts.length === 0 ? <p className=" bg-gray-200 justify-center text-center items-center m-10 p-20 rounded-2xl text-3xl text-black">Cart is Empty</p> : <>

                    <div className=" space-y-5 mt-5 rounded-xl  ">
                        {carts.map(item =>
                            <div className=" space-y-2.5 bg-white justify-between items-center p-8 rounded-lg" key={item.id}>

                                <div className="flex justify-between gap-10 items-center ">
                                    <div className="flex space-x-2 gap-5 items-center">
                                        <img className="h-10 w-10 object-contain" src={item.image} />
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                    </div>

                                    <button onClick={() =>handleRemove(item)} >remove</button>
                                </div>
                                <h2 className="text-md font-bold">${item.price}/month</h2>


                            </div>)
                        }
                    </div>
                    <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl font-bold">
                        <div>Total</div>
                        <div>${totalPrice}</div>
                    </div>
                    <button onClick={handlePayment} className="btn w-full text-3xl rounded-lg bg-red-600 text-white mt-5  px-10 p-8 justify-center">Proceed To Checkout</button>
                </>
            }





        </div>


    )
}

export default Cart;