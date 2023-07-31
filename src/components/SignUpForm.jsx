import {useState, useEffect} from 'react'

const SignUpForm = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
            })
            })
            const data = await response.json()
            setToken(data.token)
        } catch(err) {
            setError(err.message)
        }

    }
    return (
        <>
          <h2>Sign Up</h2>
          {
            error && <p>{error}</p>
          }
          <form onSubmit={handleSubmit}>
            <label>
              Username:{" "}
              <input 
                placeholder='Enter Username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
              Password:{" "}
              <input 
                placeholder='Enter Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button>Submit</button>
          </form>
        </>
    )
};

export default SignUpForm