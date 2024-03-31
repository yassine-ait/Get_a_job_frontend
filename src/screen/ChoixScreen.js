import React, { useState, useEffect } from 'react'
import { Button, Image, Badge, Row, Col, Container, Form, Table,Carousel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from '../images/header.jpg'
import axios from 'axios'


function ChoixScreen({ match }) {

    const [recruters,setRecruters]=useState([])

    useEffect(()=>{
        async function fetchRecruters(){
            const{data}=await axios.get('/api/recruters')
            setRecruters(data)
        }
        fetchRecruters();
    },[])

    const [recruter, setRecruter] = useState([])

    useEffect(() => {
        async function fetchRecruter() {
            const { data } = await axios.get(`/api/recruters/${match.params.namecampany}`)
            setRecruter(data)
        }
        fetchRecruter()
    },[])

    const [postules, setPostules] = useState([])

    useEffect(() => {
        async function fetchPostules() {
            const { data } = await axios.get('/api/postulesdisplay')
            setPostules(data)
        }
        fetchPostules();
    },[])

    const [offres, setOffres] = useState([])
    console.log(offres)
    
        async function fetchOffres() {
            const { data } = await axios.get('/api/offres/')
            setOffres(data)
        }
        useEffect(() => {
        fetchOffres();
    },[]);

    function deleteoffre(id){
        console.log(id);
        axios.delete(`/api/offres/${id}`, {
            headers: { Authorization: 'Token token' },        
        })        
        alert(`suppression de l'offre numero: ${id} avec succée`)   
    }


    const [search, setSearch] = useState("");

    


    return (
        <div>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Header}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>{`${match.params.namecampany}`}</h2>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
            <hr></hr>
            
            <h4><i class="fa fa-building" aria-hidden="true"></i>  {`${match.params.namecampany}`} (Recruteur)</h4>
            <hr></hr>

            <Container className="mt-5">
                <Row>


                    <Col lg={5} md={4} sm={8} className="text-center mt-7 p-4" >

                        {/* <img  width="300px" src={addoffre} alt=""/> */}
                        <h1><i class="fa fa-plus-circle" aria-hidden="true"></i></h1>
                        <br></br>

                        <LinkContainer to={`/offres/add/${match.params.namecampany}`}>
                            <Button variant="warning" type="submit">
                                Ajouter une offre
                            </Button>
                        </LinkContainer>
                        
                    </Col>

                    
                <Col lg={5} md={4} sm={8} className="text-center mt-7 p-4" >
               Profil

               <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Recruteur</th>
      <th>Email</th>
      <th>Téléphone</th>
     
      
      
    </tr>
  </thead>
  <tbody>

               {recruters.filter(item =>{
      
     if(item.namecampany==match.params.namecampany){
        if(search==""){
            return item
        }      
      }      
  })
  .map((recruter)=>(
    <tr>
<td>{recruter.id}</td>
<td>{recruter.nom} {recruter.prenom}</td>
<td>{recruter.email}</td>
<td style={{fontStyle:"italic"}}>{recruter.telephone}</td>
       
    </tr>
    ))}
   
  </tbody>

</Table>

               
                <br></br>
 
                
   



                </Col>

                </Row>
                <hr></hr>
                <Button variant="success" type="submit">
                <i class="fa fa-list" aria-hidden="true"></i> Mes offres
                </Button>
                <br></br>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Poste</th>
      <th>Region</th>
      <th>Experience</th>
      <th>Diplome</th>
      <th>Catégorie</th>
      <th>Action</th>

      
      
    </tr>
  </thead>
  <tbody>

               {offres.filter(item =>{
      
     if(item.namecampany==match.params.namecampany){
        
            return item
        
       
      }
      
  })
  .map((offre)=>(
    <tr>
   

<td>{offre.id}</td>
<td>{offre.name}</td>
<td>{offre.region}</td>
<td>{offre.experience}</td>
<td>{offre.diplome}</td>
<td style={{color:"blue"}}>{offre.category}</td>
<td>
    
            <Button className="btn-block"
              type="button" variant="danger"
               onClick={()=>deleteoffre(offre.id)}>Supprimer
            </Button>


    
</td>

        
    </tr>
    ))}
   
  </tbody>
</Table>
                <hr></hr>


                <div>
                    {/* <h4><i>Chercher par poste.</i></h4>  */}

                    <Form.Group as={Col} controlId="idoffre">

                        {/* <Form.Control as="select" name="poste" defaultValue="Sélectionnez un poste..." onClick={(e)=>{
           setSearch(e.target.value);
       }}>
        <option>Choisire...</option>
        {offres.map((offre)=>(
        <option>{offre.name}</option>
        ))}
 
      </Form.Control> */}

                    </Form.Group>

                    <br></br>

                </div>
                <br></br>

                <Button variant="success" type="submit">
                <i class="fa fa-list" aria-hidden="true"></i> Liste des postules 
                </Button>

                <br></br>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><i class="fa fa-user" aria-hidden="true"></i>Candidat</th>
                            <th><i class="fa fa-envelope" aria-hidden="true"></i> Email</th>
                            <th><i class="fa fa-thumbs-up" aria-hidden="true"></i> Motivation</th>
                            <th><i class="fa fa-briefcase" aria-hidden="true"></i> Poste</th>
                            <th><i class="fa fa-clipboard" aria-hidden="true"></i> Cv</th>

                        </tr>
                    </thead>
                    <tbody>

                        {postules.filter(item => {


                            if (item.namecampany == `${match.params.namecampany}`) {
                                if (search == "") {
                                    return item
                                }
                                else if (item.idoffre.toLowerCase().includes(search.toLowerCase())) {
                                    return item
                                }
                            }

                        })
                            .map((postule) => (
                                <tr>

                                    <td>{postule.id}</td>
                                    <td>{postule.nom} {postule.prenom}</td>
                                    <td>{postule.email}</td>
                                    <td style={{ fontStyle: "italic" }}>" {postule.motivation} "</td>
                                    <td style={{ color: "green" }}>{postule.idoffre}</td>
                                    <td>
                                        <Button type="submit"
                                         href={postule.cvfile}
                                          download>
                                              <i class="fa fa-download" aria-hidden="true"></i>Télecharger
                                       </Button>
                                    </td>

                                </tr>
                            ))}

                    </tbody>
                </Table>


            </Container>








        </div>
    )
}

export default ChoixScreen
