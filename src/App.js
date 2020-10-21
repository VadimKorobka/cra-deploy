import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
const initialList = [1, 2, 3, 4, 5];

function App() {
  const [list, setList] = React.useState(initialList);
  const [isShowList, setIsShowList] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="App">
      <button
        onClick={() => {
          setIsShowList(!isShowList);
        }}
      >
        isShowList: {isShowList ? "true" : "false"}
      </button>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {isShowList && <List items={list} className="1234" />}
    </div>
  );
}

export default App;
