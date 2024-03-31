import React from 'react'
import {Image, Badge, Card, Accordion,Col,} from 'react-bootstrap'

import '../index.css'

import {Link} from 'react-router-dom'



function Offre({offre}) {
    return (
        <div>
            


            <Accordion defaultActiveKey="0" style={{ backgroundColor: '#e1e5ea' }}>
  <Card style={{ backgroundColor: '#e1e5ea' }} >
 
    <Accordion.Collapse eventKey="0">
      <Card.Body>

      <Card style={{ width: '67rem' }}>
  
  <Card.Body>
  <Col xs={6} md={4}>
      <Image src={offre.image} rounded />
      
      <label style={{ fontSize: '12px', color:'black' }}> {offre.date}</label>
    
    </Col>
  <Link to={`/offre/${offre.id}`}>
    
    <Card.Title>{offre.name}
    </Card.Title>
    </Link>
    
    <h6>
      
      <Badge variant="warning"><i class="fas fa-stream"></i> {offre.category} </Badge><label>.   .</label>
     <Badge variant="danger"><i class="fas fa-clock"></i> {offre.timeType}</Badge><label>.   .</label>
     <Badge variant="primary"><i class="fas fa-location-arrow"></i> {offre.region}</Badge>
     
     </h6>
    
     
    
    <Card.Text  style={{ fontSize: '12px', color:'grey' }}>
    {offre.description}
                   
    </Card.Text>
  </Card.Body>
</Card>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
 
</Accordion>

        </div>
    )
}

export default Offre
