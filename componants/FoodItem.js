import { IMG_CON_URL } from "../contants";
const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-60 px-5 mx-8 my-12 shadow-lg bg-blue-50">
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h4 className="font-bold text-xl">{name}</h4>
      <h4>{description}</h4>
      <h4>{price / 100} </h4>
    </div>
  );
};
export default FoodItem;
