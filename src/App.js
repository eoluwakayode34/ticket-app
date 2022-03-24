import { useEffect, useState } from 'react';
import './App.css';
import {Card, Container, FeatureCard, Header} from './components/index'
import { Flex, Heading, Icon, Input, Spinner} from '@chakra-ui/react';
import {BiSearch} from 'react-icons/bi'
import axios from 'axios';
function App() {
  const [loading, setLoading] = useState(false)
  const [eventData, setEventData] = useState([])
  const [filteredEvent, setFilteredEvent] = useState([])
  const [featureData, setFeaturedData] = useState([])
  const [checkInternet, setCheckInternet] = useState(true)

    useEffect(() => {
      setLoading(true)
        axios.get("https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe")
      
        .then(res => {
          setCheckInternet(res.status >= 200 && res.status < 300)
          return res.data})
        .then(res =>{ 
          setLoading(false)
          console.log(res)
          setEventData(res)
          setFilteredEvent(res)


          const data = []
          data.push(res[0])
          data.push(res[1])
          setFeaturedData(data)

        }).catch(() => setCheckInternet(false) )

    }, [])

  const filterEvent = (value) => {
          
    setFilteredEvent( eventData.filter((item) => item.venue.name.toLowerCase().includes(value.toLowerCase()))
 
    )
}






  return (
    <div className="App">
      <Header/>

          <Container>

<Flex my="2rem" alignItems={"center"} alignContent={"center"} display="flex" pos="relative" >
    {<Icon as={BiSearch} color='gray.700' pos="absolute" left="12px" zIndex={2}/>}
  
    <Input type='search' 
  fontSize={['.7rem','.9rem','.92rem','1rem','1rem']}
    onChange = {e => filterEvent(e.target.value)}

    px={"17px"} py={"14px"} bg="#fff" borderRadius={"10px"} pl={"30px"} w={["100%","70%","50%","45%"]} border="1px solid #E8E8E8" placeholder='Search' />
  </Flex>
</Container>


      <Container>

            <Flex alignItems={"flex-start"}>

<Heading fontSize={['.8rem','1rem','1.1rem','1.2rem']} mt="1rem">Featured Events</Heading>
  </Flex>
  </Container>

      <Container>
    { featureData ?   <Flex justifyContent={"space-between"} flexWrap={"wrap"}> 
    {featureData.map((event, index) => <FeatureCard key={index} name={event.venue.name} city={event.venue.city} /> )}
        </Flex> : <Spinner/>}
      </Container>
      <Container>
        <Flex alignItems={"flex-start"}>

      <Heading fontSize={['.8rem','1rem','1.1rem','1.2rem']}  mb="0" mt="1.5rem">All Events</Heading>
        </Flex>
      </Container>
      <Container>
        {checkInternet && loading && <Spinner/>}
        {!checkInternet && <Heading color={"red"}>Check your network connection</Heading>}
        { filteredEvent &&   <Flex justifyContent='space-between' flexWrap={'wrap'}>
           {
             filteredEvent.map((event, index) => <Card key={index} name={event.venue.name} city={event.venue.city} /> )
           } 
          
   
           </Flex>
    }
       
       
      </Container>
      
    </div>
  );
}

export default App;
