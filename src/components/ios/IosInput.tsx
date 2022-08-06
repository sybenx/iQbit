import React from "react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { useColorModeValue } from "@chakra-ui/react";

export interface InputProps {
  label: string;
  labelWidth: number;
  first?: boolean;
  last?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const IosInput = (props: InputProps) => {
  const bgColor = useColorModeValue("white", "black");

  return (
    <InputGroup
      size="lg"
      _invalid={{ backgroundColor: "red.200" }}
      bgColor={bgColor}
    >
      <InputLeftAddon
        color="gray.500"
        fontSize="md"
        justifyContent="end"
        width={props.labelWidth}
        background="transparent"
        borderBottom={!props.last ? "none" : undefined}
        borderBottomRadius={props.first ? 0 : undefined}
        borderTopRadius={props.last ? 0 : undefined}
        marginTop={!props.first ? -0.5 : undefined}
      >
        {props.label}
      </InputLeftAddon>
      <Input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        _focus={{ outline: "none" }}
        fontSize="md"
        borderLeft="none"
        borderBottomRadius={props.first ? 0 : undefined}
        borderTopRadius={props.last ? 0 : undefined}
        marginTop={!props.first ? -0.5 : undefined}
        _invalid={{}}
        _groupInvalid={{ backgroundColor: "red.200" }}
      />
    </InputGroup>
  );
};

export default IosInput;
