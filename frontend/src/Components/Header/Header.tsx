import { Link } from "react-router-dom";
import HOC from "../../HOC/HOC";
import Button from "../Button";

const Header = () => {
  return (
    <header className="border-b">
      <HOC design="flex justify-between items-center">
        <div className="flex gap-10">
          <Link to={"/"}>
            <h1 className="font-bold text-2xl">HotelHUB</h1>
          </Link>

          <nav className="flex gap-5 items-center font-xl font-semibold">
            <Link className="hover:text-blue-500" to={"/"}>
              Hotels
            </Link>
            <Link
              className="max-md:hidden hover:text-blue-500"
              to={"/"}
            >
              Popular
            </Link>
            <Link
              className="hover:text-blue-500"
              to={"/admin/create"}
            >
              Create
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button text="Register" />
          <Button text="Sign In" />
        </div>
      </HOC>
    </header>
  );
};

export default Header;
