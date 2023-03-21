import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurants=useRestaurant(resId);
  //console.log('data:--',restaurants?.cards[0]?.card?.card?.info?.name);
  const a=restaurants?.cards[0]?.card?.card?.info;
 
  const dispatch=useDispatch();
const addFoodItem=(item)=>{
    dispatch(addItem(item));
  }
  
  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h2>Restaurants Id:--{resId}</h2>
        <h2>{a.name}</h2>
        <img src={IMG_CON_URL + a.cloudinaryImageId} />
        <h2>{a.areaName}</h2>
        <h2>{a.city}</h2>
        <h2>{a.locality}</h2>
        <h2>{a.costForTwoMsg}</h2> 
      </div>
      
      {/* <div className="p-5">
        <h1>Menu:------</h1>
        <ul>
          {restaurants?.menu?.items.map((item) => (
            <li key={item.id}>{item.name} - 
             <button className="p-1   bg-green-100"
        onClick={()=>addFoodItem(item)}>Add Item</button></li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
