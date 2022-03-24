import { Box, Flex,  Heading, Text, Image,  Button } from "@chakra-ui/react"
import location from '../../assets/location.svg'
import ticket from '../../assets/ticket.svg'
const Card = ({city = "Lagos", name="...", image=  "https://photos.bandsintown.com/large/9113907.jpeg"}) => {



    return (
        <Box w={['80%','43%','30%','23%']}
        mx={["auto","5px"]}
         bg='#fff' my={"12px"} py={"18px"} px={"12px"} borderRadius={"10px"} dropShadow='0px 2px 30px rgba(0, 0, 0, 0.02)'>
            <Box
            
            bg='#000' 
            overflow={"hidden"}
            w='100%'  height={'10rem'}     borderRadius={6}
            >

<Image 
objectFit={"cover"}
w={"100%"}
h={"100%"}
            src={ image}
            alt="event flyer"
            
 />

            </Box>
          
            <Flex justify={'space-between'} alignItems="flex-end" my=".5rem" >
                <Heading fontSize={['1rem']} flex="1" textAlign={"left"}>{name}</Heading>
                <Flex bg="rgba(255, 106, 44, 0.08)" borderRadius={"6px"} py={"8px"} px={"10px"} pos="relative">
                    <Box bg="#fff" w={"14px"}  h={"14px"} borderRadius={"7px"} pos="absolute" top="-30%" left="40%" />
                    <Text color="#FF6A2C" fontWeight={600} m={0} textTransform="capitalize" fontSize={['.8rem']}>{Math.floor(Math.random()*31)} oct</Text>
                    <Box bg="#fff" w={"14px"}  h={"14px"} borderRadius={"7px"} pos="absolute" bottom="-30%" left="40%" />
                </Flex>
            </Flex>


            <Flex flexDir={"column"}  >

            <Flex  alignItems={"center"} >
                <Image src={location} h={"14px"} />
                <Text fontWeight={400} pl={"6px"} fontSize={[".9rem"]} m={[".3rem"]} color="#6C757D">{city}</Text>
            </Flex>

            <Flex   alignItems={"center"}>
                <Image src={ticket}  h={"14px"}  />
                <Text fontWeight={400} pl={"9px"} fontSize={[".9rem"]} my={[".3rem"]}  color="#6C757D">Starting from</Text>
                <Text  pl={6} fontSize={["1rem"]} m={0}              fontWeight={"600"}
 color="#372AA4">N{Math.ceil(Math.random()*50)},000</Text>
            </Flex>
            </Flex>

            <Flex             alignSelf={'flex-start'}
>

            <Button px={"14px"} py={"8px"}
            mt={"15px"}
             border="1px solid #372AA4"
            borderRadius={6}
            color=" #372AA4"
            fontWeight={"600"}
            bg="#fff"

>
                Buy Ticket
            </Button>
            </Flex>
        </Box>
    )
}


export default Card