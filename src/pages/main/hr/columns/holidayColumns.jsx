import { Edit, Delete } from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import {
  AppNameColumnHeading,
  AppStatusPtag,
  HolidayDate,
  ActionButton,
} from "./styles";

const getDateStatus = (dateString) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);

  if (date < today) return "PAST";
  if (date.getTime() === today.getTime()) return "TODAY";
  return "UPCOMING";
};

export const createHolidayColumns = ({ onEdit, onDelete }) => [
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
    header: ({ column }) => <SortHeader column={column} title="Holiday Name" />,
    cell: ({ row }) => (
      <AppNameColumnHeading>{row.original.name}</AppNameColumnHeading>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => <SortHeader column={column} title="Date" />,
    cell: ({ row }) => {
      const status = getDateStatus(row.original.date);
      return <HolidayDate status={status}>{row.original.date}</HolidayDate>;
    },
  },
  {
    accessorKey: "day",
    header: () => <span>Day</span>,
  },
  {
    accessorKey: "type",
    header: ({ column }) => <SortHeader column={column} title="Type" />,
    cell: ({ row }) => {
      const type = row.original.type;
      const className =
        type === "National"
          ? "national"
          : type === "Festival"
            ? "festival"
            : "optional";

      return (
        <AppStatusPtag>
          <p className={className}>{type}&nbsp; Holiday</p>
        </AppStatusPtag>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }) => {
      const status = getDateStatus(row.original.date);
      return (
        <div className="app_table_row_btns">
          <ActionButton
            disabled={status === "PAST"}
            onClick={() => onEdit(row.original.date)}
          >
            <Edit />
          </ActionButton>
          <button
            className="app_table_delete_btn"
            onClick={() => onDelete(row.original.date)}
          >
            <Delete />
          </button>
        </div>
      );
    },
  },
];
