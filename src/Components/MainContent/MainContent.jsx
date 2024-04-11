import { useEffect, useState } from "react";
import MainContentHeader from "../MainContentHeader/MainContentHeader";
import "./MainContent.css";

function MainContent(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.cats);
  });

  return (
    <div className="main-content">
      <MainContentHeader breeds={props.breeds} func={props.func} />
      <div className="main-content-elements">
        {data
          ? data.map((el) => (
              <div>
                <div className="main-content-element-img">
                  <img height={300} src={el.url} />
                </div>
                <div className="main-content-element">
                  {/* <p>{el.breeds.map((el) => el.description)}</p> */}
                  {/* <a
                    className="main-content-element-wiki"
                    href={el.breeds.map((el) => el.wikipedia_url)}
                    target="
                  _blank"
                  >
                    more...
                  </a> */}
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default MainContent;
