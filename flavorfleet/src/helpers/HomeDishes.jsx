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
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.toLowerCase()}`
        : "https://www.themealdb.com/api/json/v1/1/search.php?s=";

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
    <section id="dishes" className="py-8">
      <h1 className="text-3xl font-bold text-center my-8 lg:text-5xl">
        Our Dishes
      </h1>
      <hr className="border-2 border-red-500 max-w-screen-md mt-2 mx-auto rounded-full" />
      <div className="grid grid-cols-1 gap-6 px-10 md:grid-cols-3 lg:grid-cols-4 relative max-w-8xl mx-auto mt-12 ">
        {dishes.map((dish) => (
          <div
            key={dish.idMeal}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={dish.strMealThumb}
                alt={dish.strMeal}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                width={100}
                height={"16rem"}
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                  onClick={() =>
                    handleAdding(
                      dish.idMeal,
                      dish.strMealThumb,
                      dish.strMeal,
                      dish.strInstructions
                    )
                  }
                  className="p-2 bg-white/50 hover:bg-green-500 hover:text-white rounded-full shadow-lg transition-colors duration-200"
                  title="Add to cart"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" />
                  </svg>
                </button>

                <button
                  onClick={() => handleRemoving(dish.idMeal)}
                  className="p-2 bg-white/50 hover:bg-red-500 hover:text-white rounded-full shadow-lg transition-colors duration-200"
                  title="Remove from cart"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z" />
                  </svg>
                </button>
            </div>
          </div>

          <div className="p-6">
            <h2 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-red-500 transition-colors duration-200">
              {dish.strMeal}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {dish.strInstructions}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-red-500">$14.00</span>
              <span className="text-sm text-gray-500">Free delivery</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}
