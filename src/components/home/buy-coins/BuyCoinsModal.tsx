import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import BuyInput from "./BuyInput";
import { useMutation } from "react-query";
import createOrder from "../../../services/OrderService";
import OrderContext from "../../../store/OrderContext";
import { OrderResponse } from "../../../types/OrderType";

type BuyCoinsModalProps = {
  coinSymbol: string;
  coinPrice: number;
  coinImage: string;
  open: boolean;
  closeModal: () => void;
};

const BuyCoinsModal = ({
  coinSymbol,
  coinPrice,
  coinImage,
  open,
  closeModal,
}: BuyCoinsModalProps) => {
  const orderCtx = useContext(OrderContext);
  const cancelButtonRef = useRef(null);
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [amountType, setAmountType] = useState<string>("usd");
  const [enableBuyButton, setEnableBuyButton] = useState<boolean>(true);

  const mutation = useMutation(
    () => createOrder(coinSymbol, getAmountToBuy()),
    {
      onSuccess: async (data) => {
        orderCtx.addOrder(data as OrderResponse);
        setEnableBuyButton(true);
        closeModal();
      },
    }
  );

  useEffect(() => {
    const checkBalanceIsInsufficient = () => {
      if (amount) {
        if (amountType === "usd") {          
          return orderCtx.balance < parseInt(amount)
        } else {
          return orderCtx.balance < (parseInt(amount) * coinPrice)
        }
      }      
    }  

    amount === undefined || amount === "" || checkBalanceIsInsufficient()
      ? setEnableBuyButton(false)
      : setEnableBuyButton(true);
  }, [amount, orderCtx.balance, amountType, coinPrice]);

  const handleAmountChange = (
    amount: string | undefined,
    amountType: string
  ) => {
    setAmount(amount);
    setAmountType(amountType);
  };

  const showTotal = () => {
    if (amount) {
      if (amountType === "usd") {
        return `${
          parseInt(amount as string) / coinPrice
        } ${coinSymbol.toUpperCase()}`;
      } else if (amountType === "coin") {
        return `USD $${(parseInt(amount as string) * coinPrice).toFixed(2)}`;
      }
    }

    return "";
  };

  
  const getAmountToBuy = (): number => {
    if (amount) {
      if (amountType === "usd") {
        return parseInt(amount);
      } else if (amountType === "coin") {
        return parseInt(amount) * coinPrice;
      }
    }
    return 0;
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ShoppingCartIcon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Buy Order - {coinSymbol.toUpperCase()}
                      </Dialog.Title>
                      <div className="mt-2">
                        <BuyInput
                          coinSymbol={coinSymbol}
                          coinImage={coinImage}
                          handleAmountChange={handleAmountChange}
                        />
                      </div>
                      <div className="mt-2 text-gray-500">{showTotal()}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full disabled:bg-gray-500 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    disabled={!enableBuyButton}
                    onClick={() => {
                      setEnableBuyButton(false);
                      mutation.mutate();
                    }}
                  >
                    {mutation.isLoading ? "Buying..." : "Buy"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => closeModal()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BuyCoinsModal;
