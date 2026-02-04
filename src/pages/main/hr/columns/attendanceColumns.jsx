import { Edit } from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import { AppNameColumnHeading, AppStatusPtag } from "./styles";

export const createAttendanceColumns = ({ onView }) => [
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
    accessorKey: "month",
    header: ({ column }) => <SortHeader column={column} title="Month" />,
    cell: ({ row }) => `${row.original.month} ${row.original.year}`,
  },

  {
    accessorKey: "present",
    header: ({ column }) => <SortHeader column={column} title="Present" />,
    cell: ({ row }) => row.original.summary.present,
  },

  {
    accessorKey: "leave",
    header: ({ column }) => <SortHeader column={column} title="Leave" />,
    cell: ({ row }) => row.original.summary.leave,
  },

  {
    accessorKey: "absent",
    header: ({ column }) => <SortHeader column={column} title="Absent" />,
    cell: ({ row }) => row.original.summary.absent,
  },

  {
    accessorKey: "attendancePercentage",
    header: ({ column }) => <SortHeader column={column} title="Attendance %" />,
    cell: ({ row }) => {
      const { present } = row.original.summary;
      const totalWorkingDays = row.original.totalWorkingDays;
      const percentage = ((present / totalWorkingDays) * 100).toFixed(2);
      return `${percentage}%`;
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => <SortHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const { present } = row.original.summary;
      const total = row.original.totalWorkingDays;
      const percentage = (present / total) * 100;
      const status =
        percentage >= 90 ? "Excellent" : percentage >= 75 ? "Good" : "Poor";

      const className =
        status === "Excellent"
          ? "national"
          : status === "Good"
            ? "festival"
            : "optional";

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
          onClick={() => onView(row.original.employeeId)}
        >
          <Edit />
        </button>
      </div>
    ),
  },
];
