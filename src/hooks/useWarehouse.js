import {
  createWarehouseApi,
  getWarehousesApi,
} from "../services/warehouse.api";
import { useAppMutation } from "../hooks/queries/useAppMutation";
import { useAppQuery } from "../hooks/queries/useAppQuery";
import { WAREHOUSE_INFO } from "../utils/queryKeys";

export const useCreateStatus = () =>
  useAppMutation({
    mutationFn: createWarehouseApi,
    invalidateQueryKeys: [WAREHOUSE_INFO],
  });

export const useGetStatuses = () =>
  useAppQuery({
    queryKey: WAREHOUSE_INFO,
    queryFn: getWarehousesApi,
  });
