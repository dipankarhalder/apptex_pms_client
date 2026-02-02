import moment from "moment";
import {
  Edit,
  Delete,
  Project,
  Products,
  Tracking,
  CircleTick,
  Cross,
} from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import { AppNameColumnHeading, AppSpanIconCover } from "./styles";

export const createFollowupColumns = ({ onEdit, onDelete }) => [
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
    header: ({ column }) => <SortHeader column={column} title="Manager" />,
    cell: ({ row }) => (
      <AppNameColumnHeading>{row.original.name}</AppNameColumnHeading>
    ),
  },
  {
    accessorKey: "followUpDate",
    header: () => <span>Follow-up Date</span>,
    cell: ({ row }) => {
      const foundedAt = row.original.followUpDate;
      return (
        <span>{foundedAt ? moment(foundedAt).format("DD-MMM-YYYY") : "-"}</span>
      );
    },
  },
  {
    accessorKey: "contextHeading",
    header: () => <span>Requirement</span>,
  },
  {
    accessorKey: "pipelineStage",
    header: ({ column }) => (
      <SortHeader column={column} title="Pipeline Stage" />
    ),
    cell: ({ row }) => {
      const stage = row.original.pipelineStage;
      const stageIcons = {
        "New Lead": <Products />,
        Qualified: <Tracking />,
        Proposal: <Project />,
        Won: <CircleTick />,
        Lost: <Cross />,
      };
      const icon = stageIcons[stage] || <Cross />;
      const className =
        stage === "New Lead"
          ? "new_lead"
          : stage.toLowerCase().replace(" ", "_");

      return (
        <AppSpanIconCover className={className}>
          {icon}
          <p>{stage}</p>
        </AppSpanIconCover>
      );
    },
  },
  {
    accessorKey: "location",
    header: () => <span>Location</span>,
  },
  {
    accessorKey: "assignedTo",
    header: ({ column }) => <SortHeader column={column} title="Sales Person" />,
    cell: ({ row }) => {
      return (
        <AppNameColumnHeading>{row.original.assignedTo}</AppNameColumnHeading>
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
