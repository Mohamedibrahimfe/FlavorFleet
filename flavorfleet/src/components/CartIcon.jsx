import { useSelector } from "react-redux";
export default function CartIcon() {
  const { items } = useSelector((state) => state.cart);
  return (
    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
      {items.length}
    </span>
  );
}
