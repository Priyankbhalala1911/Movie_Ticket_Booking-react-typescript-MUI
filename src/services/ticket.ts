import axios from "axios";

export const Ticket = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/api/booking/${id}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
