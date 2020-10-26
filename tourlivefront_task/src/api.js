import axios from "axios";

const api = axios.create({
  baseURL:
    "http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com",
});

export const apiList = {
  getTour: () =>
    api
      .get(`/v1/tours`)
      .then((res) => res)
      .catch((err) => err),
  getSerchTour: (params) =>
    api
      .get(`/v1/tours?search=${params}`)
      .then((res) => res)
      .catch((err) => err),
  getDetailTour: (id) =>
    api
      .get(`/v1/tours/${id}`)
      .then((res) => res)
      .catch((err) => err),
};
