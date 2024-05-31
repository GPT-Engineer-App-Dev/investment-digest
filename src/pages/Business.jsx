import { Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Business = () => (
  <Box p={4} bg="#fff1e5">
    <Text fontSize="2xl" mb={4}>Business News</Text>
    <Text>Content for Business News goes here.</Text>
    <Link as={NavLink} to="/" mt={4} display="block" color="teal.500">Back to Home</Link>
  </Box>
);

export default Business;