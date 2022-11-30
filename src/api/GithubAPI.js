import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});

const getGithubUsers = async (text) => {
  return axiosClient.get(`/search/users?q=${text}`);
}

const getGithubUser = async (loginId) => {
  return axiosClient.get(`/users/${loginId}`);
}

export { getGithubUsers, getGithubUser };