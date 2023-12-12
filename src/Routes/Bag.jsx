import React from "react";
import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import { useSelector } from "react-redux";

export default function Bag() {
  // const item = {
  //   id: "001",
  //   image: "images/1.jpg",
  //   company: "Carlton London",
  //   item_name: "Rhodium-Plated CZ Floral Studs",
  //   original_price: 1045,
  //   current_price: 606,
  //   discount_percentage: 42,
  //   return_period: 14,
  //   delivery_date: "10 Oct 2023",
  //   rating: { stars: 4.5, count: 1400 },
  // };

  const bagItems = useSelector((bag) => bag.bag);
  const items = useSelector((item) => item.items);
  const cartItems = items.filter((item) => {
    const itemFound = bagItems.indexOf(item.id);
    return itemFound >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {cartItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
          {/* <BagItem item={item} /> */}
        </div>
        <BagSummary />
      </div>
    </main>
  );
}
