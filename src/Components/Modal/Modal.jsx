import React from 'react'

const Modal = () => {
  const [ modal, setModal ] = React.useState(false)

  
  return (
    <div>
      <button onClick={()=>setModal(true)}>Abrir Modal</button>
      { modal && (
        <div>
          <h1>tudo isso que eu escrevir aparecerar na minha tela !!, caso contrário nada aparece. </h1>
          <p>E esse é meu botão de feachar o Modal novamente.</p>
          <button onClick={()=> setModal(false)}>Fechar Modal</button>
        </div>
      )}
    </div>
  )
}

export default Modal