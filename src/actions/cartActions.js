import { addCartItemRequest, addCartItemSuccess } from "../slices/cartSlice";
import axios from "axios";
export const addCartItem = (id, quantity) => async (dispatch) => {
  try {
    dispatch(addCartItemRequest());
    const { data } = await axios.get(`/api/v1/product/${id}`); //getting  the product id details by send a n api
    dispatch(
      addCartItemSuccess({
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].Image,
        stock: data.product.stock,
        quantity,
      })
    );
  } catch (error) {}
};
