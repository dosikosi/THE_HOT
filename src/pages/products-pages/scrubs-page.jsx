import React from "react";
import { items } from "../../redux/data";
import FilteredPruducts from "./filtered-products/filtered-products";

function ScrubsPage() {
  React.useEffect(() => {
    document.title = `Арома саше для одежды`;
  }, []);
  const data = items.filter((el) => el.type === "Арома саше для одежды");
  return <FilteredPruducts title="Арома саше" items={data} />;
}

export default ScrubsPage;
