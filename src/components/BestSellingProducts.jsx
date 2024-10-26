import { useState } from "react";
 
import img9 from "../image/remote.png";
import img10 from "../image/keyboad.png";
import img11 from "../image/tv.png";
import img12 from "../image/chear.png";
 
import img14 from "../image/heart.svg";
import img15 from "../image/eye.svg";

// import BestSellingProducts from "../components/BestSellingProducts";



function BestSellingProducts() {
  const [sells, setProducts] = useState([
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
      

    </>
  );
}


export default BestSellingProducts;
