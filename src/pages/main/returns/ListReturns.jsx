import { useState, useMemo } from "react";
import styled from "styled-components";
import { Edit, Delete } from "../../../components/common/Icons";
import { DataTable } from "../../../shared/DataTable";
import { SortHeader } from "../../../shared/SortHeader";
import { useProductStore } from "../../../store/productStore";
import { fontSize, fontWeight } from "../../../styles/mixins";

export const AppNameColumnHeading = styled.p`
  ${fontSize("14px")}
  ${fontWeight("500")}
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue30};
`;

export const ListReturns = () => {
  const { productInfo } = useProductStore();
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
        accessorKey: "name",
        enableSorting: true,
        enableSortingRemoval: true,
        header: ({ column }) => <SortHeader column={column} title="Name" />,
        cell: ({ row }) => {
          const vendor = row.original;
          return <AppNameColumnHeading>{vendor.name}</AppNameColumnHeading>;
        },
      },
      {
        accessorKey: "costPrice",
        header: () => <span>Cost/Ton</span>,
        cell: ({ row }) => {
          const product = row.original;
          return (
            <p>
              {product.costPrice.toLocaleString("en-IN")} {product.currency} /{" "}
              {product.unit}
            </p>
          );
        },
      },
      {
        accessorKey: "stockQuantity",
        header: () => <span>Stock</span>,
        cell: ({ row }) => {
          const product = row.original;
          const effectiveStock =
            product.stockQuantity -
            (product.wasteQuantity || 0) -
            (product.returnQuantity || 0);
          return (
            <p>
              {effectiveStock.toLocaleString("en-IN")} {product.unit} (usable)
            </p>
          );
        },
      },
      {
        accessorKey: "wasteQuantity",
        header: () => <span>Waste</span>,
        cell: ({ row }) => {
          const product = row.original;
          return (
            <p>
              {(product.wasteQuantity || 0).toLocaleString("en-IN")}{" "}
              {product.unit}
            </p>
          );
        },
      },
      {
        accessorKey: "returnQuantity",
        header: () => <span>Return</span>,
        cell: ({ row }) => {
          const product = row.original;
          return (
            <p>
              {(product.returnQuantity || 0).toLocaleString("en-IN")}{" "}
              {product.unit}
            </p>
          );
        },
      },
      {
        accessorKey: "refundAmount",
        header: () => <span>Refund Amount</span>,
        cell: ({ row }) => {
          const product = row.original;
          const refund = product.refundDone
            ? (product.returnQuantity || 0) * (product.costPrice || 0)
            : 0;
          return (
            <p>
              {refund.toLocaleString("en-IN")} {product.currency}
            </p>
          );
        },
      },
      {
        accessorKey: "pricePerBag",
        header: () => <span>Price per/bag</span>,
        cell: ({ row }) => {
          const product = row.original;
          const perBagPrice = ((product.costPrice || 0) / 1000) * 50;
          return (
            <p>
              {perBagPrice.toLocaleString("en-IN")} {product.currency}
            </p>
          );
        },
      },
      {
        accessorKey: "actions",
        header: "Action",
        cell: ({ row }) => {
          return (
            <div className="app_table_row_btns">
              <button
                className="app_table_edit_btn"
                onClick={() => handleEdit(row.original.id ?? "")}
              >
                <Edit />
              </button>
              <button
                className="app_table_delete_btn"
                onClick={() => handleEdit(row.original.id ?? "")}
              >
                <Delete />
              </button>
            </div>
          );
        },
      },
    ],
    [],
  );

  return (
    <div>
      <p>List of Companies</p>
      <DataTable
        columns={columns}
        data={productInfo}
        sorting={sorting}
        setSorting={setSorting}
        pageSize={10}
      />
    </div>
  );
};
