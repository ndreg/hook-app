import {useEffect, useState} from 'react'
import { Message } from './Message';
import './simpleform.css';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })

  const {name, email} = formState;

  useEffect(()=> {
    console.log('Hey!');
  },[]);


  useEffect(()=> {
    console.log('Name changed')
  },[name]);


  useEffect(()=> {
    console.log('Email changed')
  },[email]);

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    })
  } 

  return (
    <div>
      <h1>useEffect</h1>
      <hr/>
      <div className="form-group">
        <input type="text"
        name="name"
        className="form-control"
        placeholder="Name"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}>
        </input>
      </div>

      <div className="form-group">
        <input type="emai;"
        name="email"
        className="form-control"
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}>
        </input>
      </div>

    {(name === "123") && <Message />}
    </div>

  )
}
