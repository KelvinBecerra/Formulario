import React from 'react'

function Formulario() {
  return (
    <>
        <div className='flex items-center justify-center h-screen'>
            <form className='flex flex-col gap-4 max-w-lg' action="">
        <label htmlFor="name">Nombre</label>
        <input name='name' className='border-4 border-black-100' type="text" />
        
        <label htmlFor="apellido">Apellido</label>
        <input name='apellido' className='border-4 border-black-100' type="text" />

        <label htmlFor="edad">Edad</label>
        <input name='edad' className='border-4 border-black-100' type="number" />

        <label htmlFor="telefono">Telefono</label>
        <input name='telefono' className='border-4 border-black-100' type="number" />

        <label  htmlFor="corr">Correo</label>
        <input name='corr' className='border-4 border-black-100' type="text" />

        <label  htmlFor="pass">Contraseña</label>
        <input name='pass' className='border-4 border-black-100' type="password" />

        <label  htmlFor="conf">Confirmar Contraseña</label>  
        <input name='conf' className='border-4 border-black-100' type="password" />
    <button className='bg-green-500'>Enviar</button>
      </form></div>
      
    </>
  )
}

export default Formulario
