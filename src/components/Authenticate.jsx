import {useState, useEffect} from 'react'

const Authenticate = ({ token }) => {
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)
    const [userData, setUserData] = useState(null)

    const handleClick = async() => {
        console.log("handleclick")
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setSuccessMessage(data.message)
            setUserData(data.data)
            console.log(data)
        } catch(error) {
            setError(error.message)
        }
    }

    return (
        <>
          <h2>Authenticate</h2>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
          <button onClick={handleClick}>Authenticate Token</button>
          {userData && <><p>Username: {userData.username}</p><p>IAT: {userData.iat}</p></>}
        </>
    )
};

export default Authenticate;