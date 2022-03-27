import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [ users, setUsers ] = useState();
    

  return (
    <article>
        <h2>Users list</h2>
        {users?.length?(
            <ul>
                {users.map((user, i) => {
                    <li key={id}>{user?.username}</li>
                })}
            </ul>
        ) : <p>No users to display</p>
    }
    </article>
  )
}

export default Login