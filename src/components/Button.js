import React from "react";
import { Button } from "@chakra-ui/react";

const Btn = ({ text, onClick }) => {
  return (
    <Button
      bg="#ADBE99"
      py="5"
      px="10"
      fontWeight={"medium"}
      color={"black"}
      borderRadius="none"
      borderColor="black"
      borderWidth="medium"
      _hover={{
        borderLeftWidth: "thick",
        borderTopWidth: "thick",
        borderColor: "#222",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default Btn;
