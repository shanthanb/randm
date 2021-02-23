import axios from 'axios';
import React, { useEffect, useRef, useState,  } from 'react';
import './App.css'
import CharacterCard from './components/CharacterCard/CharacterCard';

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [display, setDisplay] = useState(true);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
 
  const wrapperRef = useRef(null);
  //Load data from api
    useEffect(() =>{
      axios
      .get("https://rickandmortyapi.com/api/character/?name=rick&page=1")
      .then(response =>{
        console.log(response.data.results);
        setCharacterList(response.data.results);
        setOptions(response.data.results);
      })
      .catch(err =>{
        console.error(err);
      });
    }, []);  
  

// Display or hide List with mousedown event
    useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(true);
    }
  };

  //update input with search
    const updatePokeDex = poke => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div  className="character-lis">
      <h1>Rick and Morty Search</h1>
      <div className="input-box">
      <input type="text" name="" placeholder="Search for contact" className="input"
       onClick={() => setDisplay(!display)}
       value={search}
       onChange={event => setSearch(event.target.value)}
      />
      <i class="fas fa-search search-icon" aria-hidden="true"></i>
      </div>
      {
        display || options &&  
        characterList.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1).map((chars,id) => {
          return <CharacterCard onClick={() => updatePokeDex(chars.name)} chars={chars} key={id} tabIndex="0"></CharacterCard>
        })
      }
    </div>
  );
};

export default App;