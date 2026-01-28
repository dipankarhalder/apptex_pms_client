import { useGetStatuses } from "../../../hooks/useStatus";

export const ListWarehouses = () => {
  const { data: statuses, isLoading, error } = useGetStatuses();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <p>List of Warehouses</p>
      <div>{JSON.stringify(statuses)}</div>
    </div>
  );
};
