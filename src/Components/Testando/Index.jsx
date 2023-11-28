import React from 'react'
const formFields = [
  {
    id: 'nome',
    label: 'nome',
    type: 'text',
  },
  {
    id: 'sobrenome',
    label: 'sobrenome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'email',
    type: 'email',
  },
  {
    id: 'bairro',
    label: 'bairro',
    type: 'text',
  },
  {
    id: 'senha',
    label: 'senha',
    type: 'password',
  },
]

const index = () => {
   // const fiet = 'https://ranekapi.origamid.dev/json/api/usuario';
  const [ form, setForm ] = React.useState(
    formFields.reduce((acc, field)=>{
      return{
        ...acc,
        [field.id]: '',
      }
    }, {})
  )
  const [ envio, setEnvio ] = React.useState(null)
  

   const meuChange=({target})=>{
   const { id, value } = target;
   setForm({...form, [id]: value});
   }
   const meuSubmite=(event)=>{
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(form)
    }).then((response) => {
      setEnvio(response);
    })
   }
   
  return (
    <form onSubmit={meuSubmite}>
       { formFields.map(({id, label, type})=>(
          <div key={id}>
             <label> {label} <br />
              <input type={type} id={id} value={form[id]} onChange={meuChange} placeholder={label}/>
             </label>
          </div>
       ))}
       { envio && envio.ok && <p>Cadastro Feito</p>}
       <button>Envio</button>
    </form>
  )
}

export default index