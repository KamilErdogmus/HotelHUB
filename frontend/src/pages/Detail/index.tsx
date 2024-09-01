import { useParams } from "react-router-dom";
import HOC from "../../HOC/HOC";
import { useQuery } from "@tanstack/react-query";
import { getPlace } from "../../api";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import Buttons from "./Buttons";
import Rating from "../Home/Rating";
import { Places } from "../../types";
import Features from "./Features";
import Price from "./Price";
import Availability from "../Home/Availability";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Places>({
    queryKey: ["place"],
    queryFn: () => getPlace(id as string),
  });
  return (
    <HOC design="max-w-[1200px]">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} name="place" />
      ) : data ? (
        <div className="flex flex-col gap-3">
          <Buttons id={data.id} />

          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">{data.name}</h1>
            <Rating point={data.rating} expand />
          </div>
          <p>{data.description}</p>
          <img
            src={data.image_url}
            alt="hotel-img"
            className="rounded-lg max-h-[600px]"
          />

          <Features amenities={data.amenities} />

          <div className="flex  justify-between items-center mt-3">
            <Price data={data.price_per_night} />
            <Availability expand status={data.availability} />
          </div>
        </div>
      ) : (
        ""
      )}
    </HOC>
  );
};

export default Detail;
