import { useQuery } from "@tanstack/react-query";

export const useAppQuery = ({
  queryKey,
  queryFn,
  staleTime = 10 * 60 * 1000,
  enabled = true,
  refetchOnWindowFocus = false,
  retry = 3,
  ...options
}) => {
  return useQuery({
    queryKey,
    queryFn,
    staleTime,
    enabled,
    refetchOnWindowFocus,
    retry,
    ...options,
  });
};
