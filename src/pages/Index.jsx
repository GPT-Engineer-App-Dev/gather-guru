import { Container, Text, VStack, Heading, Box, Button, SimpleGrid, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Event Management Platform
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Organize and manage your events effortlessly.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
          <Box boxShadow="md" p={5} borderRadius="md" textAlign="center">
            <Image src="/images/create-event.png" alt="Create Event" boxSize="150px" mx="auto" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Create Events
            </Heading>
            <Text>Create and customize your events with ease.</Text>
          </Box>
          <Box boxShadow="md" p={5} borderRadius="md" textAlign="center">
            <Image src="/images/manage-event.png" alt="Manage Event" boxSize="150px" mx="auto" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Manage Events
            </Heading>
            <Text>Keep track of all your events in one place.</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;