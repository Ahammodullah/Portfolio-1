import { useState } from "react";
import img7 from "../image/icons_arrow-left.svg";
import img8 from "../image/icons arrow-right.svg";
import img15 from "../image/cellphone.svg";
import img16 from "../image/computer.svg";
import img17 from "../image/smartwatch.svg";
import img18 from "../image/camera.svg";
import img20 from "../image/gamepad.svg";
import img19 from "../image/headphone.svg";

import img21 from "../image/smartwatch.svg";
import img22 from "../image/camera.svg";
import img23 from "../image/gamepad.svg";
import img24 from "../image/headphone.svg";

function Category() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-16 items-center  ml-36 mt-4">
        <div>
          <p className="text-black text-[25px] font-bold">Browse By Category</p>
        </div>
        <div className="flex gap-4 ml-[680px]">
          <img src={img7} alt="" className="bg-slate-200 rounded-full" />
          <img src={img8} alt="" className="bg-slate-200 rounded-full" />
        </div>
      </div>

      <div className="flex mt-10 items-center justify-center my-5 gap-3 ">
        <div className="flex justify-center border px-14 py-11 rounded ">
           <div className="flex flex-col">
           <img src={img15} alt="" className=" w-[56px] h-[56px]" />
           <p>Phones</p>
           </div>
        </div>

        <div className="flex justify-center border px-14 py-11 rounded">
           <div className="flex flex-col">
           <img
            src={img16}
            alt=""
            className="w-[56px] h-[56px]"
          />
          <p>Computers</p>
           </div>
        </div>
        <div className="flex justify-center border px-14 py-11 rounded">
          <div className="flex flex-col">
          <img
            src={img17}
            alt=""
            className="w-[56px] h-[56px]"
          />
          <p>SmartWatch</p>
          </div>
        </div>
        <div className="flex justify-center border px-14 py-11 bg-[#DB4444] rounded text-white">
           <div className="flex flex-col">
           <img
            src={img18}
            alt=""
            className="w-[56px] h-[56px]"
          />
          <p>Camera</p>
           </div>
        </div>
        <div className="flex justify-center border px-14 py-11 rounded">
           <div className="flex flex-col">
           <img
            src={img19}
            alt=""
            className="w-[56px] h-[56px]"
          />
          <p>HeadPhones</p>
           </div>
        </div>
        <div className="flex justify-center border px-14 py-11 rounded">
          <div className="flex flex-col">
          <img
            src={img20}
            alt=""
            className="w-[56px] h-[56px]"
          />
          <p>Gaming</p>
          </div>
        </div>
      </div>



      <div className="flex items-center gap-1 mt-20 ml-36">
        <div className="w-[20px] h-[40px] bg-red-500 ml-4 rounded"></div>
        <div className="text-[12px] text-red-500">Today’s</div>
      </div>

      <div className="flex gap-16 items-center ml-36 mt-4">
        <div>
          <p className="text-black text-[25px] font-bold">Best Selling Products</p>
        </div>

         
        <div className="ml-[600px] bg-[#DB4444] my-1 rounded text-white">
          <button className="w-[160px] h-[56px]">View All</button>
        </div>
      </div>

      
    </>
  );
}
export default Category;
