import Layout from "./core/Layout";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Layout />
    </NextUIProvider>
  );
}

export default App;
