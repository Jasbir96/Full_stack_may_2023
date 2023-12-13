import React from 'react'
import useAuth from '../hooks/useAuth'

function User() {
    const { user } = useAuth();
    console.log(user);
    return (
        <h1>User</h1>
    )
}

export default User