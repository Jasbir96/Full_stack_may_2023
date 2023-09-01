import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
function Routing() {
    return (
        <div style={{
            textAlign: 'center',
            marginLeft: "50vw"
        }}>
            <h2>Routing Example</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/home" >Home Page </Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/listing">Listing</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home/" element={<Home></Home>}></Route>
                <Route path="/about/*" element={<About></About>}> </Route>
                <Route path="/listing" element={<Listing></Listing>}></Route>
                <Route path="/abc" element={<Navigate to="/home"></Navigate>}></Route>
                {/* template routes -> dynamic routes  */}
                <Route path="/users/:id" element={<Users isAdmin={true}></Users>}> </Route>
                <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
                {/* path -> /* -. wild card  */}
            </Routes>
        </div>
        /***
         * 1. Link -> we can work  done 
         * 3. template route / Dynamic Route  done
         * 4. redirecting  routes
         * 2. Nested Routes  
         * 5. Custom Routes 
         *          private Routes 
         *          conditional 
         * */
    )
}

function About() {
    return (
        <>
            <h2>About Page</h2>
            <Routes>
                <Route path="company" element={<Company />}> </Route>
                <Route path="founders" element={<Founder></Founder>}> </Route>
            </Routes>
        </>
    )
}
function Company() {
    return <h4> We are  a good firm</h4>
}
function Founder() {
    return <h4> We are Nice People </h4>
}

function Users(props) {
    // console.log(props.isAdmin);
    let params = useParams();
    let [user, setUser] = useState(null);
    console.log("46", params)
    // https://fakestoreapi.com/users/2
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`)
            const userData = await resp.json();
            console.log(userData);
            setUser(userData);
        })()
    }, [])
    return <>
        {user == null ? <h3>...loading</h3> : <>
            <h4>User Name: {user.username}</h4>
            <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
            <h4> Phone: {user.phone}</h4>
        </>}
    </>

}

function Home() {
    return <h3>I am Home Page</h3>
}




function Listing() {
    return <h3>I am Listing Page</h3>
}

function PageNotFound() {
    return <h3>Page Not found</h3>;
}

export default Routing