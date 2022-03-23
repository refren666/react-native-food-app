import { useState } from "react";

import { businessesSearchService } from "../services/searchService";

export default (initialTerm = "food") => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (searchTerm) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });

    try {
      const response = await businessesSearchService.getAll(searchTerm);

      setResults({
        data: response,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };

  return [results, searchRestaurants];
};
