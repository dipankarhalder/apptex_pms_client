import { useState, useMemo } from "react";
import moment from "moment";
import styled from "styled-components";
import { Edit, Delete } from "../../../components/common/Icons";
import { DataTable } from "../../../shared/DataTable";
import { SortHeader } from "../../../shared/SortHeader";
import { useCompanyStore } from "../../../store/companyStore";
import { fontSize, fontWeight } from "../../../styles/mixins";

export const AppNameColumnHeading = styled.p`
  ${fontSize("14px")}
  ${fontWeight("500")}
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue30};
`;

export const AppIndustriesInfo = styled.div`
  display: flex;
  flex-direction: column;

  .app_type_col {
    padding: 2px 4px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.blue30};
    color: ${({ theme }) => theme.colors.blue30};
  }
`;

export const ListCompanies = () => {
  const { companyInfo } = useCompanyStore();
  const [sorting, setSorting] = useState([]);
  const handleEdit = (id) => console.log(id);

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            id="select-row"
            checked={table.getIsAllPageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "name",
        enableSorting: true,
        enableSortingRemoval: true,
        header: ({ column }) => <SortHeader column={column} title="Name" />,
        cell: ({ row }) => {
          const vendor = row.original;
          return <AppNameColumnHeading>{vendor.name}</AppNameColumnHeading>;
        },
      },
      {
        accessorKey: "code",
        header: () => <span>Code</span>,
      },
      {
        accessorKey: "industry",
        header: () => <span>Industry</span>,
        cell: ({ row }) => {
          return (
            <AppIndustriesInfo>
              <p>{row.original.industry}</p>
            </AppIndustriesInfo>
          );
        },
      },
      {
        accessorKey: "taxId",
        header: () => <span>Tax ID</span>,
      },
      {
        accessorKey: "foundedAt",
        header: () => <span>Founded</span>,
        cell: ({ row }) => {
          const foundedAt = row.original.foundedAt;
          return (
            <span>
              {foundedAt ? moment(foundedAt).format("MMM DD, YYYY") : "-"}
            </span>
          );
        },
      },
      {
        accessorKey: "employeesCount",
        header: () => <span>Emp Count</span>,
        cell: ({ row }) => {
          const value = row.original.employeesCount;
          if (!value) return <span>-</span>;
          return (
            <span>
              {value.toLocaleString("en-IN")} people{value > 1 ? "s" : ""}
            </span>
          );
        },
      },
      {
        accessorKey: "annualTurnover",
        header: () => <span>Turn Count</span>,
        cell: ({ row }) => {
          const value = row.original.annualTurnover;
          if (!value) return <span>-</span>;
          return (
            <span>
              ₹{" "}
              {value.toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          );
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => <SortHeader column={column} title="Status" />,
        cell: ({ row }) => {
          return (
            <p>
              {row.original.status === "Active" ? (
                <span className="active-item">Active</span>
              ) : (
                <span className="inactive-item">Inactive</span>
              )}
            </p>
          );
        },
      },
      {
        accessorKey: "actions",
        header: "Action",
        cell: ({ row }) => {
          return (
            <div className="app_table_row_btns">
              <button
                className="app_table_edit_btn"
                onClick={() => handleEdit(row.original.id ?? "")}
              >
                <Edit />
              </button>
              <button
                className="app_table_delete_btn"
                onClick={() => handleEdit(row.original.id ?? "")}
              >
                <Delete />
              </button>
            </div>
          );
        },
      },
    ],
    [],
  );

  return (
    <div>
      <p>List of Companies</p>
      <DataTable
        columns={columns}
        data={companyInfo}
        sorting={sorting}
        setSorting={setSorting}
        pageSize={10}
      />
    </div>
  );
};
