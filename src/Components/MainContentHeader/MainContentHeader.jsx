import Search from "../Search/Search";
import Select from "../Select/Select";
import "./MainContentHeader.css";

function MainContentHeader(props) {
  return (
    <div className="main-content-header">
      <Search func={props.func} />
      <Select breeds={props.breeds} func={props.func} />
    </div>
  );
}

export default MainContentHeader;
