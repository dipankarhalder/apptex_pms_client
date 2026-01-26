// import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompanyApi } from "../services/company.api";
// import { useAuthStore } from "../store/authStore";

const COMPANY_PROFILE_QUERY_KEY = ["company_profile"];

export const useCreateCompany = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCompanyApi,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: COMPANY_PROFILE_QUERY_KEY,
      });
      return data;
    },
    onError: (err) => err,
  });
};
