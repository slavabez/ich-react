import "./App.css";
import CarList from "./CarList";
import ImageComponent from "./ImageComponent";
import ListsComponent from "./ListsComponent";
import ParagraphsComponent from "./ParagraphsComponent";
import ShowCalc from "./ShowCalc";
import VideoComponent from "./VideoComponent";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <h1>My react app!</h1>
      <Content title="Заголовок 1" paragraph="Первый параграф" imageSrc="https://placehold.co/200" />
      <Content title="Заголовок 2" paragraph="Второй параграф" imageSrc="https://placehold.co/300" />
      <Content title={3} paragraph="Третий параграф" imageSrc="https://placehold.co/100" />
      <ShowCalc />
      <CarList />
      <ParagraphsComponent />
      <ListsComponent />
      <ImageComponent />
      <VideoComponent />
    </div>
  );
}

export default App;
