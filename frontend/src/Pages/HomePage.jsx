import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Stack, Image, Text, Grid, GridItem } from "@chakra-ui/react";
const HomePage = () => {
  const [user, setUser] = useState([]);
  return (
    <>
      <Navbar setUser={setUser} />
      <Stack mt="1rem">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {user &&
            user?.map((el) => (
              <GridItem margin="auto">
                <Stack
                  border="1px solid"
                  key={el.cell}
                  justifyContent="center"
                  padding="1rem"
                  borderRadius="0.5rem"
                >
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={el.picture.medium}
                    alt="Dan Abramov"
                  />
                  <Text>
                    {el.name.title} {el.name.first} {el.name.last}
                  </Text>
                  <Text>{el.gender}</Text>
                </Stack>
              </GridItem>
            ))}
        </Grid>
      </Stack>
    </>
  );
};

export default HomePage;
