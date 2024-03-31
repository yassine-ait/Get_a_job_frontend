import React, {useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { Button,Image, Badge, Card} from 'react-bootstrap'
import axios from 'axios'
import {LinkContainer} from 'react-router-bootstrap'


function Offrescreen({match}) {
  const [offre,setOffre]=useState([])

  useEffect(()=>{
      async function fetchOffre(){
          const{data}=await axios.get(`/api/offres/${match.params.id}`)
          setOffre(data)
      }
      fetchOffre()
  })

 
  
    return (
        <div >

                  
          
          
            <Card>
              
  <Card.Header>{offre.name} <div style={{textAlign: "right"}}><span style={{color: "red"}}>Entreprise: ({offre.namecampany})</span></div></Card.Header>
  <Card.Body>
    <div style={{textAlign: "right"}} >
    <Image src={offre.image} rounded />
    </div>
 
    <Card.Title style={{textAlign: "center"}}>Profil recherché</Card.Title>
    <Badge variant="success"><i class="fas fa-stream"></i> catégorie </Badge><br></br>
    <Card.Text>{offre.category}</Card.Text>
     <Badge variant="danger"><i class="fas fa-clock"></i> Temps de travail</Badge><br></br>
     <Card.Text>{offre.timeType}</Card.Text>
     <Badge variant="primary"> Déscription du poste</Badge><br></br>
    <Card.Text>
     {offre.description}
    </Card.Text>
   
    <Badge variant="primary"><i class="fas fa-business-time"></i> Niveau d'expérience</Badge><br></br>
    <Card.Text>{offre.experience} </Card.Text>
    <Badge variant="success"><i class="fas fa-badge-check"></i> Niveau d'études</Badge><br></br>
    <Card.Text>{offre.diplome}</Card.Text>
    <Badge variant="warning"><i class="fas fa-badge-dollar"></i> Salaire</Badge><br></br>
    <Card.Text>{offre.salaire} DHs</Card.Text>
    <Badge variant="danger"><i class="fad fa-money-check-edit"></i> Type de contrat</Badge><br></br>
     <Card.Text>{offre.contrat}</Card.Text>
     <div style={{textAlign: "right",color:"grey"}}>
     <Card.Text>Publié le: {offre.date}</Card.Text>
     </div>
     
     <LinkContainer to={`/addpostulescreen/${offre.id}/${offre.namecampany}`}>
     <Button variant="outline-success" size="md" block>  <i class="fas fa-badge-check"></i> Postuler a cette offre.  <i class="fas fa-badge-check"></i></Button>

     </LinkContainer>
  </Card.Body>
</Card>
<hr>
</hr>

        </div>
    )
}

export default Offrescreen
