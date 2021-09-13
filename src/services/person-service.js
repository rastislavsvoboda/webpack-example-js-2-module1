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

  async function updatePerson(person) {
    const url = `${API_URL}/person/${person.id}`;
    try {
      let result = await axios.put(url, person);
      return result;
    } catch (error) {
      return error.response;
    }
  }

  return {
    getPersons,
    getPerson,
    updatePerson,
  };
}
