import { DataTable } from "../../../shared/DataTable";

export const CrmListPages = ({
  useStore,
  createColumns,
  searchKey,
  dataKey,
}) => {
  const store = useStore();
  // const navigate = useNavigate();

  const handleEdit = (id) => {
    console.log(id);
    // navigate(`edit/${id}`);
  };

  const handleDelete = (id) => store.remove?.(id);
  const columns = createColumns({ onEdit: handleEdit, onDelete: handleDelete });
  const data = store[dataKey] || [];

  return (
    <DataTable columns={columns} data={data} search={searchKey} pageSize={10} />
  );
};
