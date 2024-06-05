import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Welcome to the ultimate event management platform. Plan, organize, and manage your events seamlessly.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/event-management.jpg" alt="Event Management" />
        </Box>
        <Button colorScheme="teal" size="lg" mt={6}>Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;