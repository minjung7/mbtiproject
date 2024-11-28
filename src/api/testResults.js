import axios from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}/testResults`;

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  console.log(resultData);
  const response = await axios.post(API_URL, resultData);
  console.log("Response:", response);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  return response.data;
};
