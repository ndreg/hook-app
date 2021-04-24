import {useEffect} from 'react'
import { useForm } from '../../Hooks/useForm';
import './simpleform.css';

export const FormWithCustomHook = () => {

  const [{name, email, password}, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, email, password})
  }

  useEffect(()=> {
    console.log('Email changed')
  },[email]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hola, {name}</h1>
      <hr/>
      <div className="form-group">
        <input type="text"
        name="name"
        className="form-control"
        placeholder="Name"
        autoComplete="off"
        value={name}
        onChange={setForm}>
        </input>
      </div>

      <div className="form-group">
        <input type="email"
        name="email"
        className="form-control"
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={setForm}>
        </input>
      </div>

      <div className="form-group">
        <input type="password"
        name="password"
        className="form-control"
        placeholder="password"
        autoComplete="off"
        value={password}
        onChange={setForm}>
        </input>
      </div>

      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  )
}
