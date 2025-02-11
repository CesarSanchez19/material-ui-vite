import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

export default function ListaVerduras() {
   const verduras = [
      { id: '1', nombre: 'Lechuga', descripcion: 'Verdura 100% mexicana...', precio: 23, cantidad: 12 },
      { id: '2', nombre: 'Tomate', descripcion: 'Verdura 100% mexicana...', precio: 25, cantidad: 17 },
      { id: '3', nombre: 'Papa', descripcion: 'Verdura 100% mexicana...', precio: 17, cantidad: 8 },
      { id: '4', nombre: 'Zanahoria', descripcion: 'Verdura 100% mexicana...', precio: 22, cantidad: 4 },
      { id: '5', nombre: 'Cebolla', descripcion: 'Verdura 100% mexicana...', precio: 30, cantidad: 10 },
      { id: '6', nombre: 'Espinaca', descripcion: 'Verdura 100% mexicana...', precio: 36, cantidad: 3 },
   ]

   // Estado para la verdura seleccionada
   const [verduraSeleccionada, setVerduraSeleccionada] = useState('')

   const handleChange = (event) => {
      setVerduraSeleccionada(event.target.value)
   }

   return (
      <div>
         <h2>Tabla de Verduras</h2>

         <table border="1">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Acción</th>
               </tr>
            </thead>
            <tbody>
               {verduras.map((data) => (
                  <tr key={data.id}>
                     <td>{data.id}</td>
                     <td>{data.nombre}</td>
                     <td>{data.descripcion}</td>
                     <td>${data.precio}</td>
                     <td>
                        <Button
                           onClick={() => alert(`Stock disponible: ${data.cantidad}`)}
                           variant="contained"
                           color="primary"
                        >
                           Ver stock
                        </Button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         <Divider />

         <h2>Seleccionar una Verdura</h2>
         <FormControl fullWidth>
            <InputLabel>Verdura</InputLabel>
            <Select value={verduraSeleccionada} onChange={handleChange}>
               {verduras.map((data) => (
                  <MenuItem key={data.id} value={data.id}>
                     {data.nombre}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   )
}
