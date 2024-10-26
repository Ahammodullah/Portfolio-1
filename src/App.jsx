import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import img1 from "./image/DropDown.png";
import img2 from "./image/mobile.png";
import img3 from "./image/Vector (4).png";
import img4 from "./image/Cart1 with buy (1).png";
import img5 from "./image/logo1.png";
import img6 from "./image/Vector (3).png";
import Product from "./Product";
import Category from "./components/Category";
import BestSellingProducts from "./components/BestSellingProducts";



function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className="bg-black w-full h-[48px] md:flex">
        <div className="bg-black p-3 w-full h-[48px] md:flex md:justify-center md:items-center text-[#FAFAFA] text-[12px] lh-[21px] ml-28">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-medium"> ShopNow </span>
        </div>
        <div className="text-[#FAFAFA] text-[12px] lh-[21px] mr-32 items-center flex">
          <a href="#">English</a>
          <img src={img1} alt="" className="mt-1 w-4 h-4" />
        </div>
      </div>

      <div className="flex bg-white p-7 ">
        <div className="text-[22px] font-bold mr-20 ml-32">
          <a href="#">Exclusive</a>
        </div>

        <div className="flex justify-center items-center text-[14px] ">
          <ul
            className="flex items-center font-[
Poppins]"
          >
            <li className="px-6 hover:text-red-500 duration-500">
              {" "}
              <a href="#" className="underline">
                Home
              </a>
            </li>
            <li className="px-6 hover:text-red-500 duration-500">
              {" "}
              <a href="#">Contact</a>
            </li>
            <li className="px-6 hover:text-red-500 duration-500">
              {" "}
              <a href="#">About</a>
            </li>
            <li className="px-6 hover:text-red-500 duration-500">
              {" "}
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="w-[243px] h[38px] bg-slate-100 rounded text-[12px] flex justify-center items-center ml-32">
          What are you looking for?
        </div>
        <div className="flex justify-center items-center gap-3">
          <img src={img3} alt="" className=" w-4 h-4 ml-3" />
          <img src={img4} alt="" className=" w-4 h-4" />
        </div>
      </div>
      <div className="border"></div>

      <div className="flex justify-center items-center mt-8">
        <div className="list-none mr-60">
          <li>
            <a href="#">Woman’s Fashion</a>
          </li>
          <li>
            <a href="#">Men’s Fashion</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Home & Lifestyle</a>
          </li>
          <li>
            <a href="#">Medicine</a>
          </li>
          <li>
            <a href="#">Sports & Outdoor</a>
          </li>
          <li>
            <a href="#">Baby’s & Toys</a>
          </li>
          <li>
            <a href="#">Groceries & Pets</a>
          </li>
          <li>
            <a href="#">Health & Beauty</a>
          </li>
        </div>

        <div className="flex gap-16 bg-black text-white justify-center items-center w-[594px] h-[220px]">
          <div className="ml-10">
            <div className="flex gap-2 items-center">
              <img src={img5} alt="" className=" w-6 h-7" />
              <p className="text-[12px]">iPhone 14 Series</p>
            </div>
            <p className="text-[28px] font-medium mt-4 mb-4">
              Up to 10% <br /> off Voucher
            </p>

            <div className="flex items-center gap-1">
              <p className="text-[12px] underline">Shop Now</p>
              <img src={img6} alt="" className=" w-3 h-3" />
            </div>
          </div>
          <img src={img2} alt="" className=" h-[220px]" />
        </div>
      </div>

      <Product />
      <Category/>
      <BestSellingProducts/>

        
           </>
  );
}
export default App;
