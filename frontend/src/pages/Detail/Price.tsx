const Price = ({ data }: { data: number }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-green-500 font-bold text-2xl">
        ${data}
      </span>
      <span className="text-gray-400 text-lg ms-[2px]">/</span>
      <span className="text-gray-400 text-xs mt-2">
        per night
      </span>
    </div>
  );
};

export default Price;
