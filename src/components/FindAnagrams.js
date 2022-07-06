

import React,{useState} from "react";



const Findanagrams = () => {

    const [word, setWord] = useState("")
    const [anagram, setAnagram] = useState("")
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const givenWord = {word};
        console.log(givenWord);

        fetch('http://localhost:8000/api/find', {
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

//
// function FindAnagrams()
//
// {let anagrams = ['Taavi', "Taavi"]
//
//     return(
//         <div>
//             <h1>Enter Word</h1>
//             <input type="text"
//                    className="form-control" placeholder="Enter word"/>
//             <br />
//             <h1>{anagrams}</h1>
//
//         </div>
//     )
// }

// export default FindAnagrams;



// import React,{useState} from "react";

//
// const AddWords = () => {
//
//     const [dataBaseLink, setDataBaseLink] = useState("")
//
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const info = { dataBaseLink};
//         console.log(info);
//
//         fetch('http://localhost:8000/api/add', {
//             method: 'POST',
//             headers: { "Accept": "application/json" ,
//                 "Content-Type": "application/json" },
//             body: JSON.stringify(info)
//         }).then(function (response){
//             response.json().then(function (resp){
//
//                 if (resp['status']==='success'){
//                     console.log("Tuli SUCCESS")
//
//
//                 }else {
//                     console.log("TULI ELSE")
//
//                 }
//             })
//
//
//         })
//     }
//
//     return(
//         <div>
//             <h1>Enter wordbase link</h1>
//             <br />
//             <input type="text" type="text" value={dataBaseLink} onChange={(e)=>setDataBaseLink(e.target.value)}
//                    className="form-control" placeholder="wordbase link"/>
//             <br />
//             <button  onClick={handleSubmit} className="btn btn-primary">Add database</button>
//         </div>
//     )
// }
//
//
// export default AddWords;