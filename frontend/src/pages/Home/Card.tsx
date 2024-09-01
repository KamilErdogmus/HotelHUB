import { Link } from "react-router-dom";
import { Places } from "../../types";
import Availability from "./Availability";
import Rating from "./Rating";

const Card = ({ place }: { place: Places }) => {
  return (
    <Link to={`/place/${place.id}`}>
      <div className="border rounded-md p-4 gap-3 min-h-[300px] cursor-pointer hover:scale-[1.025] hover:shadow-xl grid grid-cols-6 w-full">
        <div className="col-span-2">
          <img
            className="w-full h-full rounded-xl object-cover max-h-[266px]"
            src={place.image_url}
            alt=""
          />
        </div>
        <div className="col-span-4 flex justify-between flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">{place.name}</h1>

              <Availability status={place.availability} />
            </div>
            <p>{place.location}</p>
            <div className="mb-2 capitalize">
              {place.amenities.slice(0, 2).map((item, i) => (
                <span
                  className="border p-1 rounded-md hover:ring-1"
                  key={i}
                >
                  {item}
                </span>
              ))}
            </div>

            <Rating point={place.rating} />
          </div>

          <div className="flex flex-col items-end">
            <span className="text-green-500 text-2xl font-semibold">
              ${place.price_per_night}
            </span>
            <span className="text-xs text-gray-400">
              Taxes and fees are included.
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
