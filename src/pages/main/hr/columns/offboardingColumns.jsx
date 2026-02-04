import {
  Edit,
  Delete,
  Uarrow,
  Darrow,
  Larrow,
} from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import { AppNameColumnHeading, AppStatusPtag } from "./styles";

export const createOffboardingColumns = ({ onEdit, onDelete }) => [
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
      <SortHeader column={column} title="Employee Name" />
    ),
    cell: ({ row }) => (
      <AppNameColumnHeading>{row.original.name}</AppNameColumnHeading>
    ),
  },

  {
    accessorKey: "employeeId",
    header: () => <span>Employee ID</span>,
    cell: ({ row }) => row.original.employeeId,
  },

  {
    accessorKey: "resigned",
    header: () => <span>Resigned</span>,
    cell: ({ row }) => (row.original.resigned ? "Yes" : "No"),
  },

  {
    accessorKey: "lastWorkingDay",
    header: ({ column }) => (
      <SortHeader column={column} title="Last Working Day" />
    ),
    cell: ({ row }) => row.original.lastWorkingDay ?? "-",
  },

  {
    accessorKey: "documents",
    header: () => <span>Docs Provided</span>,
    cell: ({ row }) => {
      const docs = row.original.documents || {};
      const total = Object.keys(docs).length;
      const provided = Object.values(docs).filter((doc) => doc.provided).length;

      return total === 0 ? "-" : `${provided}/${total}`;
    },
  },

  {
    accessorKey: "remarks",
    header: ({ column }) => <SortHeader column={column} title="Remarks" />,
    cell: ({ row }) => row.original.remarks,
  },

  {
    accessorKey: "offboardingStatus",
    header: ({ column }) => <SortHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.original.offboardingStatus;

      const className =
        status === "Completed"
          ? "national"
          : status === "In Progress"
            ? "festival"
            : status === "Not Initiated"
              ? "hold"
              : "danger";

      return (
        <AppStatusPtag>
          <p className={className}>{status}</p>
        </AppStatusPtag>
      );
    },
  },

  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }) => (
      <div className="app_table_row_btns">
        <button
          className="app_table_edit_btn"
          onClick={() => onEdit(row.original.employeeId)}
        >
          <Edit />
        </button>
        <button
          className="app_table_delete_btn"
          onClick={() => onDelete(row.original.employeeId)}
        >
          <Delete />
        </button>
      </div>
    ),
  },
];
