import { useState, useMemo } from "react";
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
import { AppNameColumnHeading, AppSPanIconCover } from "./style";

export const ListQualified = () => {
  const { leads } = useLeadStore();
  const [sorting, setSorting] = useState([]);
  const handleEdit = (id) => console.log(id);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => lead.pipelineStage === "Qualified");
  }, [leads]);

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
        accessorKey: "location",
        header: () => <span>Location</span>,
      },
      {
        accessorKey: "assignedTo",
        header: ({ column }) => (
          <SortHeader column={column} title="Sales Person" />
        ),
        cell: ({ row }) => {
          const cname = row.original.assignedTo;
          return <AppNameColumnHeading>{cname}</AppNameColumnHeading>;
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
      data={filteredLeads}
      sorting={sorting}
      search={"companyName"}
      setSorting={setSorting}
      pageSize={10}
    />
  );
};
