import axios from "axios";

export const handelMovieApi = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/movie/slot-booking`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const handelMovieById = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/movie/slot-booking/${id}`
    );
    return await response.data;
  } catch (error) {
    return error;
  }
};
