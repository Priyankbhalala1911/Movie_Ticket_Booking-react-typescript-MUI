import axios from "axios";

export const MovieAllNews = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/news/all`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const MovieNewsDataApi = async (name: string, postname: string) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BACKEND_API_BASE_URL
      }/news?name=${name}&post=${postname}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const MovieNewsByID = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/news/${id}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
