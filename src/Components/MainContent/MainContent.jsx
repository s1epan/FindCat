import MainContentHeader from "../MainContentHeader/MainContentHeader";
import "./MainContent.css";

function MainContent(props) {
  return (
    <div className="main-content">
      <MainContentHeader breeds={props.breeds} />
    </div>
  );
}

export default MainContent;
