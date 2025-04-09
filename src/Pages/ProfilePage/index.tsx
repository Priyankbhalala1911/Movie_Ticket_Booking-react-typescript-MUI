import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  IconButton,
  Skeleton,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../../Store/Slices/AuthSlice";
import PopUpBox from "../../components/PopupBox";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/getUser";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 0,
    gcTime: 0,
  });

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (data) {
      setName(data.user.name);
      setEmail(data.user.email);
      setProfileImage(data.user.profile_image);
    }
  }, [data]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    setIsImageUploading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_BASE_URL}/profile`,
        formData,
        { withCredentials: true }
      );
      setProfileImage(res.data.imageurl);
    } catch (err) {
      console.error("Image upload failed", err);
    } finally {
      setIsImageUploading(false);
    }
  };

  const handleUpdateData = async () => {
    setIsUpdating(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_API_BASE_URL}/updateUser`,
        { name, email },
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Update failed", err);
    } finally {
      setIsUpdating(false);
      setIsEditing(false);
    }
  };

  const handleLogOut = async () => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/logout`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      dispatch(logoutUser());
      navigate("/account/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      {isLoading ? (
        <Card
          sx={{
            width: "100%",
            maxWidth: 480,
            borderRadius: 4,
            border: "2px solid #1A2C50",
            boxShadow: "0px 8px 24px #1A2C50",
            p: 3,
          }}
        >
          <Stack spacing={3}>
            <Box display="flex" justifyContent="center">
              <Skeleton variant="circular" width={100} height={100} />
            </Box>

            <Skeleton
              variant="text"
              width="60%"
              height={30}
              sx={{ mx: "auto" }}
            />
            <Skeleton
              variant="text"
              width="80%"
              height={20}
              sx={{ mx: "auto" }}
            />

            <Skeleton variant="rectangular" width="100%" height={40} />

            <Divider />
            <Skeleton variant="rectangular" width="100%" height={36} />
          </Stack>
        </Card>
      ) : (
        <Card
          sx={{
            width: "100%",
            maxWidth: 480,
            borderRadius: 4,
            border: "2px solid #1A2C50",
            boxShadow: "0px 8px 24px #1A2C50",
            backgroundColor: "transparent",
          }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="center"
              position="relative"
              mb={3}
            >
              {isImageUploading ? (
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    bgcolor: "#d1d9e6",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress size={24} />
                </Box>
              ) : (
                <Avatar
                  src={profileImage}
                  sx={{ width: 100, height: 100, border: "3px solid #1A2C50" }}
                />
              )}
              <IconButton
                component="label"
                disabled={isImageUploading}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: "calc(50% - 50px)",
                  bgcolor: "#1A2C50",
                  color: "white",
                  border: "2px solid white",
                  "&:hover": { bgcolor: "#162440" },
                }}
              >
                <PhotoCameraIcon fontSize="small" />
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </IconButton>
            </Box>

            <Stack spacing={2}>
              {isEditing ? (
                <>
                  <TextField
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    onClick={handleUpdateData}
                    fullWidth
                    disabled={isUpdating}
                    sx={{
                      bgcolor: "#1A2C50",
                      "&:hover": { bgcolor: "#162440" },
                      fontWeight: 600,
                      position: "relative",
                    }}
                  >
                    {isUpdating ? (
                      <CircularProgress size={24} sx={{ color: "white" }} />
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </>
              ) : (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6" fontWeight="bold" color="primary">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {email}
                    </Typography>
                  </Box>
                  <IconButton
                    onClick={() => setIsEditing(true)}
                    sx={{ color: "#1A2C50" }}
                  >
                    <EditIcon />
                  </IconButton>
                </Box>
              )}
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Box textAlign="center" mb={3}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#1A2C50" }}
              >
                🎟️ No Bookings Yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You haven’t booked any tickets. Start exploring now!
              </Typography>
            </Box>

            <Button
              variant="outlined"
              onClick={() => setOpen(true)}
              fullWidth
              startIcon={<LogoutIcon />}
              sx={{
                color: "#1A2C50",
                borderColor: "#1A2C50",
                "&:hover": {
                  bgcolor: "#e6eaf3",
                  borderColor: "#162440",
                },
                fontWeight: 600,
              }}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      )}

      {open && (
        <PopUpBox
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Logout"
          content="Are you sure you want to log out?"
          action1="Cancel"
          action2="Logout"
          click_action1={handleLogOut}
        />
      )}
    </Box>
  );
};

export default ProfilePage;
