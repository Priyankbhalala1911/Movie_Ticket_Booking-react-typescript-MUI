import axios from "axios";

export const handleComingMovies = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/coming/movies`,
      { withCredentials: true }
    );

    return response.data;
  } catch (err) {
    return err;
  }
};
