import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../../api";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { Places } from "../../types";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { Params } from "../../api";
import { motion } from "framer-motion";
import { useMemo } from "react";

const List = () => {
  const [params] = useSearchParams();
  const paramsObj = useMemo(
    () => Object.fromEntries(params.entries()),
    [params]
  );

  const { isLoading, data, error } = useQuery<Places[]>({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj as Params),
  });

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">
        Discover Nearby Hotels
      </h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error.message} name="places" />
        ) : (
          <div className="grid gap-5 mt-5">
            {data?.map((place, index) => {
              const isOdd = index % 2 === 0;
              const animationVariants = {
                hidden: { x: isOdd ? 500 : -500, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              };

              return (
                <motion.div
                  key={place.id}
                  initial="hidden"
                  variants={animationVariants}
                  animate="visible"
                  transition={{
                    duration: 0.4,
                    delay: index * 0.5,
                  }}
                >
                  <Card place={place} />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
