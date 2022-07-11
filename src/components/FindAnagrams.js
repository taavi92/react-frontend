

import React,{useState} from "react";



const Findanagrams = () => {

    const [word, setWord] = useState("")
    const [anagram, setAnagram] = useState("")
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const givenWord = {word};

        fetch('https://anagrammm-backend.herokuapp.com/api/find', {
            method: 'POST',
            headers: { "Accept": "application/json" ,
                "Content-Type": "application/json" },
            body: JSON.stringify(givenWord)
        }).then(function (response){
            response.json().then(function (resp){
                console.log(resp)
                setIsLoading(false);



                if (resp['msg']==='NO matches'){
                    setAnagram('No matches');

                }else {
                    let anagramList = resp;

                    let anagramStr = anagramList.join("  ;  ")

                    setAnagram(anagramStr);


                }
            })


        })

    }


    return(
        <div>
            <h1>Enter word</h1>
            <br />
            <input type="text" type="text" value={word} onChange={(e)=>setWord(e.target.value)}
                   className="form-control" placeholder="word"/>
            <br />
            <button  onClick={handleSubmit} className="btn btn-primary">Find anagram</button>

            <br />
            <br />
            <br />
            <h1>Anagrams:</h1>
            <br />
            {isLoading && <h2>Loading...</h2>}

            <h1>{anagram}</h1>


            <br />


        </div>
    )

}


export default Findanagrams;

