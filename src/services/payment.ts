import axios from "axios";
import toast from "react-hot-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}
interface PaymentData {
  amount: number;
  currency: string;
  id: string;
}

interface Seat {
  id: string;
  seat_number: string;
}

interface Movie {
  movie_id: string | null;
  location: string | null;
  type: string | null;
  date: string | null;
  price: number | null;
  time: string | null;
  seat_number: Seat[] | null;
  total_amount: number | null;
}

export const handlePaymentOrder = async (
  amount: number,
  selectedMovie: Movie
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/payment/order`,
      {
        amount: amount,
      },
      {
        withCredentials: true,
      }
    );
    const id = await handlePaymentVerify(response.data.data, selectedMovie);
    return id;
  } catch (error) {
    console.log(error);
    toast.error("Payment Failed");
    return error;
  }
};

export const handlePaymentVerify = (
  data: PaymentData,
  selectedMovie: Movie
): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const option = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "TIXID-Movie-Ticket-Booking",
      description: "Movie Ticket Booking",
      image:
        "https://res.cloudinary.com/dhd86c3ax/image/upload/v1743759308/logo_zbvbty.jpg",
      order_id: data.id,
      handler: async (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => {
        try {
          const verify = await axios.post(
            `${import.meta.env.VITE_BACKEND_API_BASE_URL}/payment/verify`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              selectedMovie: selectedMovie,
            },
            {
              withCredentials: true,
            }
          );
          console.log(verify);
          if (verify.data.id) {
            toast.success(verify.data.message);
            resolve(verify.data);
          } else {
            reject("Verification failed");
          }
        } catch (error) {
          console.log(error);
          toast.error("Payment Failed");
          reject(error);
        }
      },
      theme: {
        color: "#F8C200",
      },
    };

    const payment = new window.Razorpay(option);
    payment.open();
  });
};
