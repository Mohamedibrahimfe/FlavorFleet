import { useDispatch } from "react-redux";
import { setQueryString } from "../redux/searchSlice";
export default function SearchComponent() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setQueryString(e.target.value));
  };
  const scrollDown = () => window.scrollTo(0, 1200);
  return (
    <div>
      <input
        type="search"
        className=" w-full lg:w-64 lg:mr-28 md:hidden lg:block  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Search"
        onChange={handleChange}
        onFocus={scrollDown}
      />
    </div>
  );
}
