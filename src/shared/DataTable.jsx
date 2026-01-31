import { useState, useMemo } from "react";
import styled from "styled-components";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Rarrow, Larrow, Search } from "../components/common/Icons";
import { fontSize, fontWeight } from "../styles/mixins";

export const AppDataTableCover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 0px;
`;

export const AppHeadingInfo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h2 {
    ${fontSize("15px")}
    ${fontWeight("500")}

    & > span {
      color: 1px solid ${({ theme }) => theme.colors.gray30};
      margin-left: 10px;
      ${fontSize("12px")}
      ${fontWeight("500")}
    }
  }
`;

export const AppHeaderSearch = styled.div`
  width: 300px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray90};
  overflow: hidden;
  gap: 3px;

  & > svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  & > input {
    width: 100%;
    height: 34px;
    ${fontSize("13px")}
    ${fontWeight("500")}
    color: ${({ theme }) => theme.colors.black100};
    border: 0px solid transparent;
  }
`;

export const AppDataTableInside = styled.div`
  width: 100%;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
`;

export const AppDataTableMainCover = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray80};
  border-radius: 6px;
  overflow: auto;

  table {
    width: 100%;

    thead {
      background: ${({ theme }) => theme.colors.tablehead};

      tr {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray80};

        th {
          padding: 0.4rem 1rem;
          text-align: left;
          ${fontSize("11px")}
          ${fontWeight("500")}
          color: ${({ theme }) => theme.colors.gray50};

          input[type="checkbox"] {
            margin-top: 3px;
          }

          .app_sort_header {
            display: flex;
            width: auto;
            cursor: pointer;
            align-items: center;
            gap: 5px;

            & > svg {
              width: 14px;
              height: 14px;
            }
          }

          &:last-child {
            text-align: right;
          }
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};

        td {
          text-align: left;
          padding: 0.24rem 1rem;
          ${fontSize("12px")}
          ${fontWeight("500")}

          a {
            color: ${({ theme }) => theme.colors.blue30};
            text-decoration: underline;
          }

          p > span.active-item {
            color: ${({ theme }) => theme.colors.green30};
            padding: 3px 8px;
            background: ${({ theme }) => theme.colors.green100};
            border: 1px solid ${({ theme }) => theme.colors.green30};
            ${fontSize("12px")}
            border-radius: 6px;
          }

          p > span.inactive-item {
            color: ${({ theme }) => theme.colors.red30};
            padding: 3px 8px;
            background: ${({ theme }) => theme.colors.red100};
            border: 1px solid ${({ theme }) => theme.colors.red30};
            ${fontSize("12px")}
            border-radius: 6px;
          }

          .app_table_row_btns {
            display: flex;
            justify-content: flex-end;
            gap: 6px;

            & > button {
              display: flex;
              align-items: center;
              border: 0px solid transparent;
              padding: 10px;
              cursor: pointer;
              border-radius: 4px;
              background: $tablehead;
              transition: 0.5s;

              &.app_table_edit_btn {
                color: ${({ theme }) => theme.colors.blue30};
              }

              &.app_table_delete_btn {
                color: ${({ theme }) => theme.colors.red40};
              }

              & > svg {
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }
`;

export const AppTableFooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0px 20px;
`;

export const AppTableFooterLeftSide = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  gap: 50px;
`;

export const AppTableDataCount = styled.div`
  display: flex;

  & > p {
    color: ${({ theme }) => theme.colors.gray30};
    ${fontSize("13px")}
    ${fontWeight("500")}

    & > span {
      color: ${({ theme }) => theme.colors.black100};
    }
  }
`;
export const AppFooterSpclInfo = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;
export const AppGotPage = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 8px;

  & > p {
    color: ${({ theme }) => theme.colors.gray30};
    margin-left: 10px;
    ${fontSize("13px")}
    ${fontWeight("500")}
  }

  & > input {
    width: 34px;
    height: 34px;
    text-align: center;
    border-radius: 6px;
    ${fontSize("13px")}
    ${fontWeight("500")}
    color:  ${({ theme }) => theme.colors.black100};
    border: 1px solid ${({ theme }) => theme.colors.gray80};
  }
`;
export const AppFooterBtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const AppFooterPagesCounters = styled.div`
  width: auto;

  & > p {
    color: ${({ theme }) => theme.colors.gray30};
    margin-left: 10px;
    ${fontSize("13px")}
    ${fontWeight("500")}
  }
`;
export const AppPaginationBtnCover = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const AppPaginationBtn = styled.button`
  display: flex;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray80};
  background: ${({ theme }) => theme.colors.white100};
  border-radius: 6px;

  & > svg {
    width: 14px;
    height: 14px;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray70};
    border: 1px solid ${({ theme }) => theme.colors.gray100};
  }
`;

export const AppSelectTableRec = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 10px;

  & > p {
    color: ${({ theme }) => theme.colors.gray30};
    ${fontSize("13px")}
    ${fontWeight("500")}
  }

  & > select {
    width: auto;
    height: 34px;
    padding: 0px 10px;
    text-align: center;
    border-radius: 6px;
    ${fontSize("13px")}
    ${fontWeight("500")}
    color: ${({ theme }) => theme.colors.black100};
    border: 1px solid ${({ theme }) => theme.colors.gray80};
  }
`;

export const DataTable = ({
  columns,
  data,
  sorting,
  setSorting,
  pageSize,
  search = "name",
}) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  const pageSizeOptions = useMemo(() => {
    const totalRows = data.length;
    const STEP = 10;
    if (totalRows === 0) return [];
    const options = [];
    for (let i = STEP; i <= totalRows + STEP; i += STEP) {
      options.push(i);
      if (i >= totalRows) break;
    }
    return options;
  }, [data.length]);

  return (
    <AppDataTableCover>
      <AppHeadingInfo>
        <AppHeaderSearch>
          <Search />
          <input
            placeholder="Search here..."
            value={table.getColumn(search)?.getFilterValue() || ""}
            onChange={(e) =>
              table.getColumn(search)?.setFilterValue(e.target.value)
            }
          />
        </AppHeaderSearch>
        <div className="app_top_btn_grp"></div>
      </AppHeadingInfo>
      <AppDataTableInside>
        <AppDataTableMainCover>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </AppDataTableMainCover>
        <AppTableFooterBottom>
          <AppTableFooterLeftSide>
            <AppTableDataCount>
              <p>
                <span>{table.getFilteredSelectedRowModel().rows.length}</span>{" "}
                of <span>{table.getFilteredRowModel().rows.length} row(s)</span>{" "}
                selected.
              </p>
            </AppTableDataCount>
            <AppFooterSpclInfo>
              <AppGotPage>
                <p>Go to page</p>
                <input
                  type="number"
                  min={1}
                  max={table.getPageCount()}
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    table.setPageIndex(page);
                  }}
                />
              </AppGotPage>
              <AppSelectTableRec>
                <p>
                  Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
                  {table.getRowCount().toLocaleString()} Rows
                </p>
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => table.setPageSize(Number(e.target.value))}
                >
                  {pageSizeOptions.map((size) => (
                    <option key={size} value={size}>
                      Show {size}
                    </option>
                  ))}
                </select>
              </AppSelectTableRec>
            </AppFooterSpclInfo>
          </AppTableFooterLeftSide>
          <AppFooterBtnGroup>
            <AppFooterPagesCounters>
              <p>
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </p>
            </AppFooterPagesCounters>
            <AppPaginationBtnCover>
              <AppPaginationBtn
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <Larrow />
              </AppPaginationBtn>
              <AppPaginationBtn
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <Larrow />
              </AppPaginationBtn>
              <AppPaginationBtn
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <Rarrow />
              </AppPaginationBtn>
              <AppPaginationBtn
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <Rarrow />
              </AppPaginationBtn>
            </AppPaginationBtnCover>
          </AppFooterBtnGroup>
        </AppTableFooterBottom>
      </AppDataTableInside>
    </AppDataTableCover>
  );
};
