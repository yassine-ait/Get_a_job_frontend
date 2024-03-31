import React, {useState,useEffect} from 'react'
import { Button, Image,Table,Form,Col} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'

import Postule from '../components/Postule'
import Offre from '../components/Offre'
import ChoixScreen from './ChoixScreen'
import axios from 'axios'

function PostuleScreen({match}) {

    const [recruter,setRecruter]=useState([])

    useEffect(()=>{
        async function fetchRecruter(){
            const{data}=await axios.get(`/api/recruters/${match.params.id}`)
            setRecruter(data)
        }
        fetchRecruter()
    })

    const [postules,setPostules]=useState([])

    useEffect(()=>{
        async function fetchPostules(){
            const{data}=await axios.get('/api/postulesdisplay')
            setPostules(data)
        }
        fetchPostules();
    },)

    const [offres,setOffres]=useState([])

    useEffect(()=>{
        async function fetchOffres(){
            const{data}=await axios.get('/api/offres')
            setOffres(data)
        }
        fetchOffres();
    },)

    const[search,setSearch]=useState("");

  

    return (
        <div>
            <div>
            <h4><i>Chercher par poste.</i></h4> 
            
            <Form.Group as={Col} controlId="idoffre">
      
      <Form.Control as="select" name="poste" defaultValue="Sélectionnez un poste..." onClick={(e)=>{
           setSearch(e.target.value);
       }}>
        <option>Choisire...</option>
        {offres.map((offre)=>(
        <option>{offre.name}</option>
        ))}
 
      </Form.Control>
     
    </Form.Group>  
      
               <br></br>
        
            </div>
            <br></br>
            
            <Button variant="success"   type="submit">
                Liste des postules  
            </Button>

            <br></br>
           

           <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Candidat</th>
      <th>Email</th>
      <th>Motivation</th>
      <th>Poste</th>
      <th>Cv</th>
      
    </tr>
  </thead>
  <tbody>
  {postules.filter(item =>{
      console.log(recruter)
     if(item.namecampany=="ENI"){
        if(search==""){
            return item
        }
        else if(item.idoffre.toLowerCase().includes(search.toLowerCase())){
            return item
         }
      }
      
  })
  .map((postule)=>(
    <tr>
   

<td>{postule.id}</td>
<td>{postule.nom} {postule.prenom}</td>
<td>{postule.email}</td>
<td style={{fontStyle:"italic"}}>" {postule.motivation} "</td>
<td style={{color:"green"}}>{postule.idoffre}</td>
<td>  
    <Button type="submit" href={postule.cvfile}  download>Télecharger</Button>
  </td>
        
    </tr>
    ))}
   
  </tbody>
</Table>
           
            
        </div>
    )
}

export default PostuleScreen
