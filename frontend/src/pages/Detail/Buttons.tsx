import { useMutation } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = ({ id }: { id: number }) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deletePlace(id),
    onSuccess: () => {
      toast.info("Hotel Deleted!");
      navigate("/");
    },
    onError: () => {
      toast.warning("Something went wrong!");
    },
  });

  return (
    <div className="flex justify-between mb-5">
      <Link
        to=".."
        className="flex items-center gap-2  py-1 px-4 rounded-md transition hover:bg-gray-200 hover:shadow"
      >
        <MdKeyboardArrowLeft />
        Previous
      </Link>

      <button
        onClick={() => mutate()}
        disabled={isPending}
        className="flex items-center gap-2  py-1 px-4 rounded-md transition hover:bg-red-200 hover:shadow disabled:bg-zinc-300"
      >
        <FaRegTrashAlt />
        Delete
      </button>
    </div>
  );
};

export default Buttons;
