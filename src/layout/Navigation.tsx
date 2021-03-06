/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import coins from "../assets/coins.png";
import { NavLink } from "react-router-dom";
import OrderContext from "../store/OrderContext";
import { useContext } from "react";
import { formatNumberToCurrency } from "../helpers/CurrencyHelper";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Orders", href: "/orders" },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Navigation = () => {
  const orderCtx = useContext(OrderContext);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto"
                    src={coins}
                    alt="BuyCoins"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={(navData) =>
                          classNames(
                            navData.isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium flex"
                          )
                        }
                      >
                        {item.name}{" "}
                        {item.name === "Orders" && (
                          <div className="ml-1 bg-teal-500 text-white rounded-full px-2">
                            {orderCtx.orders.length}
                          </div>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="lg:flex text-blue-500 text-base font-medium items-center">
                  <div className="text-sm text-white mr-1">
                    Current balance :
                  </div>{" "}
                  {formatNumberToCurrency(orderCtx.balance)}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={(navData) =>
                    classNames(
                      navData.isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-base font-medium flex"
                    )
                  }
                >
                  {item.name}{" "}
                  {item.name === "Orders" && (
                    <div className="ml-1 bg-teal-500 text-white rounded-full px-2">
                      {orderCtx.orders.length}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
