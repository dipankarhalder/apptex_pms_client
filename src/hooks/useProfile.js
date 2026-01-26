import { useQuery } from "@tanstack/react-query"; // useMutation, useQueryClient,
import { getProfileApi } from "../services/profile.api";
import { useAuthStore } from "../store/authStore";

const PROFILE_QUERY_KEY = ["profile"];

export const useGetProfile = () => {
  const { accessToken, isAuthChecked } = useAuthStore();

  return useQuery({
    queryKey: PROFILE_QUERY_KEY,
    queryFn: getProfileApi,
    enabled: isAuthChecked && !!accessToken,
    staleTime: 10 * 60 * 1000,
  });
};
