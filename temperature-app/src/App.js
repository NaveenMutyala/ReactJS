import React,{useState} from "react";
import Input from "./Input";

function App() {
  const [colors,setColors] = useState({
    "red":0,
    "blue":0,
    "green":0
  });
  const [style,setStyle] = useState({
    backgroundColor : "rgb(0,0,0)"
  });

  function handleChange(name,val){
    // console.log("hey");
    // console.log(val);
    name = name.toLowerCase();
    setColors((prev)=>{
      return {
        ...prev,
        [name]:val
      }
    });
    console.log(colors);

    setStyle({
      backgroundColor: `rgb(${colors.red},${colors.green},${colors.blue})`
    }) ;


  }

  return (
    <div className="App" style={style} >
      <Input name="Red" handleChange={handleChange} />
      <Input name="Blue" handleChange={handleChange}  />
      <Input name="Green" handleChange={handleChange}  />
    </div>
  );
}

export default App;
