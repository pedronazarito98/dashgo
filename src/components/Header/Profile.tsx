import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Nazarito</Text>
          <Text color="gray.300" fontSize="small">
            email
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pedro Nazarito"
        src="https://github.com/pedronazarito98.png"
      />
    </Flex>
  );
}
