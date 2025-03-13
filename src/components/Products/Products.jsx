import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Image1 from "../../assets/product/p-1.jpg";
import Image2 from "../../assets/product/p-2.jpg";
import Image3 from "../../assets/product/p-3.jpg";
import Image4 from "../../assets/product/p-4.jpg";
import Image5 from "../../assets/product/p-5.jpg";
import Image6 from "../../assets/product/p-6.jpg";
import Image7 from "../../assets/product/p-7.jpg";

const productsData = [
  {
    id: 1,
    img: Image1,
    title: "Boat Headphone",
    price: "129",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Image2,
    title: "Rocky Mountain",
    price: "149",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Image3,
    title: "Sony Headphone",
    price: "150",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Image4,
    title: "Bose Headphone",
    price: "175",
    aosDelay: "600",
  },
];
const productsData2 = [
  {
    id: 1,
    img: Image5,
    title: "Beats Headphone",
    price: "239",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Image6,
    title: "JBL Headset",
    price: "149",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Image4,
    title: "Boat Headphone",
    price: "250",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Image7,
    title: "Noise Headphone",
    price: "480",
    aosDelay: "600",
  },
];

function Products() {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={productsData} />
        <ProductCard data={productsData2} />
      </div>
    </div>
  );
}

export default Products;
