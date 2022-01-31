import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Loader from '../Components/Loader'
import axios from 'axios'


function LocationsScreen() {

        const [locations, SetLocations] = useState([])
        const [loading, SetLoading] = useState(true)

        useEffect(()=>{

            const fetchLocations = async ()=> {

                const {data} = await axios.get('https://localhost:7214/api/locations');
                console.log(data)
                if (data){
                    SetLoading(false)
                }
            }

            fetchLocations()

        })

        
  return <div>
      
    <Container>
    <h1 className="py-3 text-center">Our Locations!</h1>

    {loading ? <Loader/> :(
    <Row>
        <h2>LOCATIONS GOES HERE FIX LATER</h2>
    </Row>
    )}

    </Container>


  </div>;
}

export default LocationsScreen;
