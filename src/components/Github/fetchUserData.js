import axios from "axios";

export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const userDetails = response.data;

    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const repositories = reposResponse.data;

    return { userDetails, repositories };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
