import React, { useEffect, useState } from 'react';


function User() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
   


    const heading = <h2>User Example</h2>;

    if (loading) {
        return <> {heading}
            <h3>...Loading</h3>
        </>
    }
    //if error 
    if (error) {
        return <> {heading}
            <h3>Error occurred</h3>
        </>
    }
    return (
        <>
            {heading}
            <h4>Name: {user.name}</h4>
            <h4>Phone: {user.phone}</h4>
        </>
    )
}

export default User