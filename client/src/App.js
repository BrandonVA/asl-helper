import "./App.css";
import Home from "./pages/Home";
import ThemeProvider from "react-bootstrap/ThemeProvider";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
