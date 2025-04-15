import axios from "axios";
import toast from "react-hot-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const handlePaymentOrder = async (
  amount: number,
  selectedMovie: any
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_BASE_URL}/payment/order`,
      {
        withCredentials: true,
        amount: amount,
      }
    );
    handlePaymentVerify(response.data.data, selectedMovie);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const handlePaymentVerify = async (data: any, selectedMovie: any) => {
  const option = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: data.amount,
    currency: data.currency,
    name: "TIXID-Movie-Ticket-Booking",
    description: "Movie Ticket Booking",
    image:
      "https://res.cloudinary.com/dhd86c3ax/image/upload/v1743759308/logo_zbvbty.jpg",
    order_id: data.id,
    handler: async (response: any) => {
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
        if (verify.data.id) {
          toast.success(verify.data.message);
          window.location.href = `/payment-success/${verify.data.id}`;
        }
      } catch (error) {
        console.log(error);
        toast.error("Payment Failed");
      }
    },
    theme: {
      color: "#F8C200",
    },
  };

  const payment = new window.Razorpay(option);
  payment.open();
};
