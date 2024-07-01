import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("sort-by") || "";
  function handleSort(e) {
    searchParams.set("sort-by", e.target.value);

    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      onChange={handleSort}
      type="white"
      value={param}
    />
  );
}

export default Sort;
