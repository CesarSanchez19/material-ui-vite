import React, {useState} from 'react'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

const ListaProductos = () => {

    const [home, setHome] = useState(false);

    const changestate = () => {
        setHome(!home);
    }
    console.log('Tu switch esta: ',home);

  return (
    <div>
      <h1>Lista de productos</h1>
      <Switch
        value={home}
        checked={home}
        onChange={changestate}
        inputProps={{ "aria-label": '' }}
        
      />

        {/* Cambia el color y tamaño de texto*/}
      {
        <Typography variant={ home ? "h1" : "h3"} color={home ? "success" : "error"}>{home ? "Encendido" : "Apagado"}</Typography>
      }
    </div>
  )
}

export default ListaProductos
