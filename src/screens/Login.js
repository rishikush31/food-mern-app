import React from 'react'
  import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function Login() {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let navigate=useNavigate()
  const handleSubmit = async (e) => {
      e.preventDefault();
    const response = await fetch("/api/login", {
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
          },
    body: JSON.stringify({password: credentials.password,email: credentials.email })
      })
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert('enter valid credentials')
    }
    if(json.success)
    {
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/')
    }
  }
  const onChange = (event) => {
      setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }
  return (
    <div>
     <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to='/createuser' className='m-3 btn-danger'>New User?</Link>
                </form>
            </div>
    </div>
  )
}
