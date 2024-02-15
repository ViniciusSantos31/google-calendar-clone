import axios from "axios";

// Create an instance of Axios with the base URL of your JSON server
export const api = axios.create({
	baseURL: "http://localhost:3000", // Replace with your JSON server URL
});
