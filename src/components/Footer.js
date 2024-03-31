import React from 'react'
import { Button, Image,  Card} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../index.css'
import Logo from '../images/logowhite.png'

function Footer() {
    return (
        <div>
            
 <Card className="text-center">
            <div className="cardheader">
            <Card.Header>Getjob.ma</Card.Header>
            </div>

    <div className="cardbody">

  
        <Card.Body>

            <Card.Title style={{  color:'orange' }}>OFFRES D´EMPLOI PAR MÉTIER</Card.Title>
            <Card.Text style={{ fontSize: '12px', color:'white' }}>
    
                      Achats Maroc
                      Commercial, vente Maroc
                      Gestion, comptabilité, finance Maroc
                      Informatique, nouvelles technologies Maroc
                      Juridique Maroc
                      Management, direction générale Maroc
                      Marketing, communication Maroc
                      Métiers de la santé et du social Maroc
                      Métiers des services Maroc
                      Métiers du BTP Maroc
                      Production, maintenance, qualité Maroc
                      R&D, gestion de projets Maroc
                      RH, formation Maroc
                      Secretariat, assistanat Maroc
                      Tourisme, hôtellerie, restauration Maroc
                      Transport, logistique Maroc
             </Card.Text>
     
                      

    
        </Card.Body>
  
            <Card.Footer className="text-muted">Projet réaliser par Ait moussa yassine</Card.Footer>
    </div>
 </Card>


 </div>
    )
}

export default Footer
