import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <Sort
        options={[
          { value: "name-asc", label: "Sort By name(A-Z)" },
          { value: "name-des", label: "Sort By name(Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price(lowest first)" },
          { value: "regularPrice-des", label: "Sort By Price(Highest First)" },
          { value: "capacity-asc", label: "Sort by Capacity(Lowest First)" },
          { value: "capacity-des", label: "Sort by Capacity(Highest First)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperation;
