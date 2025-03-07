import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { AppleStore, GooglePlay, Logo } from "../../assets";

interface Sublink {
  linkTitle: string;
  link: string;
}

interface FooterLink {
  title: string;
  sublink: Sublink[];
}

const FooterSection: FooterLink[] = [
  {
    title: "Company",
    sublink: [
      {
        linkTitle: "Contact Us",
        link: "/",
      },
      {
        linkTitle: "About",
        link: "/",
      },
      {
        linkTitle: "Partner",
        link: "/",
      },
    ],
  },
  {
    title: "About",
    sublink: [
      {
        linkTitle: "TIX ID News",
        link: "/news",
      },
      {
        linkTitle: "Cinema",
        link: "/",
      },
      {
        linkTitle: "My Ticket",
        link: "/my-ticket",
      },
      {
        linkTitle: "Payment",
        link: "/",
      },
      {
        linkTitle: "Instalment",
        link: "/",
      },
    ],
  },
  {
    title: "Support",
    sublink: [
      {
        linkTitle: "Help Center",
        link: "/",
      },
      {
        linkTitle: "Privacy Policy",
        link: "/",
      },
      {
        linkTitle: "FAQ",
        link: "/",
      },
      {
        linkTitle: "Terms and Conditions",
        link: "/",
      },
      {
        linkTitle: "Covid-19 Updates",
        link: "/",
      },
    ],
  },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Divider orientation="horizontal" />
      <Box
        sx={{
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
          py: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          justifyContent: "flex-start",
          gap: { lg: 0, md: 4, sm: 6, xs: 8 },
        }}
      >
        <Container sx={{ px: { xs: 0 }, lineHeight: 0 }}>
          <img
            src={Logo}
            width="130px"
            height="36px"
            style={{ objectFit: "cover" }}
          />
        </Container>
        <Container
          sx={{
            px: { xs: 0 },
            gridColumn: "span 2",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))",
          }}
        >
          {FooterSection.map((footer, index) => (
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
              key={index}
            >
              <Typography variant="h6" color="primary">
                {footer.title}
              </Typography>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "18px" }}
              >
                {footer.sublink.map((footerLink, index) => (
                  <Link
                    to={footerLink.link}
                    key={index}
                    style={{
                      textDecoration: "none",
                    }}
                    onClick={() => navigate(`${footerLink.link}`)}
                  >
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {footerLink.linkTitle}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "35px",
            px: { xs: 0, lg: "24px" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Typography variant="h6" color="primary">
              Follow Social Media
            </Typography>
            <Box sx={{ display: "flex", gap: "24px" }}>
              <IconButton sx={{ padding: 0 }} color="primary">
                <Instagram />
              </IconButton>
              <IconButton sx={{ padding: 0 }} color="primary">
                <Twitter />
              </IconButton>
              <IconButton sx={{ padding: 0 }} color="primary">
                <Facebook />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Typography variant="h6" color="primary">
              Download the TIX ID Application
            </Typography>
            <Box sx={{ display: "flex", gap: "24px" }}>
              <IconButton sx={{ padding: 0 }} color="primary">
                <img src={GooglePlay} alt="Google Play" />
              </IconButton>
              <IconButton sx={{ padding: 0 }} color="primary">
                <img src={AppleStore} alt="App store" />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Typography color="primary" variant="body2">
              2021 TIX ID - PT.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
