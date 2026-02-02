import moment from "moment";

import {
  Edit,
  Delete,
  Phone,
  Email,
  Website,
  Whatsapp,
  User,
} from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import { AppNameColumnHeading, AppSpanIconCover } from "./styles";

export const createLeadColumns = ({ onEdit, onDelete }) => [
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
    header: () => <span>Name</span>,
  },
  {
    accessorKey: "companyName",
    header: ({ column }) => <SortHeader column={column} title="Company Name" />,
    cell: ({ row }) => (
      <AppNameColumnHeading>{row.original.companyName}</AppNameColumnHeading>
    ),
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
    accessorKey: "source",
    header: ({ column }) => <SortHeader column={column} title="Source" />,
    cell: ({ row }) => {
      const source = row.original.source;
      const sourceMap = {
        phone: { icon: <Phone />, label: "Phone" },
        email: { icon: <Email />, label: "Email" },
        website: { icon: <Website />, label: "Website" },
        whatsapp: { icon: <Whatsapp />, label: "Whatsapp" },
        reference: { icon: <User />, label: "Reference" },
      };
      const rec = sourceMap[source] || sourceMap.reference;
      return (
        <AppSpanIconCover className={source}>
          {rec.icon}
          <p>{rec.label}</p>
        </AppSpanIconCover>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <span>Created</span>,
    cell: ({ row }) =>
      row.original.createdAt
        ? moment(row.original.createdAt).format("DD-MMM-YYYY")
        : "-",
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortHeader column={column} title="Status" />,
    cell: ({ row }) => (
      <AppSpanIconCover className={row.original.status}>
        <p>{row.original.status}</p>
      </AppSpanIconCover>
    ),
  },
  {
    id: "actions",
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
