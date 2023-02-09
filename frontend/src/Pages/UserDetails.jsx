import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  Button,
  Center,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Stack,
  Select,
  Input,
  Box,
} from "@chakra-ui/react";
const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  useEffect(() => {
    axios
      .get(`https://cointab-922w.onrender.com/user?page=${page}&gender=${gender}`)
      .then((res) => {
        setUserDetails(res.data);
        console.log(res.data);
      });
  }, [page, gender]);
  const handleReduce = () => {
    setPage((p) => {
      return p - 1;
    });
  };
  const handleAdd = () => {
    setPage((p) => {
      return p + 1;
    });
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };
  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent="space-between" width="90%">
        <Select onChange={(e) => handleChange(e)} width="30%">
          <option value="">Filter by Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Box>
          <button disabled={page == 1} onClick={handleReduce}>
            <Text fontSize="1.5rem">{"<  "}Prev</Text>
          </button>
          <Button>
            <Text fontSize="1.5rem">{page}</Text>
          </Button>
          <button disabled={page == 5} onClick={handleAdd}>
            <Text fontSize="1.5rem">Next{"  >"}</Text>
          </button>
        </Box>
      </Box>
      <TableContainer width="80%" m="auto">
        <Table variant="striped" colorScheme="teal">
          <Thead backgroundColor="black">
            <Tr color="whiteAlpha.100">
              <Th>NAME</Th>
              <Th>GENDER</Th>
              <Th>Email</Th>
              <Th>COUNTRY</Th>
              <Th>PHONE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userDetails &&
              userDetails?.map((el) => (
                <Tr>
                  <Td>
                    {el.name.first} {el.name.last}
                  </Td>
                  <Td>{el.gender}</Td>
                  <Td>{el.email}</Td>
                  <Td>{el.location.country}</Td>
                  <Td>{el.phone}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserDetails;
