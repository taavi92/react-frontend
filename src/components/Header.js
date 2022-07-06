import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function Header()
{
    return(
        <header>


            <Navbar bg="dark" variant="dark">


                    <Nav className="me-auto">
                        <Link to="/login">Login</Link>

                        <Link to="/add"> Add database</Link>
                        <Link to="/find">Find Anagrams</Link>
                    </Nav>

            </Navbar>


        </header>
    )
}

export default Header;