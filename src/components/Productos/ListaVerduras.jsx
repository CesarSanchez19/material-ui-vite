import React from 'react'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

export default function ListaVerduras() {
   const verduras = [
      { id: '1', nombre: 'lechuga', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 23, cantidad: 12 },
      { id: '2', nombre: 'Tomate', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 25, cantidad: 17 },
      { id: '3', nombre: 'Papa', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 17, cantidad: 8 },
      { id: '4', nombre: 'Zanahoria', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 22, cantidad: 4 },
      { id: '5', nombre: 'Cebolla', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 30, cantidad: 10 },
      { id: '6', nombre: 'Espinaca', descripcion: 'Verdura 100% mexicana para tus alimentos...', precio: 36, cantidad: 3 },
   ]

   console.log('Objeto verdura:', verduras)
   console.log('Total de datos en el array:', verduras.length)

   return (
      <div>
         <h2>Lista de Verduras</h2>
         
         {verduras.length > 0 ? (
            <ul>
               {verduras.map((data, index) => (
                  <li key={index}>
                     {data.id} | {data.nombre} | {data.descripcion} | ${data.precio} 
                     <Button 
                        onClick={() => alert(`Stock disponible: ${data.cantidad}`)} 
                        variant="contained" 
                        color="primary"
                     >
                        Ver stock
                     </Button>
                  </li>
               ))}
            </ul>
         ) : (
            <p>No hay datos almacenados</p>
         )}

         <Divider style={{ margin: '20px 0' }} />

         <h2>Tabla de Verduras</h2>

         {verduras.length > 0 ? (
            <table border="1" cellPadding="8" cellSpacing="0">
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
                  {verduras.map((data, index) => (
                     <tr key={index}>
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
         ) : (
            <p>No hay datos almacenados</p>
         )}
      </div>
   )
}
