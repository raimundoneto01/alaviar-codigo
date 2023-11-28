import React from 'react'
import './Input.css'
const formFields = [
  {
    label: 'nome',
    id: 'nome',
    type: 'text',
  },
  {
    label: 'email',
    id: 'email',
    type: 'email',
  },
  {
    label: 'senha',
    id: 'senha',
    type: 'password',
  },
  {
    label: 'nome',
    id: 'nome',
    type: 'text',
  },
  {
    label: 'cep',
    id: 'cep',
    type: 'number',
  },
  {
    label: 'rua',
    id: 'rua',
    type: 'text',
  },
  {
    label: 'numero',
    id: 'numero',
    type: 'number',
  },
  {
    label: 'bairro',
    id: 'bairro',
    type: 'text',
  },
  {
    label: 'cidade',
    id: 'cidade',
    type: 'text',
  },
  {
    label: 'estado',
    id: 'estado',
    type: 'text',
  },
]

const Input = () => {
  // const fiet = 'https://ranekapi.origamid.dev/json/api/usuario';
  const [ form, setForm ] = React.useState(
    formFields.reduce(( acc, field)=>{
        return{
          ...acc,
          [field.id]: '',
        }
    }, {})
  )
  const [ confirma, setConfirma ] = React.useState(null)

  const handleChange=({target})=>{
    const {id, value} = target;
      setForm({...form, [id]: value})
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
      fetch('https://ranekapi.origamid.dev/json/api/usuario',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(form)
      }).then((response)=> {
        setConfirma(response)
        console.log(response);
      })
  }
  
  return (
    <div className='container'>
      <h2>Cadastro de Dados</h2>
          <form className='formContainer' onSubmit={handleSubmit}> 
              { formFields.map(({label, id, type})=>(
                  <div className='formInput' key={id}>
                      <label htmlFor={label}>{label}:</label>
                      <input type={type} id={id} value={form[id]}  onChange={handleChange}/> 
                  </div>
              ))}
              { confirma && confirma.ok && <p>Dados Enviados</p>}
              <button>Enviar</button>
          </form>
    </div>
  )
}

export default Input