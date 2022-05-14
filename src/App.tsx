import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const personName = {
    first: "Firyal",
    last: "Salwa",
  };

  return (
    <div className="App">
      <Greet name="firyal" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
