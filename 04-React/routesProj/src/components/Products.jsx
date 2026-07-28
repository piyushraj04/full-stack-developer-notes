import React, { useState } from "react";
import "./Products.css";
import AmulTaaza from "../assets/images/Amul Taaza.avif";
import AmulGold from "../assets/images/Amul Gold.avif";
import AmulCow from "../assets/images/Amul Cow.avif";
import AmulHomo from "../assets/images/Amul Homo.avif";
import AmulLactoseFree from "../assets/images/Amul lactos Free.avif";
import CountryDelightCow from "../assets/images/Coutrydelightcow.avif";
import AmulBuffaloA2 from "../assets/images/Amul Buffalo A2.avif";
import AmulMoti from "../assets/images/Amul Moti.avif";
import MotherDairyFullCream from "../assets/images/Mother dairy Full Cream.avif";
import MotherDairyCow from "../assets/images/Mother Dairy.avif";

// =================== Bread ===================
import Bread1 from "../assets/images/Bread1.avif";
import Bread2 from "../assets/images/Bread2.avif";
import Bread3 from "../assets/images/Bread33.avif";
import Bread4 from "../assets/images/Bread4.avif";
import Bread5 from "../assets/images/Bread5.avif";

// =================== Eggs ===================
import Egg1 from "../assets/images/Egg1.avif";
import Egg2 from "../assets/images/Egg2.avif";
import Egg3 from "../assets/images/Egg3.avif";
import Egg4 from "../assets/images/Egg4.avif";
import Egg5 from "../assets/images/Egg5.avif";

// =================== Cereals ===================
import Cereal1 from "../assets/images/carels1.avif";
import Cereal2 from "../assets/images/carels2.avif";
import Cereal3 from "../assets/images/carels3.avif";
import Cereal4 from "../assets/images/carels4.avif";
import Cereal5 from "../assets/images/carels5.avif";
const products = [
  // =================== Milk ===================
  {
    category: "Milk",
    image: AmulTaaza,
    title: "Amul Taaza Toned Milk",
    unit: "500 ml",
    time: 8,
    price: 30,
  },
  {
    category: "Milk",
    image: AmulGold,
    title: "Amul Gold Full Cream Milk",
    unit: "500 ml",
    time: 8,
    price: 36,
  },
  {
    category: "Milk",
    image: AmulCow,
    title: "Amul Cow Milk",
    unit: "500 ml",
    time: 8,
    price: 31,
  },
  {
    category: "Milk",
    image: AmulHomo,
    title: "Amul Taaza Homogenised Toned Milk",
    unit: "1 ltr",
    time: 8,
    price: 77,
  },
  {
    category: "Milk",
    image: AmulLactoseFree,
    title: "Amul Lactose Free Milk",
    unit: "250 ml",
    time: 8,
    price: 26,
  },
  {
    category: "Milk",
    image: CountryDelightCow,
    title: "Country Delight Cow Milk",
    unit: "450 ml",
    time: 8,
    price: 46,
  },
  {
    category: "Milk",
    image: AmulBuffaloA2,
    title: "Amul Buffalo A2 Milk",
    unit: "500 ml",
    time: 8,
    price: 40,
  },
  {
    category: "Milk",
    image: AmulMoti,
    title: "Amul Moti Toned Milk (90 Days Shelf Life)",
    unit: "450 ml",
    time: 8,
    price: 33,
  },
  {
    category: "Milk",
    image: MotherDairyFullCream,
    title: "Mother Dairy Full Cream Milk",
    unit: "500 ml",
    time: 8,
    price: 36,
  },
  {
    category: "Milk",
    image: MotherDairyCow,
    title: "Mother Dairy Cow Milk",
    unit: "500 ml",
    time: 8,
    price: 31,
  },

  // =================== Bread ===================
  {
    category: "Bread",
    image: Bread1,
    title: "The Baker's Dozen Sourdough Whole Wheat Bread",
    unit: "400 g",
    time: 8,
    price: 70,
  },
  {
    category: "Bread",
    image: Bread2,
    title: "Harvest Gold Atta Whole Wheat Bread",
    unit: "450 g",
    time: 8,
    price: 65,
  },
  {
    category: "Bread",
    image: Bread3,
    title: "Harvest Gold White Bread",
    unit: "350 g",
    time: 8,
    price: 33,
  },
  {
    category: "Bread",
    image: Bread4,
    title: "English Oven Zero Maida Atta / Wheat Bread",
    unit: "400 g",
    time: 8,
    price: 54,
  },
  {
    category: "Bread",
    image: Bread5,
    title: "Naturbaked Superseed Multigrain Bread",
    unit: "300 g",
    time: 8,
    price: 65,
  },

  // =================== Eggs ===================
  {
    category: "Eggs",
    image: Egg1,
    title: "The Egg Co. Farm Fresh Protein Rich Eggs",
    unit: "10 pcs",
    time: 8,
    price: 134,
  },
  {
    category: "Eggs",
    image: Egg2,
    title: "Table White Eggs",
    unit: "10 pcs",
    time: 8,
    price: 118,
  },
  {
    category: "Eggs",
    image: Egg3,
    title: "Farm Made Free Range Eggs",
    unit: "6 pcs",
    time: 8,
    price: 154,
  },
  {
    category: "Eggs",
    image: Egg4,
    title: "Licious Farm Fresh Classic White Protein Eggs",
    unit: "6 pcs",
    time: 8,
    price: 96,
  },
  {
    category: "Eggs",
    image: Egg5,
    title: "Hen Fruit Protein Rich Eggs",
    unit: "6 pcs",
    time: 8,
    price: 98,
  },

  // =================== Cereals ===================
  {
    category: "Cereals",
    image: Cereal1,
    title: "Kellogg's Multigrain Chocos Moons & Stars",
    unit: "1.15 kg",
    time: 8,
    price: 399,
  },
  {
    category: "Cereals",
    image: Cereal2,
    title: "Kellogg's Multigrain Chocos Variety Pack",
    unit: "7 pcs",
    time: 8,
    price: 64,
  },
  {
    category: "Cereals",
    image: Cereal3,
    title: "Kellogg's Multigrain Chocos",
    unit: "385 g",
    time: 8,
    price: 210,
  },
  {
    category: "Cereals",
    image: Cereal4,
    title: "Kellogg's Double Chocolate Fills Chocos",
    unit: "250 g",
    time: 8,
    price: 172,
  },
  {
    category: "Cereals",
    image: Cereal5,
    title: "Kellogg's Chocos Multigrain Moons & Stars",
    unit: "168 g",
    time: 8,
    price: 97,
  },
];

const Products = () => {
  const [category, setCategory] = useState("All");

  const filteredCategory =
   category===("All")
  ? products 
  : products.filter((product) => product.category==category);

  

  return (
    
    <div className="products-container">
      <h1>🛒 Grocery Store</h1>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="Milk">Milk</option>
        <option value="Bread">Bread</option>
        <option value="Eggs">Eggs</option>
        <option value="Cereals">Cereals</option>
      </select>
      {/* <h2>{category}</h2> */}
      <div className="products-grid">
        {filteredCategory.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />

            <p className="delivery">⏱ {product.time} MINS</p>

            <h3>{product.title}</h3>

            <p>{product.unit}</p>

            <div className="price-row">
              <span>₹{product.price}</span>

              <button>ADD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
;
}
export default Products;
