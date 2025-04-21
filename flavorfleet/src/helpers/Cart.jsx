import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { Helmet } from "react-helmet";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <SignedIn>
        <CartContent />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function CartContent() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="bg-white py-8 antialiased  md:py-16">
      <Helmet>
        <meta name="description" content="FlavorFleet Cart" />
        <title>Cart</title>
      </Helmet>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-800 sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-gray-800 text-gray-800 p-4 shadow-sm  md:p-6"
                >
                  <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" className="shrink-0 md:order-1">
                      <img
                        className="rounded-full object-cover w-[200px] "
                        src={item.image}
                        alt="imac image"
                        width={200}
                        height={200}
                      />
                    </a>

                    <label htmlFor="counter-input" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center justify-between md:order-3 md:justify-end text-gray-800!important">
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="counter-input"
                          data-input-counter
                          className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
                          placeholder=""
                          value={item.quantity}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 ">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <h1 className="text-xl font-bold text-gray-900 ">
                        {item.name}
                      </h1>
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline "
                      >
                        {item.description.slice(0, 150)}
                      </a>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium hover:text-gray-900 hover:underline text-gray-800 "
                        >
                          <svg
                            className="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                          </svg>
                          Add to Favorites
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          <svg
                            className="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18 17.94 6M18 18 6.06 6"
                            />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-800 text-gray-800 p-4 shadow-sm ">
              <p className="text-xl font-semibold text-gray-900 ">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-800">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      $
                      {items.reduce((acc, item) => acc + item.price, 0) *
                        items.reduce((acc, item) => acc + item.quantity, 0)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-800 ">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -$
                      {Math.ceil(
                        items.reduce((acc, item) => acc + item.price, 0) / 10
                      ) * items.reduce((acc, item) => acc + item.quantity, 0)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-800 ">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      Free
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-800 pt-2">
                  <dt className="text-base font-bold text-gray-900 ">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 ">
                    $
                    {items.reduce((acc, item) => acc + item.price, 0) *
                      items.reduce((acc, item) => acc + item.quantity, 0) -
                      Math.ceil(
                        items.reduce((acc, item) => acc + item.price, 0) / 10
                      ) *
                        items.reduce((acc, item) => acc + item.quantity, 0)}
                  </dd>
                </dl>
              </div>

              <NavLink
                to="/success"
                className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Proceed to Checkout
              </NavLink>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <a
                  href="/#dishes"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-gray-800 bg-white p-4 shadow-sm text-gray-800 sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:placeholder:text-gray-300 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
