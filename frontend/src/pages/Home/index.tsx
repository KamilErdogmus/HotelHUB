import HOC from "../../HOC/HOC";
import Filter from "./Filter";
import Hero from "./Hero";
import List from "./List";

const Home = () => {
  return (
    <HOC design="my-5">
      <Hero />

      <div className="grid grid-cols-1 max-lg:mt-10 lg:gap-5 ">
        <Filter />

        <div className="col-span-4">
          <List />
        </div>
      </div>
    </HOC>
  );
};

export default Home;
