import MainContent from "../MainContent/MainContent";
import SideContent from "../SideContent/SideContent";
import "./Content.css";

function Content(props) {
  return (
    <div className="content">
      <MainContent breeds={props.breeds} />
      <SideContent />
    </div>
  );
}

export default Content;
