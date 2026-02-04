import {
  Edit,
  Delete,
  Uarrow,
  Darrow,
  Larrow,
} from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import { AppNameColumnHeading, AppStatusPtag, AppShiftStatus } from "./styles";

export const createEmployeeColumns = ({ onEdit, onDelete }) => [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
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
    cell: ({ row }) => {
      const { firstName, lastName } = row.original.personalInfo;
      return (
        <AppNameColumnHeading>
          {firstName} {lastName}
        </AppNameColumnHeading>
      );
    },
  },
  {
    accessorKey: "employeeId",
    header: () => <span>Employee ID</span>,
    cell: ({ row }) => row.original.jobInfo.employeeId,
  },
  {
    accessorKey: "department",
    header: ({ column }) => <SortHeader column={column} title="Department" />,
    cell: ({ row }) => row.original.jobInfo.department,
  },
  {
    accessorKey: "position",
    header: () => <span>Position</span>,
    cell: ({ row }) => row.original.jobInfo.position,
  },
  {
    accessorKey: "shift",
    header: ({ column }) => <SortHeader column={column} title="Shift" />,
    cell: ({ row }) => {
      return (
        <AppShiftStatus>
          <p
            className={
              row.original.shiftInfo.shiftType === "Morning"
                ? "item_morning"
                : row.original.shiftInfo.shiftType === "Evening"
                  ? "item_evening"
                  : "item_night"
            }
          >
            {row.original.shiftInfo.shiftType}
          </p>
        </AppShiftStatus>
      );
    },
  },
  {
    accessorKey: "phone",
    header: () => <span>Phone</span>,
    cell: ({ row }) => row.original.personalInfo.contact.phone,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const attendance = row.original.performance.attendance;
      const status =
        attendance > 220 ? "Active" : attendance > 200 ? "Regular" : "Inactive";

      const className =
        status === "Active"
          ? "national"
          : status === "Regular"
            ? "festival"
            : "optional";

      const StatusIcon =
        status === "Active" ? Uarrow : status === "Regular" ? Darrow : Larrow;

      return (
        <AppStatusPtag>
          <p className={className}>
            <StatusIcon />
            {status}
          </p>
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
          onClick={() => onEdit(row.original.jobInfo.employeeId)}
        >
          <Edit />
        </button>
        <button
          className="app_table_delete_btn"
          onClick={() => onDelete(row.original.jobInfo.employeeId)}
        >
          <Delete />
        </button>
      </div>
    ),
  },
];
