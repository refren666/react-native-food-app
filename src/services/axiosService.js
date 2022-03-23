import axios from "axios";

import baseURL from "../utils/urls";

export const axiosService = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer QLR4izdZIOixnhTE87otJ9YQQwO8V5hP-JwlofruWFLr2Kfqx_vmulIU6bWxmDVeZksp5SFNrhZftzpVAeFWaqs_GwDXhcBhtC05dkwW2KzF4NlJupSuOr7R1V47YnYx`,
  },
});
