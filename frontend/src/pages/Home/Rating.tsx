const Rating = ({
  point,
  expand,
}: {
  point: number;
  expand?: boolean;
}) => {
  const color =
    point >= 4
      ? "bg-green-500"
      : point >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  const text =
    point >= 4.5
      ? "Excellent"
      : point >= 4
      ? "Good"
      : point >= 3
      ? "Fair"
      : point >= 2
      ? "Poor"
      : "Worse";

  return (
    <p className={expand ? "flex items-center gap-3" : ""}>
      <span
        className={`${color} p-2 rounded-lg text-white font-bold w-fit`}
      >
        {point}
      </span>
      {expand && (
        <span className="border p-2 font-bold text-lg rounded-lg hover:ring-2">
          {text}
        </span>
      )}
    </p>
  );
};

export default Rating;
