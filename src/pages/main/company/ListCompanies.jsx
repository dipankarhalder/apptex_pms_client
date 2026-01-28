import { useGetCompanies } from "../../../hooks/useCompany";

export const ListCompanies = () => {
  const { data: companies, isLoading, error } = useGetCompanies();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <p>ListCompanies</p>
      <div>{JSON.stringify(companies)}</div>
    </div>
  );
};
