import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Layout from "./components/Layout"

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;