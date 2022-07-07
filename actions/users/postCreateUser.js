import axiosInstance from "../index";

export default function postCreateUser(data) {
  return axiosInstance()
    .post(`/user/create`, data)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return { data: [] };
    });
}
