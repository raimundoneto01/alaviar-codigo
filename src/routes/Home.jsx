import React from 'react'

const formFields = [
  {
    id: 'nome',
    label: 'nome',
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


const Home = () => {

  const [ form, setForm ] = React.useState(
    formFields.reduce((acc, field)=>{
      return{
        ...acc,
        [field.id]: '',
      }
    }, {})
      
  )

  const meuChange=({target})=>{
    const { id, value } = target;
    setForm({...form, [target.id]: target.value})
  }

  const meuSubmite=(event)=>{
    event.preventDefault();
    console.log(form);
  }
 
  return (
    <div>
      <h1>home</h1>
      <form onSubmit={meuSubmite}>

          { formFields.map(({id, label, type})=>(
              <div key={id}>
                  <label> {label}
                    <input type={type} id={id} value={form[id]}  onChange={meuChange}/>
                  </label> <br />
              </div>
          ))}
        
        <button>Envio</button>
      </form>
    </div>
  )
}

export default Home