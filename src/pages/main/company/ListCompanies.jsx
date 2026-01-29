import { useState, useMemo } from "react";
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
        header: ({ column }) => <SortHeader column={column} title="C Name" />,
        cell: ({ row }) => {
          const vendor = row.original;
          return <AppNameColumnHeading>{vendor.name}</AppNameColumnHeading>;
        },
      },
      {
        accessorKey: "code",
        header: ({ column }) => <SortHeader column={column} title="C Code" />,
      },
      {
        accessorKey: "industry",
        header: ({ column }) => <SortHeader column={column} title="Industry" />,
      },
      {
        accessorKey: "taxId",
        header: ({ column }) => <SortHeader column={column} title="TaxId" />,
      },
      {
        accessorKey: "type",
        header: ({ column }) => <SortHeader column={column} title="C Type" />,
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
