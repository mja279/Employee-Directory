import axios from "axios";

const API = {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");

  }
}

export default API;

