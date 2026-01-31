import { useState, useMemo } from "react";
import styled from "styled-components";
import {
  Edit,
  Delete,
  Phone,
  Email,
  Website,
  Whatsapp,
  User,
} from "../../../../components/common/Icons";
import { DataTable } from "../../../../shared/DataTable";
import { SortHeader } from "../../../../shared/SortHeader";
import { useLeadStore } from "../../../../store/crm/leadStore";
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

export const AppSPanIconCover = styled.div`
  width: auto;
  height: 18px;
  display: flex;
  align-items: center;
  gap: 8px;

  & > svg {
    width: 16px;
    height: 16px;
  }

  & > p {
    ${fontSize("12px")}
    ${fontWeight("500")}
  }

  &.phone,
  &.New {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.blue30};
    }
    & > p {
      color: ${({ theme }) => theme.colors.blue30};
    }
  }

  &.email {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.magenta40};
    }
    & > p {
      color: ${({ theme }) => theme.colors.magenta40};
    }
  }

  &.whatsapp,
  &.Converted {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.green40};
    }
    & > p {
      color: ${({ theme }) => theme.colors.green40};
    }
  }

  &.referance {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.orange50};
    }
    & > p {
      color: ${({ theme }) => theme.colors.orange50};
    }
  }

  &.Contacted {
    & > p {
      color: ${({ theme }) => theme.colors.yellow30};
    }
  }

  &.Closed {
    & > p {
      color: ${({ theme }) => theme.colors.red40};
    }
  }
`;

export const ListAssigns = () => {
  const { leads } = useLeadStore();
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
        accessorKey: "assignedTo",
        header: ({ column }) => (
          <SortHeader column={column} title="Assigned Person" />
        ),
        cell: ({ row }) => {
          const cname = row.original.assignedTo;
          return <AppNameColumnHeading>{cname}</AppNameColumnHeading>;
        },
      },
      {
        accessorKey: "companyName",
        header: <span>Company Name</span>,
      },
      {
        accessorKey: "email",
        header: () => <span>Email</span>,
      },
      {
        accessorKey: "phone",
        header: () => <span>Phone</span>,
      },
      {
        accessorKey: "budget",
        header: () => <span>Budget</span>,
        cell: ({ row }) => {
          const value = row.original.budget;
          if (!value) return <span>-</span>;
          return (
            <span style={{ fontWeight: "600" }}>
              ₹{" "}
              {value.toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          );
        },
      },
      {
        accessorKey: "source",
        header: ({ column }) => <SortHeader column={column} title="Source" />,
        cell: ({ row }) => {
          const sourceRec = row.original.source;
          return (
            <AppSPanIconCover className={sourceRec}>
              {sourceRec === "phone" ? (
                <>
                  <Phone />
                  <p>Phone</p>
                </>
              ) : sourceRec === "email" ? (
                <>
                  <Email />
                  <p>Email</p>
                </>
              ) : sourceRec === "website" ? (
                <>
                  <Website />
                  <p>Website</p>
                </>
              ) : sourceRec === "whatsapp" ? (
                <>
                  <Whatsapp />
                  <p>Whatsapp</p>
                </>
              ) : (
                <>
                  <User />
                  <p>Referance</p>
                </>
              )}
            </AppSPanIconCover>
          );
        },
      },
      {
        accessorKey: "pipelineStage",
        header: ({ column }) => (
          <SortHeader column={column} title="Pipeline Stage" />
        ),
        cell: ({ row }) => {
          const statusRec = row.original.pipelineStage;
          return <p>{statusRec}</p>;
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
    <DataTable
      columns={columns}
      data={leads}
      sorting={sorting}
      setSorting={setSorting}
      search={"assignedTo"}
      pageSize={10}
    />
  );
};
