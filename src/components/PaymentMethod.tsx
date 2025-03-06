import { Check, Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import PaymentLogo1 from "../assets/Images/PaymentLogo/Dana Logo.svg";
import PaymentLogo2 from "../assets/Images/PaymentLogo/Indomaret Logo.svg";
import PaymentLogo3 from "../assets/Images/PaymentLogo/Alfamart Logo.svg";
import PaymentLogo4 from "../assets/Images/PaymentLogo/Bank BCA.svg";
import PaymentLogo5 from "../assets/Images/PaymentLogo/Bank BRI.svg";
import PaymentLogo6 from "../assets/Images/PaymentLogo/Bank BNI.svg";
import PaymentLogo7 from "../assets/Images/PaymentLogo/Bank Mandiri.svg";
import { useState } from "react";

interface PaymentProps {
  open: boolean;
  onClose: () => void;
  setSelectMethod: (method: PaymentMethod) => void;
}

interface PaymentOption {
  title: string;
  methods: PaymentMethod[];
}

interface PaymentMethod {
  name: string;
  logo: string;
}

const paymentOptions: PaymentOption[] = [
  {
    title: "Virtual Wallet",
    methods: [{ name: "DANA", logo: PaymentLogo1 }],
  },
  {
    title: "Mini Market",
    methods: [
      { name: "Indomaret", logo: PaymentLogo2 },
      { name: "Alfamart", logo: PaymentLogo3 },
    ],
  },
  {
    title: "Transfer Bank",
    methods: [
      { name: "Bank BCA", logo: PaymentLogo4 },
      { name: "Bank BRI", logo: PaymentLogo5 },
      { name: "Bank BNI", logo: PaymentLogo6 },
      { name: "Bank Mandiri", logo: PaymentLogo7 },
    ],
  },
];

const PaymentMethodDialog: React.FC<PaymentProps> = ({
  open,
  onClose,
  setSelectMethod,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        Select Payment
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ px: 3 }}>
        <Stack spacing={3}>
          {paymentOptions.map((option, index) => (
            <Box key={index}>
              <Typography variant="h6" color="text.secondary" mb={1}>
                {option.title}
              </Typography>

              <Stack spacing={1}>
                {option.methods.map((method, idx) => (
                  <>
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        px: 2,
                        py: "5px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "#DADFE8",
                        },
                      }}
                      onClick={() => {
                        setSelectMethod(method);
                        setSelectedMethod(method);
                      }}
                    >
                      <img src={method.logo} alt={method.name} width="40px" />
                      <Typography variant="body1" color="text.primary" flex={1}>
                        {method.name}
                      </Typography>
                      {selectedMethod?.name === method.name && <Check />}
                    </Box>
                    {idx !== option.methods.length - 1 && <Divider />}
                  </>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentMethodDialog;
