import React from 'react'
import {Table} from 'react-bootstrap'

import '../index.css'

import {Link} from 'react-router-dom'

function Postule({postule}) {
    return (
        <div>
            
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nom</th>
      <th>Prénom</th>
      <th>email</th>
      <th>motivation</th>
      <th>idoffre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{postule.id}</td>
      <td>{postule.nom}</td>
      <td>{postule.prenom}</td>
      <td>{postule.email}</td>
      <td>{postule.motivation}</td>
      <td>{postule.idoffre}</td>
    </tr>
   
  </tbody>
</Table>
        </div>
    )
}

export default Postule
