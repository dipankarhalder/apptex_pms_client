import { useState, useMemo } from "react";
import moment from "moment";
import styled from "styled-components";
import {
  Edit,
  Delete,
  Phone,
  Email,
  Website,
  Whatsapp,
  User,
  Cross,
} from "../../../../components/common/Icons";
import { DataTable } from "../../../../shared/DataTable";
import { SortHeader } from "../../../../shared/SortHeader";
import { useLeadStore } from "../../../../store/crm/leadStore";
import { borderRadius, fontSize, fontWeight } from "../../../../styles/mixins";

export const AppLeadsTopCover = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & > p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 16px 20px 0px;
    padding: 12px 18px;
    ${fontSize("16px")}
    ${fontWeight("400")}
    ${borderRadius("8px")}
    color: ${({ theme }) => theme.colors.red40};
    border: 1px solid ${({ theme }) => theme.colors.red40};
    background: ${({ theme }) => theme.colors.magenta100};

    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`;
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

export const ListLeads = () => {
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
        accessorKey: "name",
        enableSorting: true,
        enableSortingRemoval: true,
        header: () => <span>Name</span>,
      },
      {
        accessorKey: "companyName",
        header: ({ column }) => (
          <SortHeader column={column} title="Company Name" />
        ),
        cell: ({ row }) => {
          const cname = row.original.companyName;
          return <AppNameColumnHeading>{cname}</AppNameColumnHeading>;
        },
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
        accessorKey: "createdAt",
        header: () => <span>Created</span>,
        cell: ({ row }) => {
          const foundedAt = row.original.createdAt;
          return (
            <span>
              {foundedAt ? moment(foundedAt).format("DD-MMM-YYYY") : "-"}
            </span>
          );
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => <SortHeader column={column} title="Status" />,
        cell: ({ row }) => {
          const statusRec = row.original.status;
          return (
            <AppSPanIconCover className={statusRec}>
              {statusRec === "New" ? (
                <p>New</p>
              ) : statusRec === "Contacted" ? (
                <p>Contacted</p>
              ) : statusRec === "Converted" ? (
                <p>Converted</p>
              ) : (
                <p>Closed</p>
              )}
            </AppSPanIconCover>
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
    <AppLeadsTopCover>
      <p>
        <Cross />
        Note: Leads must be added through whatsapp, website, referance and
        manually;{" "}
        <b>direct capture from phone calls and emails is not available.</b>
      </p>
      <DataTable
        columns={columns}
        data={leads}
        sorting={sorting}
        search={"name"}
        setSorting={setSorting}
        pageSize={10}
      />
    </AppLeadsTopCover>
  );
};
