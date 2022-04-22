import { Box, chakra, Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/react";
import * as React from "react";

const Span = chakra("span");

export const DashboardPage: React.FC = () => {
  return (
    <>
      <Box>
        <Heading size="lg" fontWeight="normal">
          This month's&nbsp;
          <Span fontWeight="bold" color="purple.500">
            analysis
          </Span>
        </Heading>
      </Box>
      <Grid mt="10" templateColumns="repeat(3, 1fr)" gap="8">
        <GridItem>
          <Box h="full" px="8" py="6" bg="purple.50" rounded="lg">
            <HStack w="full" justifyContent="space-between" alignItems="center">
              <Text fontSize="sm" color="gray.500">
                Total Active Observations
              </Text>
              <Text fontSize="sm" color="gray.500">
                Last Week
              </Text>
            </HStack>
            <HStack mt="3">
              <Heading color="gray.800" size="lg">
                235
              </Heading>
            </HStack>
            <HStack mt="10">
              <Text fontSize="sm" color="gray.500">
                <Span fontWeight="bold" color="purple.500">
                  25%
                </Span>
                &nbsp; Improvement
              </Text>
            </HStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box h="full" px="8" py="6" bg="orange.50" rounded="lg">
            <HStack w="full" justifyContent="space-between" alignItems="center">
              <Text fontSize="sm" color="gray.500">
                Total Active Participation
              </Text>
              <Text fontSize="sm" color="gray.500">
                Last Week
              </Text>
            </HStack>
            <HStack mt="3">
              <Heading color="gray.800" size="lg">
                125
              </Heading>
            </HStack>
            <HStack mt="10">
              <Text fontSize="sm" color="gray.500">
                <Span fontWeight="bold" color="purple.500">
                  12%
                </Span>
                &nbsp; Improvement
              </Text>
            </HStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box h="full" px="8" py="6" bg="green.50" rounded="lg">
            <HStack w="full" justifyContent="space-between" alignItems="center">
              <Text fontSize="sm" color="gray.500">
                Corridor Miles Flown
              </Text>
            </HStack>
            <HStack alignItems="baseline" spacing="2" mt="3">
              <Heading color="gray.800" size="lg">
                2205
              </Heading>
              <Text color="gray.500">miles</Text>
            </HStack>
            <HStack mt="10">
              <Text fontSize="sm" color="gray.500">
                <Span fontWeight="bold" color="purple.500">
                  4.3%
                </Span>
                &nbsp; Improvement
              </Text>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};
