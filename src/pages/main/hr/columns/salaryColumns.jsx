import {
  Edit,
  Delete,
  Uarrow,
  Darrow,
  Larrow,
} from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import {
  AppNameColumnHeading,
  AppStatusPtag,
  AppPriceDeduction,
} from "./styles";

export const createSalaryColumns = ({ onEdit, onDelete }) => [
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
    accessorKey: "department",
    header: ({ column }) => <SortHeader column={column} title="Department" />,
    cell: ({ row }) => row.original.department,
  },

  {
    accessorKey: "grossSalary",
    header: ({ column }) => <SortHeader column={column} title="Gross Salary" />,
    cell: ({ row }) => `₹${row.original.grossSalary.toLocaleString()}`,
  },

  {
    accessorKey: "totalDeductions",
    header: ({ column }) => <SortHeader column={column} title="Deductions" />,
    cell: ({ row }) => {
      return (
        <AppPriceDeduction>
          <p>{`₹${row.original.totalDeductions.toLocaleString()}`}</p>
          <p>
            PF: ₹{row.original.deductions.pf.toLocaleString()}, &nbsp;&nbsp;
            ESI: ₹{row.original.deductions.esi.toLocaleString()}, &nbsp;&nbsp;
            Tax: ₹{row.original.deductions.esi.toLocaleString()}, &nbsp;&nbsp;
            Other: ₹{row.original.deductions.esi.toLocaleString()}
          </p>
        </AppPriceDeduction>
      );
    },
  },

  // {
  //   accessorKey: "pf",
  //   header: ({ column }) => <SortHeader column={column} title="PF" />,
  //   cell: ({ row }) => `₹${row.original.deductions.pf.toLocaleString()}`,
  // },

  // {
  //   accessorKey: "esi",
  //   header: ({ column }) => <SortHeader column={column} title="ESI" />,
  //   cell: ({ row }) => `₹${row.original.deductions.esi.toLocaleString()}`,
  // },

  {
    accessorKey: "netSalary",
    header: ({ column }) => <SortHeader column={column} title="Net Salary" />,
    cell: ({ row }) => `₹${row.original.netSalary.toLocaleString()}`,
  },

  {
    accessorKey: "status",
    header: ({ column }) => <SortHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const actStatus = row.original.status;
      const className = actStatus === "Active" ? "national" : "festival";
      return (
        <AppStatusPtag>
          <p className={className}>{actStatus}</p>
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
