import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAppMutation = ({
  mutationFn,
  onSuccess,
  onError,
  invalidateQueryKeys = [],
  ...options
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: async (data, variables, context) => {
      if (invalidateQueryKeys.length > 0) {
        await Promise.all(
          invalidateQueryKeys.map((key) => queryClient.invalidateQueries(key)),
        );
      }
      if (onSuccess) {
        await onSuccess(data, variables, context);
      }
    },
    onError: (err, variables, context) => {
      if (onError) onError(err, variables, context);
    },
    ...options,
  });
};
