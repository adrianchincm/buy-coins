const TableHeader = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
        >
          #
        </th>
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
        >
          Name
        </th>
        <th
          scope="col"
          className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
        >
          Price
        </th>
        <th
          scope="col"
          className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
        >
          Market Cap
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          24h %
        </th>
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
          <span className="sr-only">Buy</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
