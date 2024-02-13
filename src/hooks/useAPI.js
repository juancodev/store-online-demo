import {
  useEffect,
  useState
} from 'react';

import axios from 'axios';

const createUser = (API, data) => {
  const [createdUser, setCreatedUser] = useState([]);

  useEffect(async () => {
    const fetchAPI = await axios.post(API, data, {
      headers: {
        "Content-Type": "aplication/json"
      }
    })
    setCreatedUser(fetchAPI.data);
  }, []);

  return createdUser;
}

const getUsers = (API) => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const fetchAPI = await axios(API)
    setUsers(fetchAPI.data);
  }, []);

  return users;
}

export const useAPI = {
  createUser,
  getUsers
}