import React,{useState} from "react";


const AddWords = () => {

    const [dataBaseLink, setDataBaseLink] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("")



    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const enteredLink = { dataBaseLink};


        fetch('http://localhost:8000/api/add', {
            method: 'POST',
            headers: { "Accept": "application/json" ,
                "Content-Type": "application/json" },
            body: JSON.stringify(enteredLink)
        }).then(function (response){
            response.json().then(function (resp){

                setIsLoading(false);

                if (resp['status']==='success'){
                    setStatus("Database added")


                }else {
                    setStatus("Failed")

                }
            })


        })
    }

    return(
        <div>
            <h1>Enter wordbase link</h1>
            <br />
            <input type="text" type="text" value={dataBaseLink} onChange={(e)=>setDataBaseLink(e.target.value)}
                   className="form-control" placeholder="wordbase link"/>
            <br />
            <button  onClick={handleSubmit} className="btn btn-primary">Add database</button>
            {isLoading && <h2>Loading...up to 10 minutes</h2>}

            <br />
            <h1>{status}</h1>


        </div>
    )
}


export default AddWords;