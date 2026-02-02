import { useState, useMemo, useCallback } from "react";
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
import { AppNameColumnHeading, AppSpanIconCover } from "./style";

const SOURCE_MAP = {
  phone: { icon: <Phone />, label: "Phone" },
  email: { icon: <Email />, label: "Email" },
  website: { icon: <Website />, label: "Website" },
  whatsapp: { icon: <Whatsapp />, label: "Whatsapp" },
  reference: { icon: <User />, label: "Reference" },
};

const formatBudget = (value) =>
  value
    ? `₹ ${value.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
      })}`
    : "-";

export const ListPipelineTabs = ({ stage, searchKey = "companyName" }) => {
  const { leads } = useLeadStore();
  const [sorting, setSorting] = useState([]);

  const handleEdit = useCallback((id) => {
    console.log(id);
  }, []);

  const filteredLeads = useMemo(
    () => leads.filter((l) => l.pipelineStage === stage),
    [leads, stage],
  );

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
      },
      {
        accessorKey: "companyName",
        header: ({ column }) => (
          <SortHeader column={column} title="Company Name" />
        ),
        cell: ({ row }) => {
          return (
            <AppNameColumnHeading>
              {row.original.companyName}
            </AppNameColumnHeading>
          );
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
        cell: ({ row }) => (
          <span style={{ fontWeight: 600 }}>
            {formatBudget(row.original.budget)}
          </span>
        ),
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
          return (
            <AppNameColumnHeading>
              {row.original.assignedTo}
            </AppNameColumnHeading>
          );
        },
      },
      {
        accessorKey: "source",
        header: ({ column }) => <SortHeader column={column} title="Source" />,
        cell: ({ row }) => {
          const rec = SOURCE_MAP[row.original.source] || SOURCE_MAP.reference;
          return (
            <AppSpanIconCover className={row.original.source}>
              {rec.icon}
              <p>{rec.label}</p>
            </AppSpanIconCover>
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
    [handleEdit],
  );

  return (
    <DataTable
      columns={columns}
      data={filteredLeads}
      sorting={sorting}
      setSorting={setSorting}
      search={searchKey}
      pageSize={10}
    />
  );
};
