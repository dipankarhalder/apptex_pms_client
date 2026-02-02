import { Edit, Delete } from "../../../../components/common/Icons";
import { SortHeader } from "../../../../shared/SortHeader";
import { AppNameColumnHeading } from "./styles";

export const createBillingsColumns = ({ onEdit, onDelete }) => [
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
    accessorKey: "id",
    header: ({ column }) => <SortHeader column={column} title="Invoice" />,
    cell: ({ row }) => (
      <AppNameColumnHeading>{row.original.id}</AppNameColumnHeading>
    ),
  },
  {
    accessorKey: "clientName",
    header: () => <span>Client Name</span>,
  },
  {
    accessorKey: "billingDate",
    header: () => <span>Billing Date</span>,
  },
  {
    accessorKey: "subTotal",
    header: () => <span>Sub Total</span>,
    cell: ({ row }) => <span>₹{row.original.subTotal.toLocaleString()}</span>,
  },
  {
    accessorKey: "gstRate",
    header: () => <span>GST Rate</span>,
    cell: ({ row }) => <span>{row.original.gstRate.toLocaleString()}%</span>,
  },
  {
    accessorKey: "gstAmount",
    header: () => <span>GST Amount</span>,
    cell: ({ row }) => <span>₹{row.original.gstAmount.toLocaleString()}</span>,
  },
  {
    accessorKey: "totalAmount",
    header: () => <span>Total Amount</span>,
    cell: ({ row }) => (
      <span>₹{row.original.totalAmount.toLocaleString()}</span>
    ),
  },
  {
    accessorKey: "paymentStatus",
    header: () => <span>Payment Status</span>,
    cell: ({ row }) => (
      <span
        style={{
          color:
            row.original.paymentStatus === "Paid"
              ? "green"
              : row.original.paymentStatus === "Estimate Sent"
                ? "blue"
                : row.original.paymentStatus === "Estimate Shared"
                  ? "black"
                  : "orange",
          fontWeight: 500,
        }}
      >
        {row.original.paymentStatus}
      </span>
    ),
  },
  {
    accessorKey: "assignedSalesPerson",
    header: () => <span>Sales Person</span>,
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
