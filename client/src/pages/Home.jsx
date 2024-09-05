import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { fetchWithToken } from "../components/fetch/fetchWithToken";

const Home = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWithToken("/Users");
      setUsers(data.users);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Sveiki, {user.name}</h2>
      <ul>
        {users.map((item) => (
          <li key={item.email}>
            email: {item.email} name: {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
