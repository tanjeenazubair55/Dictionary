import React from "react";
import './Header.css'
 import {MenuItem,createTheme,ThemeProvider,TextField} from '@material-ui/core'
 import Data from './Data'
const Header = ({setCategory,category,word,setWord,darkMode}) => {
  const darkTheme = createTheme({
  palette: { 
    primary:{
        main:darkMode?'#fff':'#000'
    },
    type: darkMode? 'dark':'light',
  },
});
  const handleChange = (Language) =>{
    setCategory(Language)
    setWord("")
  }

  return <div className="header">
    <span className="title">
       {word ? word:'Word Hunt' }
    </span>
    <div className="inputs">
    <ThemeProvider theme={darkTheme}>
    <TextField className='search' label='Search a Word'
     value={word}
     onChange={(e)=>setWord(e.target.value)}
     />
    <TextField
          className='select'
          select
          label='Language'
          value={category}
          onChange={(e)=>handleChange(e.target.value)}
        >  
        {Data.map((item)=>(

            <MenuItem key={item.label} value={item.label}> {item.value} </MenuItem>
        ))}
        </TextField>
    </ThemeProvider>



    </div>
  </div>;
};

export default Header;
