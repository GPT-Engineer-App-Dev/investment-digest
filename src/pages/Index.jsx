import { Box, Container, Flex, Heading, Image, Text, VStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>Brief description of the news article goes here.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>Brief description of the news article goes here.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Trending</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h4" size="md">Trending Article 1</Heading>
              <Text mt={2}>Brief description of the trending article.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h4" size="md">Trending Article 2</Heading>
              <Text mt={2}>Brief description of the trending article.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Link as={NavLink} to="/about" mt={4} display="block" color="teal.500">About Us</Link>
    </Container>
  );
};

export default Index;