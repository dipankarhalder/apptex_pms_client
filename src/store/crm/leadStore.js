import { create } from "zustand";
import { persist } from "zustand/middleware";
import leadData from "../../db/crm/leads.json";

export const useLeadStore = create(
  persist(
    (set, get) => ({
      leads: leadData || [],
      selectedLead: null,

      getLeadById: (leadId) => {
        const lead = get().leads.find((item) => item.id === leadId);
        set({ selectedLead: lead || null });
        return lead;
      },

      getLeadsByPipelineStage: (stage) => {
        return get().leads.filter((lead) => lead.pipelineStage === stage);
      },

      getLeadsByAssignedUser: (userName) => {
        return get().leads.filter((lead) => lead.assignedTo === userName);
      },

      getFollowUpLeads: (date) => {
        return get().leads.filter((lead) => lead.followUpDate === date);
      },

      addLead: (newLead) => {
        set({
          leads: [...get().leads, newLead],
        });
      },

      updateLead: (leadId, updatedData) => {
        set({
          leads: get().leads.map((lead) =>
            lead.id === leadId ? { ...lead, ...updatedData } : lead,
          ),
          selectedLead:
            get().selectedLead?.id === leadId
              ? { ...get().selectedLead, ...updatedData }
              : get().selectedLead,
        });
      },

      deleteLead: (leadId) => {
        set({
          leads: get().leads.filter((lead) => lead.id !== leadId),
          selectedLead:
            get().selectedLead?.id === leadId ? null : get().selectedLead,
        });
      },

      moveLeadToPipelineStage: (leadId, newStage) => {
        set({
          leads: get().leads.map((lead) =>
            lead.id === leadId ? { ...lead, pipelineStage: newStage } : lead,
          ),
        });
      },

      assignLead: (leadId, assignedTo, assignDate) => {
        set({
          leads: get().leads.map((lead) =>
            lead.id === leadId ? { ...lead, assignedTo, assignDate } : lead,
          ),
        });
      },

      addLeadNote: (leadId, note) => {
        set({
          leads: get().leads.map((lead) =>
            lead.id === leadId
              ? {
                  ...lead,
                  notes: [...(lead.notes || []), note],
                }
              : lead,
          ),
        });
      },

      clearSelectedLead: () => {
        set({ selectedLead: null });
      },

      resetToSeedData: () => {
        set({
          leads: leadData.leads || [],
          selectedLead: null,
        });
      },
    }),
    {
      name: "leadData",
      merge: (persistedState, currentState) => {
        return persistedState ?? currentState;
      },
    },
  ),
);
