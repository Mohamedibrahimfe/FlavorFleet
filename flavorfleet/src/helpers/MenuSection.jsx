import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
export default function MenuSection() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMenu = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setMenu(response.data.categories);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.error(error);
      setMenu(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getMenu();
  }, []);
  const filter = () => {};
  return (
    <section id="menu">
      <h1 className="text-2xl text-center my-4 md:my-10 md:text-4xl lg:text-6xl  ">
        Eexplor our menu
      </h1>
      <p className="text-center mx-2 md:text-xl text-gray-500">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 my-10 relative">
        {loading ? (
          <Loading />
        ) : (
          menu.map((item) => (
            <Link
              className="card flex flex-col items-center"
              key={item.idCategory}
              onClick={filter}
            >
              <img
                className="w-[150px] h-[150px] rounded-full object-cover"
                src={item.strCategoryThumb}
                alt={item.name}
              />
              <h2 className="text-xl my-2">{item.strCategory}</h2>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
