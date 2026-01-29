import { Uarrow, Darrow } from "../components/common/Icons";

export const SortHeader = ({ column, title }) => {
  const isSorted = column.getIsSorted();

  return (
    <div className="app_sort_header" onClick={column.getToggleSortingHandler()}>
      {title}
      {isSorted === "asc" && <Uarrow />}
      {isSorted === "desc" && <Darrow />}
      {isSorted === false && <Uarrow />}
    </div>
  );
};
