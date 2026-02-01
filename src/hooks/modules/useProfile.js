import { getProfileApi } from "../../services/profile.api";
import { AUTH_PROFILE } from "../../utils/queryKeys";
import { useAppQuery } from "../queries/useAppQuery";

export const useGetProfile = () =>
  useAppQuery({
    queryKey: AUTH_PROFILE,
    queryFn: getProfileApi,
  });
