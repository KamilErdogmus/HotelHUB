import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

const Availability = ({
  status,
  expand,
}: {
  status: boolean;
  expand?: boolean;
}) => {
  return (
    <div
      className={`flex items-center gap-5 border  p-2 rounded-md ${
        status ? "bg-green-200" : "bg-red-200"
      } ${expand && "pe-4"}`}
    >
      {status ? (
        <MdEventAvailable className="text-xl text-green-700" />
      ) : (
        <CgUnavailable className="text-xl text-red-700" />
      )}

      {expand && (
        <p className="text-lg font-semibold animate-">
          {status
            ? "Currently Available"
            : "Currently Not Available"}
        </p>
      )}
    </div>
  );
};

export default Availability;
