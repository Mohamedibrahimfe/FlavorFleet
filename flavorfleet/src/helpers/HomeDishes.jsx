import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
export default function HomeDishes() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const getDishes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setDishes(response.data.meals);
      console.log(response.data.meals);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.error(error);
      setDishes(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getDishes();
  }, []);
  return (
    <section id="dishes">
      <h1 className="text-2xl font-bold text-center my-4 lg:text-4xl">
        Our Dishes
      </h1>
      <hr className="border-1 border-red-500 w-[80%] mt-2 mx-auto " />
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 lg:grid-cols-5">
        {loading ? (
          <Loading />
        ) : (
          dishes.map((dish) => (
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
                <button className="w-10 h-10 bg-white rounded-full text-black bottom-3 lg:bottom-4 right-2 text-lg font-bold absolute text-center">
                  +
                </button>
              </div>

              <h2 className="font-bold my-1 lg:text-2xl">{dish.strMeal}</h2>
              <p className="text-sm">{dish.strInstructions.slice(0, 100)}</p>
              <p className="font-bold flex items-center">
                price:<em className="text-red-500 text-xl">$14</em>
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
