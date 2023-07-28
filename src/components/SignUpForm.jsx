import {useState, useEffect} from 'react'

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    return (
        <>
          <h2>Sign Up</h2>
          <form>
            <label>Username</label>
              <input 
                placeholder='Enter Username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                />
            <label>Password</label>
              <input 
                placeholder='Enter Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
            <button>Submit</button>
          </form>
        </>
    )
};

export default SignUpForm