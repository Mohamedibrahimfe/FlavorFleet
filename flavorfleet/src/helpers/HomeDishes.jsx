import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeDishes() {
  const query = useSelector((state) => state.search.queryString);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    getDishes(query);
  }, [query]);


  const getDishes = async (search) => {
    try {
      const url = search
        ? `${import.meta.env.VITE_HOME_DISHES_API}${search}`
        : `${import.meta.env.VITE_HOME_DISHES_API}`;

      const response = await axios.get(url);

      // Handle empty results
      if (!response.data.meals) {
        setDishes([]);
        return;
      }

      // Set fetched meals
      setDishes(response.data.meals);
    } catch (error) {
      console.error("Error fetching dishes:", error.message);
      setDishes([]); // Reset dishes on error
    }
  };

  const notifySuccess = () => toast.success("Item added to cart successfully!");
  const notifyDanger = () => toast.error("Item removed.");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoving = (id) => {
    if (!cartItems.some((item) => item.id === id)) return;
    dispatch(removeFromCart({ id }));
    notifyDanger();
  };
  const handleAdding = (id, strMealThumb, strMeal, strInstructions) => {
    if (cartItems.some((item) => item.id === id)) return;
    dispatch(
      addToCart({
        id: id,
        image: strMealThumb,
        name: strMeal,
        description: strInstructions,
        quantity: 1,
        price: 14,
      })
    );
    notifySuccess();
  };
  return (
    <section id="dishes">
      <h1 className="text-2xl font-bold text-center my-4 lg:text-4xl">
        Our Dishes
      </h1>
      <hr className="border-1 border-red-500 w-[80%] mt-2 mx-auto " />
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 lg:grid-cols-5 relative">
        {dishes.map((dish) => (
          <div
            key={dish.idMeal}
            className="card shadow-lg p-2 my-4 rounded-2xl flex flex-col lg:gap-4 cursor-pointer hover:shadow-xl duration-200"
          >
            <div className="relative">
              <img
                src={dish.strMealThumb}
                alt={dish.strMeal}
                className="rounded-2xl my-2"
              />
              <div className="bg-white">
                <svg
                  onClick={() =>
                    handleAdding(
                      dish.idMeal,
                      dish.strMealThumb,
                      dish.strMeal,
                      dish.strInstructions
                    )
                  }
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 font-sm text-sm  hover:bg-green-400 rounded-full text-black bottom-3 lg:bottom-4 right-2  absolute text-center"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z"
                      fill="#0F0F0F"
                    ></path>{" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                      fill="#0F0F0F"
                    ></path>{" "}
                  </g>
                </svg>

                <svg
                  onClick={() => handleRemoving(dish.idMeal)}
                  fill="gray"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 bg- text-sm ml-2 hover:bg-red-400 rounded-full text-black bottom-3 lg:bottom-4 right-11  absolute text-center"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="m1261.963 920.14-120.66 120.66L960.48 859.867l-180.934 180.935-120.66-120.662L839.82 739.205 658.886 558.27l120.66-120.547 180.935 180.935 180.821-180.935 120.661 120.547-180.934 180.935 180.934 180.935ZM1415.377 0H505.586C411.422 0 335 76.536 335 170.586V1920l625.481-375.289L1585.963 1920V170.586C1585.963 76.536 1509.426 0 1415.377 0Z"
                      fillRule="evenodd"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>

            <h2 className="font-bold my-1 lg:text-2xl">{dish.strMeal}</h2>
            <p className="text-sm">{dish.strInstructions.slice(0, 80)}</p>
            <p className="font-bold flex items-center">
              price:<em className="text-red-500 text-xl">$14</em>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
