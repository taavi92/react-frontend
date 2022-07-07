import React,{useState} from "react";
import { useNavigate } from "react-router-dom";






const Login = () => {
    let history = useNavigate();
    const [username, setName] = useState("")
    const [password, setPassword] = useState("")
    const [loginState, setloginState] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { username, password };


        fetch('https://anagrammm-backend.herokuapp.com/api/login', {
            method: 'POST',
            headers: { "Accept": "application/json" ,
                "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(function (response){
            response.json().then(function (resp){

                if (resp['status']==='success'){
                    console.log(resp['msg'])

                    history("/add")


                }else {
                    setloginState("Wrong username or password")


                }
            })


        })
    }


    return(
    <div className="col-sm-6 offset-sm-3">
        <h1>Login Page</h1>
        <input type="text" value={username} onChange={(e)=>setName(e.target.value)}
            className="form-control" placeholder="username"/>
        <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
               className="form-control" placeholder="password"/>
        <br />

        <button onClick={handleSubmit} className="btn btn-primary">Log in</button>
        <br />
        <h1>{loginState}</h1>


    </div>
    )
}

export default Login;
