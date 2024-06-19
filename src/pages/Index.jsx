import { Box, Container, Flex, Image, VStack, Text, SimpleGrid } from "@chakra-ui/react";

const thumbnails = [
  { src: "/thumbnails/sample1.jpg", title: "Sample Video 1" },
  { src: "/thumbnails/sample2.jpg", title: "Sample Video 2" },
  { src: "/thumbnails/sample3.jpg", title: "Sample Video 3" },
  { src: "/thumbnails/sample4.jpg", title: "Sample Video 4" },
  { src: "/thumbnails/sample5.jpg", title: "Sample Video 5" },
  { src: "/thumbnails/sample6.jpg", title: "Sample Video 6" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Image src="/new-path/youtube-logo.svg" alt="YouTube Logo" boxSize="50px" />
      </Flex>
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to YouTube</Text>
        <Text>Explore videos, channels, and more.</Text>
      </VStack>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={10}>
        {thumbnails.map((thumbnail, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={thumbnail.src} alt={thumbnail.title} />
            <Box p={4}>
              <Text fontWeight="bold">{thumbnail.title}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;