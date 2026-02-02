import { Edit, Delete } from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import { AppNameColumnHeading } from "./styles";

export const createCustomerColumns = ({ onEdit, onDelete }) => [
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
      return <AppNameColumnHeading>{row.original.name}</AppNameColumnHeading>;
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
      const status = row.original.status;
      const className =
        status === "Active"
          ? "active-item"
          : status === "Inactive"
            ? "inactive-item"
            : `${status.toLowerCase()}-item`;
      return <span className={className}>{status}</span>;
    },
  },
  {
    accessorKey: "assignedAccountManager",
    header: ({ column }) => (
      <SortHeader column={column} title="Assig. Acc Manager" />
    ),
    cell: ({ row }) => {
      return (
        <AppNameColumnHeading>
          {row.original.assignedAccountManager}
        </AppNameColumnHeading>
      );
    },
  },
  {
    accessorKey: "leadId",
    header: () => <span>Lead Id</span>,
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }) => (
      <div className="app_table_row_btns">
        <button
          className="app_table_edit_btn"
          onClick={() => onEdit(row.original.id)}
        >
          <Edit />
        </button>
        <button
          className="app_table_delete_btn"
          onClick={() => onDelete(row.original.id)}
        >
          <Delete />
        </button>
      </div>
    ),
  },
];
