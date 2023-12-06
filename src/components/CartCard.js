import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const CartCard = ({imageId,name,category,price}) => {
  const dispatch = useDispatch();  
  const removeFoodItem = () => {
    dispatch(removeItem(imageId));
  };
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="card-name">{name}</h2>
      <h3 className="Cuisines">{category}</h3>
      <h4 className="card-rating">${price / 100}</h4>
      <button
        className="p-1 bg-orange-200 rounded-xl"
        onClick={() => removeFoodItem(imageId)}
      >
        Remove
      </button>
    </div>
  );
};
export default CartCard;
