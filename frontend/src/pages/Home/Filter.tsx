import { useSearchParams } from "react-router-dom";
import { cityOpt, sortOpt } from "../../constants";
import Button from "../../Components/Button/index";
import { useDebounce } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

const Filter = () => {
  const [params, setParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm === "") {
      setParams({});
    } else if (debouncedSearchTerm) {
      params.set("title", debouncedSearchTerm);
      setParams(params);
    }
  }, [debouncedSearchTerm, params, setParams]);

  const handleChange = (name: string, value: string) => {
    params.set(name, value);
    setParams(params);
  };

  const handleReset = () => {
    setParams({});
    setSearchTerm("");
  };

  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10  ">
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="first">
          Cities
        </label>
        <select
          onChange={(e) =>
            handleChange("location", e.target.value)
          }
          id="first"
          className="border py-1 px-4 rounded-md"
        >
          <option value="">Choose</option>
          {cityOpt.map((item, i) => (
            <option value={item.value} key={i}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="second">
          Search By Name
        </label>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          id="second"
          className="border py-1 px-4 rounded-md"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="first">
          Sorting
        </label>
        <select
          id="first"
          onChange={(e) => handleChange("order", e.target.value)}
          className="border py-1 px-4 rounded-md"
        >
          <option value="">Choose</option>
          {sortOpt.map((item, i) => (
            <option value={item.value} key={i}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <Button
          setParams={handleReset}
          fnc="reset"
          text="Reset Filter"
        />
      </div>
    </form>
  );
};

export default Filter;
