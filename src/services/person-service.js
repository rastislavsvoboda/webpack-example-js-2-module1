import axios from "axios";

export default function usePersonService() {
  const API_URL = "http://localhost:3213";

  async function getPersons() {
    const url = `${API_URL}/person/`;
    let result = await axios.get(url);
    return result.data;
  }

  async function getPerson(id) {
    const url = `${API_URL}/person/${id}`;
    let result = await axios.get(url);
    return result.data;
  }

  return {
    getPersons,
    getPerson,
  };
}
