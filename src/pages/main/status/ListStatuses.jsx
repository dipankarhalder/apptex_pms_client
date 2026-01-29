import { useState, useMemo } from "react";
import styled from "styled-components";
import { Edit, Delete } from "../../../components/common/Icons";
import { DataTable } from "../../../shared/DataTable";
import { SortHeader } from "../../../shared/SortHeader";
import { useStatusStore } from "../../../store/statusStore";
import { fontSize, fontWeight } from "../../../styles/mixins";

export const AppNameColumnHeading = styled.p`
  & > span {
    ${fontWeight("500")}
    ${fontSize("12px")}
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid ${({ $color }) => $color};
    color: ${({ $color, theme }) => $color || theme.colors.blue30};
  }
`;

export const ListStatuses = () => {
  const { statusList } = useStatusStore();
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
        accessorKey: "code",
        header: ({ column }) => <SortHeader column={column} title="Code" />,
      },
      {
        accessorKey: "label",
        enableSorting: true,
        enableSortingRemoval: true,
        cell: ({ row }) => {
          const status = row.original;
          return (
            <AppNameColumnHeading $color={status.color}>
              <span>{status.label}</span>
            </AppNameColumnHeading>
          );
        },
      },
      {
        accessorKey: "groupName",
        header: ({ column }) => <SortHeader column={column} title="Group" />,
      },
      {
        accessorKey: "groupKey",
        header: ({ column }) => <SortHeader column={column} title="GroupKey" />,
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
      <p>List of statuses</p>
      <DataTable
        columns={columns}
        data={statusList}
        sorting={sorting}
        setSorting={setSorting}
        pageSize={10}
      />
    </div>
  );
};
