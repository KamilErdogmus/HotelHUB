const Features = ({ amenities }: { amenities: string[] }) => {
  return (
    <div className="flex flex-col mt-5">
      <h2 className="capitalize font-bold text-xl">
        Popular lodging amenities and features
      </h2>

      <div className="grid grid-cols-2 gap-5 mt-4">
        {amenities.map((item, key) => (
          <span
            key={key}
            className="border bg-zinc-50 py-1 px-2 text-md rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
