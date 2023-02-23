import baseUrl from "../API/baseURL";

const useGetDataToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.get(url, config, params);
  return res.data;
};

export default useGetDataToken;
