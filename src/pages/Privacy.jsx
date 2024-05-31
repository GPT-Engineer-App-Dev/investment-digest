import { Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Privacy = () => (
  <Box p={4} bg="#fff1e5">
    <Text fontSize="2xl" mb={4}>Privacy Policy</Text>
    <Text>Content for Privacy Policy goes here.</Text>
    <Link as={NavLink} to="/" mt={4} display="block" color="teal.500">Back to Home</Link>
  </Box>
);

export default Privacy;