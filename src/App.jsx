import Header from "./components/Header.jsx";
import "../src/index.css";
import Content from "./components/Content.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <div className="flex flex-wrap justify-center">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
