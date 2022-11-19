import React from "react";
import './Definitions.css'
function Definitions({ word, data, category ,darkMode}) {
  return (
    <div className="meanings">
      {data[0] && word && category==='en' && (
        <audio 
        src={data[0].phonetics[0] && data[0].phonetics[0].audio }
        style={{backgroundColor:'#fff', borderRadius:10}}
        controls
        >
          Your browser is not supprting this
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle"> "Search a word to get its meaning"</span>
      ) : (
        data.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => 
            <div className="singleMean" style={{backgroundColor: darkMode?'#3b5360':'white', color:darkMode?'white': 'black' }}>
            <b>Definition: </b>
            {def.definition}
            <hr style={{backgroundColor:'black',width:'100%'}} />
            {def.example && (
                <span>
                    <b>Example:</b>
                    {def.example}
                </span>
            )}
             {def.synonyms && (
                <span>
                    <b>Synonyms:</b>
                    {def.synonyms.map((syno)=> `${syno}, `)}
                </span>                
            )}
            </div>
            )
          )
        )
      )}
    </div>
  );
}

export default Definitions;
