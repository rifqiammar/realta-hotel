import axios from "axios";

const endpoint = import.meta.env.VITE_ENDPOINT_URL;

export const signUp = async (data) => {
  const { username, email, password, confirmPassword, phone } = data;

  try {
    // fetch Api
    const result = await axios.post(`${endpoint}/users/signupemployee`, {
      username,
      email,
      password,
      confirmPassword,
      phone,
    });

    return result.data.status;
  } catch (error) {
    return error.response.data.message;
  }
};
