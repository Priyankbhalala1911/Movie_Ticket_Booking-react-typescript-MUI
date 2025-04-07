import axios from "axios";

export const MyTicket = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/api/booking`,
      { withCredentials: true }
    );

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
