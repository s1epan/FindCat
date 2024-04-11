import Search from "../Search/Search";
import Select from "../Select/Select";
import "./MainContentHeader.css";

function MainContentHeader(props) {
  return (
    <div className="main-content-header">
      <Search />
      <Select breeds={props.breeds} />
    </div>
  );
}

export default MainContentHeader;
