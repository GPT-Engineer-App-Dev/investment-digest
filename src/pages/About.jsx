import { Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const About = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>About Us</Text>
    <Text>Content for About Us goes here.</Text>
    <Link as={NavLink} to="/" mt={4} display="block" color="teal.500">Back to Home</Link>
  </Box>
);

export default About;