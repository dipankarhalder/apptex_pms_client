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

export const createAssignColumns = ({ onEdit, onDelete }) => [
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
    accessorKey: "assignedTo",
    header: ({ column }) => (
      <SortHeader column={column} title="Assigned Person" />
    ),
    cell: ({ row }) => (
      <AppNameColumnHeading>{row.original.assignedTo}</AppNameColumnHeading>
    ),
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
    accessorKey: "budget",
    header: () => <span>Budget</span>,
    cell: ({ row }) => {
      const value = row.original.budget;
      if (!value) return <span>-</span>;
      return (
        <span style={{ fontWeight: "600" }}>
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
    accessorKey: "pipelineStage",
    header: ({ column }) => (
      <SortHeader column={column} title="Pipeline Stage" />
    ),
    cell: ({ row }) => {
      return <p>{row.original.pipelineStage}</p>;
    },
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
