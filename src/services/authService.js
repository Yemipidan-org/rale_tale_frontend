import API from "./apiClient";

// Register user
export const registerUser = async (userData) => {
  const response = await API.post("/users/register/", userData);
  return response.data;
};

// Login user
export const loginUser = async (credentials) => {
  const response = await API.post("/users/login/", credentials);
  return response.data;
};

// Get user profile
export const getProfile = async () => {
  const response = await API.get("/users/profile/");
  return response.data;
};

// Search Property
export const searchProperty = async (credentials) => {
  const response = await API.post("/property/search/", credentials);
  return response.data;
};