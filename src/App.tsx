import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList} from "./components/PersonList"
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";

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
      <Greet name="firyal" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to surabaya</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      ></Button>
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
