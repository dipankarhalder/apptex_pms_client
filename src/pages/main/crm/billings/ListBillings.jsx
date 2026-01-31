import { useState, useMemo } from "react";
import styled from "styled-components";
import { Edit, Delete } from "../../../../components/common/Icons";
import { DataTable } from "../../../../shared/DataTable";
import { SortHeader } from "../../../../shared/SortHeader";
import { useBillingStore } from "../../../../store/crm/billingStore";
import { fontSize, fontWeight } from "../../../../styles/mixins";

export const AppNameColumnHeading = styled.p`
  ${fontSize("12px")}
  ${fontWeight("500")}
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue30};
`;

export const AppIndustriesInfo = styled.div`
  display: flex;
  flex-direction: column;

  .app_type_col {
    padding: 2px 4px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.blue30};
    color: ${({ theme }) => theme.colors.blue30};
  }
`;

export const ListBillings = () => {
  const { billings } = useBillingStore();
  const [sorting, setSorting] = useState([]);
  const handleEdit = (id) => console.log(id);

  const columns = useMemo(
    () => [
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
        cell: ({ row }) => (
          <span>₹{row.original.subTotal.toLocaleString()}</span>
        ),
      },
      {
        accessorKey: "gstRate",
        header: () => <span>GST Rate</span>,
        cell: ({ row }) => (
          <span>{row.original.gstRate.toLocaleString()}%</span>
        ),
      },
      {
        accessorKey: "gstAmount",
        header: () => <span>GST Amount</span>,
        cell: ({ row }) => (
          <span>₹{row.original.gstAmount.toLocaleString()}</span>
        ),
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
              onClick={() => handleEdit(row.original.id)}
            >
              <Edit />
            </button>
            <button
              className="app_table_delete_btn"
              onClick={() => console.log("Delete billing ID:", row.original.id)}
            >
              <Delete />
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={billings}
      sorting={sorting}
      setSorting={setSorting}
      search={"clientName"}
      pageSize={10}
    />
  );
};
