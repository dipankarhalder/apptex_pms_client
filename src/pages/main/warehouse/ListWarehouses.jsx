import { useState, useMemo } from "react";
import styled from "styled-components";
import { Edit, Delete } from "../../../components/common/Icons";
import { DataTable } from "../../../shared/DataTable";
import { SortHeader } from "../../../shared/SortHeader";
import { useWarehouseStore } from "../../../store/warehouseStore";
import { fontSize, fontWeight } from "../../../styles/mixins";

export const AppNameColumnHeading = styled.p`
  ${fontSize("14px")}
  ${fontWeight("500")}
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue30};
`;

export const ListWarehouses = () => {
  const { warehouseList } = useWarehouseStore();
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
        accessorKey: "code",
        header: ({ column }) => <SortHeader column={column} title="Code" />,
      },
      {
        accessorKey: "address.street",
        header: ({ column }) => <SortHeader column={column} title="Address" />,
      },
      {
        accessorKey: "type",
        header: ({ column }) => <SortHeader column={column} title="Type" />,
      },
      {
        accessorKey: "status",
        header: ({ column }) => <SortHeader column={column} title="Status" />,
        cell: ({ row }) => {
          return (
            <p>
              {row.original.status === "Active" ? (
                <span className="active-item">Active</span>
              ) : (
                <span className="inactive-item">Inactive</span>
              )}
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
      <p>List of Warehouse</p>
      <DataTable
        columns={columns}
        data={warehouseList}
        sorting={sorting}
        setSorting={setSorting}
        pageSize={10}
      />
    </div>
  );
};
