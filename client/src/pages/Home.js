import { useState } from "react";
import IconContainer from "../components/IconContainer/IconContainer";
import InputContainer from "../components/InputContainer/InputContainer";
import NavHeading from "../components/NavHeading/NavHeading";

function Home() {
  const [inputData, setInputData] = useState();

  const handleInputChange = (e) => {
    let inputText = e.target.value.toLowerCase();

    setInputData(inputText);
    console.log(inputText);
  };
  console.log(inputData);
  return (
    <>
      <NavHeading />
      <InputContainer handleInputChange={handleInputChange} />
      <IconContainer />
    </>
  );
}

export default Home;
