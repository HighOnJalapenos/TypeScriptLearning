import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title={"Hello World!"} />
      <Section title={"New Title"}>This is my Section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["☕️ Coffee", "🌮 Tacos", "👨🏽‍💻 Code"]}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
