import { Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const World = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>World News</Text>
    <Text>Content for World News goes here.</Text>
    <Link as={NavLink} to="/" mt={4} display="block" color="teal.500">Back to Home</Link>
  </Box>
);

export default World;