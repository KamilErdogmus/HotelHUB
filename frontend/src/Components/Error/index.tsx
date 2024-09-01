import { useQueryClient } from "@tanstack/react-query";
import Button from "./../Button/index";
const Error = ({
  info,
  name,
}: {
  info: string;
  name: string;
}) => {
  const queryClient = useQueryClient();
  //*Daha önce useQuery ile tanımladığımız bir sorguyu tekrardan tetikleme kiçin kullandığımız fonksiyon
  const retry = () => {
    queryClient.invalidateQueries({ queryKey: [name] });
  };

  return (
    <>
      <div className="my-20 bg-red-500 rounded-lg p-4 text-white font-semibold text-center">
        <p>Something went Wrong!</p>
        <p>{info}</p>
      </div>
      <div className="flex justify-center">
        <Button retry={retry} color="red" text="Retry" />
      </div>
    </>
  );
};

export default Error;
