
import Navber from "./Components/Navber/Navber"

import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Models from "./Components/Models/Models";
import Cart from "./Components/Models/Cart";
import { useState } from "react";

const getModels = async () => {
  const res = await fetch("/models.json")
  return (res.json())
}

const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab] = useState("Model")
  const [carts, setCarts] = useState([])

  return (

    <>
      <Navber />
      <Banner />
      <div className='text-center space-y-5 mb-10'>
        <h2 className=' text-2xl md:text-4xl lg:text-7xl  font-semibold'>Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.</p>
      </div>
      <div className='tabs tabs-box justify-center bg-transparent gap-4'>
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-60 text-2xl"
          aria-label="Products"
          onClick={() => setActiveTab("Model")}
          defaultChecked

        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 text-2xl "
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("Cart")}

        />
      </div>
      {activeTab === "Model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}
      <Footer />

    </>
  )
}

export default App;
