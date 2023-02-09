import { Button, Box, Center } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Navbar = ({ setUser }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    alert("Are you sure?");
    axios.delete("https://cointab-922w.onrender.com/data").then((res) => {
      console.log(res);
      setUser && setUser([]);
      navigate("/");
    });
  };
  
  const handleGet = async () => {
   
      try {
        await axios.get("https://cointab-922w.onrender.com/data").then((res) => {
          console.log(res);
          setUser && setUser(res.data);
        });
      } catch (error) {
        alert("There was an error");
      }
    
  };
  return (
    <Center m="auto" border="1px solid" p="1rem">
      <Link to="/">
        <Button ml="1rem" onClick={() => handleGet()}>
          Fetch Users
        </Button>
      </Link>
      <Button ml="1rem" onClick={() => handleDelete()}>
        Delete Users
      </Button>
      <Link to="/user">
        <Button ml="1rem">User Details</Button>
      </Link>
    </Center>
  );
};

export default Navbar;
