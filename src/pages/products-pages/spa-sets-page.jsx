import React from "react";
import { items } from "../../redux/data";
import FilteredPruducts from "./filtered-products/filtered-products";

function SpaSetsPage() {
  React.useEffect(() => {
    document.title = `Свечи`;
  }, []);

  const data = items.filter((el) => el.type === "Свечи");
  return <FilteredPruducts title="Свечи" items={data} />;
}

export default SpaSetsPage;
