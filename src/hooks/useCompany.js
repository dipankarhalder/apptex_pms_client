import { createCompanyApi, getCompaniesApi } from "../services/company.api";
import { useAppMutation } from "../hooks/queries/useAppMutation";
import { useAppQuery } from "../hooks/queries/useAppQuery";
import { COMPANY_PROFILE } from "../utils/queryKeys";

export const useCreateCompany = () =>
  useAppMutation({
    mutationFn: createCompanyApi,
    invalidateQueryKeys: [COMPANY_PROFILE],
  });

export const useGetCompanies = () =>
  useAppQuery({
    queryKey: COMPANY_PROFILE,
    queryFn: getCompaniesApi,
  });
