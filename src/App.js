import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import { DataProvider } from "./context/UserContext";
import { router } from "./router/Router";

function App() {
  return (
    <div>
      <DataProvider>
        <Header />
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  );
}
export default App;
