import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Card.css"

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack borderTopLeftRadius="10px" borderTopRightRadius="10px" bgColor="white">
        <Image borderRadius="10px" w="100%" src={imageSrc} alt={title}/>
        <VStack padding="10px" alignItems="flex-start">
          <Heading color="black" fontSize="1rem">{title}</Heading>
          <Text color="rgba(0 0 0 / 50%)">{description}</Text>
          <HStack color="black">
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;
