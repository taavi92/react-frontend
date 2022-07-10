
import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FindAnagrams from "./components/FindAnagrams";
import AddWordbase from "./components/AddWordbase";
import React, { useState } from "react";



function App() {

    const [errorMessages, setErrorMessages] = useState({});
    let [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const database = [
        {
            username: "anagram1",
            password: "anagram1"
        }

    ];

    const handleSubmit = (event) => {

        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );



    if (isSubmitted===false){
        return(
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                        {renderErrorMessage("uname")}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                        {renderErrorMessage("pass")}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )


    }else

  return (

    <div className="App">

        <h1>ANAGRAM</h1>

        <BrowserRouter>
            <Header />

            <Routes>

                <Route exact path="/add" element={<AddWordbase />} />
                <Route exact path="/find" element={<FindAnagrams />} />
            </Routes>

        </BrowserRouter>


    </div>
  );
}

export default App;
