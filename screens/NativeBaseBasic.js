import React from "react";
import { Center, Heading, NativeBaseProvider } from "native-base";

const NativeBaseBasic = () => {
    return (
      <NativeBaseProvider>
        <Center flex={1}>
          <Heading>Native Base</Heading>
        </Center>
      </NativeBaseProvider>
    );
  };
  
  export default NativeBaseBasic;