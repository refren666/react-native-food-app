import { useState } from "react";

import { businessesSearchService } from "../services/searchService";

export default (initialTerm = "food") => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id) => {
    setResult({
      data: null,
      loading: true,
      error: null,
    });

    try {
      const response = await businessesSearchService.getById(id);

      setResult({
        data: response,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResult({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };

  return [result, searchRestaurant];
};
