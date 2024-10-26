import img13 from "../image/Vector.svg";

function ProductSlider({ products,sells }) {
  return (
    <div className="flex gap-4 justify-center items-center my-10">
      {products.map((product, index) => (
        <div key={index} className="">
           <div className="bg-slate-100 w-[270px] h-[250px] ">
             <div className="flex justify-between">
            <div className="w-[55px] h-[26px] bg-[#DB4444] ml-4 rounded mt-2 text-white flex items-center justify-center text-[12px]">
            
                {product.discount}%
                
            </div>


            <div className=" mt-2 mr-2">
              <img
                src={product.heart}
                alt={product.heart}
                className="w-[16px] h-[14px] object-cover"
              />
              <img
                src={product.eye}
                alt={product.eye}
                className=" mt-3 w-[17px] h-[14px] object-cover"
              />
            </div>
          </div>

          <div className="  flex justify-center items-center  ">
            <img
              src={product.image}
              alt={product.name}
              className=" object-cover"
            />
          </div>
           </div>

          <div>
            <p className="text-[12px] mt-2">{product.name}</p>
            <p className="text-[12px] mt-1">
              ${product.price}{" "}
              <span className="text-gray-400">
                <s>${product.strikePrice}</s>
              </span>
            </p>
          </div>

          <div className="flex gap-[2px] w-3 mt-2">
            {[...Array(5)].map((_, starIndex) => (
              <img key={starIndex} src={img13} alt="star" />
            ))}{" "}
            ({product.ratingCount})
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSlider;
