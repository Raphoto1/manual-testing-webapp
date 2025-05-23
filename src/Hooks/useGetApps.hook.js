import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const useGetApps = () => {
  const appsUrl = "/api/apps";
  const { data, error, isValidating } = useSWR(appsUrl, fetcher);
  return {
    payload: data ? data.payload : undefined,
    error: error,
    isValidating: isValidating,
  };
};

export const useGetAppsByDev = (dev) => {
  const appsUrl = `/api/apps?dev=${dev}`;
  const { data, error, isValidating } = useSWR(appsUrl, fetcher);
  return {
    payload: data ? data.payload : undefined,
    error: error,
    isValidating: isValidating,
  };
};

export const useGetAppsByApp = (app) => {
  const appsUrl = `/api/apps${app}`;
  const { data, error, isValidating } = useSWR(appsUrl, fetcher);
  return {
    payload: data ? data.payload : undefined,
    error: error,
    isValidating: isValidating,
  };
};