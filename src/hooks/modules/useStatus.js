import { createStatusApi, getStatusesApi } from "../../services/status.api";
import { useAppMutation } from "../queries/useAppMutation";
import { useAppQuery } from "../queries/useAppQuery";
import { STATUS_INFO } from "../../utils/queryKeys";

export const useCreateStatus = () =>
  useAppMutation({
    mutationFn: createStatusApi,
    invalidateQueryKeys: [STATUS_INFO],
  });

export const useGetStatuses = () =>
  useAppQuery({
    queryKey: STATUS_INFO,
    queryFn: getStatusesApi,
  });
