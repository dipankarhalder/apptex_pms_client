import { useState } from "react";
import { DataTable } from "../../../shared/DataTable";

export const HrListPages = ({
  useStore,
  createColumns,
  searchKey,
  dataKey,
}) => {
  const store = useStore();
  const [sorting, setSorting] = useState([]);

  const handleEdit = (id) => console.log(id);
  const handleDelete = (id) => store.remove?.(id);
  const columns = createColumns({ onEdit: handleEdit, onDelete: handleDelete });
  const data = store[dataKey] || [];

  return (
    <DataTable
      columns={columns}
      data={data}
      search={searchKey}
      sorting={sorting}
      setSorting={setSorting}
      pageSize={10}
    />
  );
};
