import { useState } from "react";
import Navber from "./Components/Navber/Navber"

import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Models from "./Components/Models/Models";
import Cart from "./Components/Models/Cart";
import Count from "./Components/Banner/Count";
import GetsectionCart from "./Components/Banner/GetsectionCart";
import Pricing from "./Components/Banner/Pricing";
import Workflow from "./Components/Workflow";


const getModels = async () => {
  const res = await fetch("/digitools-project/demo.json")
  return (res.json())
}

const getPricing = async () => {
  const res = await fetch("/digitools-project/pricing.json");
  return res.json();
};

const pricingPromise = getPricing();

const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab] = useState("Model")
  const [carts, setCarts] = useState([])

  return (

    <>
      <Navber />
      <Banner />
      <Count />
      <div className='text-center space-y-5 mt-20 mb-20'>
        <h2 className=' text-xl md:text-2xl lg:text-5xl  font-semibold'>Premium Digital Tools</h2>
        <p className=" text-lg mx-auto text-zinc-600  md:w-80 lg:w-4/12">Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.</p>
      </div>
      <div className='tabs tabs-box bg-transparent justify-center  gap-4'>
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-60 text-2xl
            ${activeTab === "Model" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""}`}
          aria-label="Products"
          onClick={() => setActiveTab("Model")}
          defaultChecked

        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-60 text-2xl
            ${activeTab === "Cart" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("Cart")}

        />
      </div>

      {activeTab === "Model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}
      <GetsectionCart />
      <Pricing pricingPromise={pricingPromise} />
      <Workflow />


      <Footer />

    </>
  )
}

export default App;
