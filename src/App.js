import Header from "./components/Header";
import { DataContext } from "./context/UserContext";

function App() {
  return (
    <div >
      <DataContext.Provider>
        <Header />
      </DataContext.Provider>
    </div>
  );
}
export default App;
