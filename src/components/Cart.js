import { useSelector } from "react-redux";
import CartCard from "./CartCard";
const Cart = () => {
    const cart = useSelector(store => store.cart.items);
    return (
        <div>
            <div>
                {cart.length != 0 ?cart.map((item) => {
                    return <CartCard key={item.imageId} {...item}/>
                }):<h1 className="text-3xl text-center">Cart is empty</h1>}
            </div>
        </div>
    )
}
export default Cart;
