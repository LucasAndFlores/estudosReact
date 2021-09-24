import React, {useState, useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {

  const [ person, setPerson ] = useState()
  const [peopleApi, setPeopleApi] = useState([])



  useEffect(() => {
    axios.get(`https://swapi.dev/api/${person}/`).then((response) => {
      console.log(response.data.results)
      setPeopleApi(response.data.results)
    }).catch((error) => {
      console.log(error)
    })
  }, [person])

  return (
    <div className="App">
      <button onClick={() => {setPerson("people")}}> Buscar pessoas na API star wars </button>
      <button onClick={() => {setPerson("vehicles")}}> Buscar carros na API star wars </button>
      <button onClick={() => {setPerson("planets")}}> Buscar planetas na API star wars </button>
      <div> {peopleApi.map(item => {
          return <ul> {JSON.stringify(item.name)}</ul>
      })} </div>
    </div>
  );
}

export default App;
