import { useState } from "react";
import img7 from "./image/icons_arrow-left.svg";
import img8 from "./image/icons arrow-right.svg";
import img9 from "./image/remote.png";
import img10 from "./image/keyboad.png";
import img11 from "./image/tv.png";
import img12 from "./image/chear.png";
import ProductSlider from "./components/ProductSlider";
import Category from "./components/Category";
import img14 from "./image/heart.svg";
import img15 from "./image/eye.svg";


function Product() {
  const [products, setProducts] = useState([
    {
      image: img9,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      strikePrice: 160,
      ratingCount: 88,
      heart:img14,
      eye:img15,
      discount:-40,
    },
    {
      image: img10,
      name: "Mechanical Keyboard",
      price: 80,
      strikePrice: 100,
      ratingCount: 45, 
      heart:img14,
      eye:img15,
      discount:-35,
    },
    
    {
      image: img11,
      name: "Smart TV",
      price: 400,
      strikePrice: 450,
      ratingCount: 200,
      heart:img14,
      eye:img15,
      discount:-30,
    },
    {
      image: img12,
      name: "Gaming Chair",
      price: 150,
      strikePrice: 180,
      ratingCount: 112,
      heart:img14,
      eye:img15,
      discount:-25,
    },
  ]);

  return (
    <>
      <div className="flex items-center gap-1 mt-20 ml-36">
        <div className="w-[20px] h-[40px] bg-red-500 ml-4 rounded"></div>
        <div className="text-[12px] text-red-500">Today’s</div>
      </div>

      <div className="flex gap-16 items-center ml-36 mt-4">
        <div>
          <p className="text-black text-[25px] font-bold">Flash Sales</p>
        </div>

        <div className="flex gap-6 ">
          <div>
            <p className="text-sm">Days</p>
            <p className="text-xl font-bold">03</p>
          </div>
          <div>
            <p className="text-sm">Hours</p>
            <p className="text-xl font-bold">
              <span className="text-red-500">:</span> 23
            </p>
          </div>
          <div>
            <p className="text-sm">Minutes</p>
            <p className="text-xl font-bold">
              <span className="text-red-500">:</span> 19
            </p>
          </div>
          <div>
            <p className="text-sm">Seconds</p>
            <p className="text-xl font-bold">
              <span className="text-red-500">:</span> 56
            </p>
          </div>
        </div>
        <div className="flex gap-4 ml-[490px]">
          <img src={img7} alt="" className="bg-slate-200 rounded-full" />
          <img src={img8} alt="" className="bg-slate-200 rounded-full" />
        </div>
      </div>
      

      <ProductSlider products={products} />
<div className="flex justify-center items-center my-5">
<button className="bg-[#DB4444] w-[234px] h-[56px] rounded text-white hover:bg-blue-500 duration-500">View All Products</button>

</div>


<div className="flex items-center gap-1 mt-20 ml-36">
        <div className="w-[20px] h-[40px] bg-[#DB4444] ml-4 rounded"></div>
        <div className="text-[12px] text-[#DB4444]">Categories</div>
      </div>

    </>
  );
}


export default Product;
