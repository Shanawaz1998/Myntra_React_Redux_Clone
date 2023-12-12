import React from "react";
import { useSelector } from "react-redux";

export default function BagSummary() {
  const bagItems = useSelector((bag) => bag.bag);
  const items = useSelector((item) => item.items);
  const cartItems = items.filter((item) => {
    const itemFound = bagItems.indexOf(item.id);
    return itemFound >= 0;
  });
  console.log("cartItems", cartItems);

  const summary = {
    totalItem: cartItems.length,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  };

  cartItems.forEach((element) => {
    summary.totalMRP += element.original_price;
    summary.totalDiscount += element.original_price - element.current_price;
    summary.finalPayment = summary.totalMRP - summary.totalDiscount + 99;
  });

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({summary.totalItem} Items)
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{summary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{summary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{summary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}
