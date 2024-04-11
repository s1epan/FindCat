import Content from "../Content/Content";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import SideContent from "../SideContent/SideContent";
import "./Container.css";

function Container(props) {
  return (
    <div className="container">
      <Header />
      <Content breeds={props.breeds} />
    </div>
  );
}

export default Container;
