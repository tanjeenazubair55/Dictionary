import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { alpha, Container, styled, Switch } from "@material-ui/core";
import Header from "./Components/Header";
import Definitions from "./Components/Definitions";
import { pink } from "@material-ui/core/colors";

function App() {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );
        setData(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    dictionaryApi();
  }, [word, category]);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: darkMode ? "#282c34" : "#fff",
        color: darkMode ? "white" : "black",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{darkMode ? "Dark Mode" : "Light mode"} </span>
          <PinkSwitch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          darkMode={darkMode}
        />
        {data && (
          <Definitions
            word={word}
            category={category}
            data={data}
            darkMode={darkMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
