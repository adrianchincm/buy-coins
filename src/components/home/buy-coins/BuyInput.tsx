import { useEffect, useState } from "react";

type BuyInputProps = {
  coinSymbol: string;  
  coinImage: string;
  handleAmountChange: (amount: string | undefined, amountType: string) => void
};

const BuyInput = ({ coinSymbol, coinImage, handleAmountChange }: BuyInputProps) => {
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [amountType, setAmountType] = useState<string>("usd");

  useEffect(() => {
    handleAmountChange(amount, amountType)
  }, [amount, amountType, handleAmountChange])

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount((e.target as HTMLInputElement).value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmountType(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        Amount to buy
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none z-10">
          {amountType === "usd" && (
            <span className="text-black sm:text-sm">$</span>
          )}
          {amountType === "coin" && (
            <img src={coinImage} className="w-4" alt="coin-icon" />
          )}
        </div>
        <input
          type="number"
          name="price"
          id="price"
          value={amount}
          onInput={(e) => handleInputChange(e)}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-16 sm:text-sm border-slate-600 rounded-md py-3 drop-shadow-sm bg-gray-100"
          placeholder={`1234.56`}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            defaultValue={"usd"}
            onChange={(e) => handleTypeChange(e)}
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-6 mr-4 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option value={"usd"}>USD</option>
            <option value={"coin"}>{coinSymbol.toUpperCase()}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BuyInput;
