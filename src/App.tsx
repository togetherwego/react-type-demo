import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const personName = {
    first: "Firyal",
    last: "Salwa",
  };

  const nameList = [
    {
      first : 'Firyal',
      last: 'Fauzi'
    },
    {
      first : 'Mikasa',
      last : 'Ackerman'
    },
    {
      first: 'Eren',
      last: 'Yeager'
    }
  ]

  return (
    <div className="App">
      <Greet name="firyal" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
