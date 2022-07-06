import { CoinTable } from "../../../types/CoinType";
import CoinRow from "./CoinRow";
import { TableDescription } from "./TableDescription";
import TableHeader from "./TableHeader";

type CoinsTableProps = {
  coins: CoinTable[];
  open: boolean;
  setOpen: (coinSymbol: string, coinPrice: number, coinImage: string) => void;
};

const CoinsTable = ({ coins, open, setOpen }: CoinsTableProps) => {
  return (
    <div className="mx-auto lg:w-2/3 md:w-3/4 px-4 sm:px-6">
      <TableDescription />
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <TableHeader />
          <tbody className="divide-y divide-gray-200 bg-white">
            {coins.map((coin) => (
              <CoinRow coin={coin} setOpen={setOpen} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinsTable;
