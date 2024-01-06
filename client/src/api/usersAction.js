import axios from "axios";

const ENDPOINT = import.meta.env.VITE_ENDPOINT_URL;

export const signUp = async (data) => {
  const { username, email, password, confirmPassword, phone } = data;

  try {
    // fetch Api
    const result = await axios.post(`${ENDPOINT}/users/signupemployee`, {
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

export const signIn = async ({ username, password }) => {
  try {
    // fetch Api
    const result = await axios.post(`${ENDPOINT}/users/signin`, {
      username,
      password,
    });

    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
