import { useState, useMemo } from "react";
import styled from "styled-components";
import { Edit, Delete } from "../../../../components/common/Icons";
import { DataTable } from "../../../../shared/DataTable";
import { SortHeader } from "../../../../shared/SortHeader";
import { useCustomerStore } from "../../../../store/crm/customerStore";
import { fontSize, fontWeight } from "../../../../styles/mixins";

export const AppNameColumnHeading = styled.p`
  ${fontSize("12px")}
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

export const ListCustomer = () => {
  const { customers } = useCustomerStore();
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
        header: ({ column }) => (
          <SortHeader column={column} title="Assigned Person" />
        ),
        cell: ({ row }) => {
          const cname = row.original.name;
          return <AppNameColumnHeading>{cname}</AppNameColumnHeading>;
        },
      },
      {
        accessorKey: "companyName",
        header: <span>Company Name</span>,
      },
      {
        accessorKey: "email",
        header: () => <span>Email</span>,
      },
      {
        accessorKey: "phone",
        header: () => <span>Phone</span>,
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
        accessorKey: "assignedAccountManager",
        header: ({ column }) => (
          <SortHeader column={column} title="Assig. Acc Manager" />
        ),
        cell: ({ row }) => {
          const cname = row.original.assignedAccountManager;
          return <AppNameColumnHeading>{cname}</AppNameColumnHeading>;
        },
      },
      {
        accessorKey: "leadId",
        header: () => <span>Lead Id</span>,
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
    <DataTable
      columns={columns}
      data={customers}
      sorting={sorting}
      setSorting={setSorting}
      search={"name"}
      pageSize={10}
    />
  );
};
