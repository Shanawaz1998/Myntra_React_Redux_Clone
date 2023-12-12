import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../Store/BagSlice";
import { MdAddTask } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";

export default function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagStatus = useSelector((store) => store.bag);
  const handleAddToBag = (id) => {
    dispatch(bagAction.addToBag(id));
    const newId = bagStatus.filter((itemId) => itemId !== id);
  };

  console.log("bag", bagStatus);

  const handleRemoveFromBag = (id) => {
    console.log("remove", id);
    dispatch(bagAction.removeFromBag(id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating?.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bagStatus.includes(item.id) ? (
        <button
          className="btn-add-bag btn btn-danger"
          onClick={() => handleRemoveFromBag(item.id)}
        >
          <MdDelete />
          Remove
        </button>
      ) : (
        <button className="btn-add-bag" onClick={() => handleAddToBag(item.id)}>
          <MdAddTask /> Add to Bag
        </button>
      )}
    </div>
  );
}
