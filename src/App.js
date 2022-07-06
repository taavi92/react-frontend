
import './App.css';

import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FindAnagrams from "./components/FindAnagrams";
import AddWordbase from "./components/AddWordbase";

import Login from "./components/Login";




function App() {

  return (

    <div className="App">



        <h1>ANAGRAM</h1>

        <BrowserRouter>
            <Header />

            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/add" element={<AddWordbase />} />
                <Route exact path="/find" element={<FindAnagrams />} />
            </Routes>

        </BrowserRouter>


    </div>
  );
}

export default App;
