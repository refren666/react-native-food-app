import { axiosService } from "./axiosService";
import { urls } from "../utils/urls";

export const businessesSearchService = {
  getAll: (term) =>
    axiosService
      .get(`${urls.search}?term=${term}&location=Toronto`)
      .then((response) => response.data.businesses),
  getById: (id) => axiosService.get(`/${id}`).then((response) => response.data),
};
