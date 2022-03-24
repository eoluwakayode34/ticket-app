import { Box, Flex,  Heading, Text, Image,  Button } from "@chakra-ui/react"
import location from '../../assets/location.svg'
import ticket from '../../assets/ticket.svg'
import date from '../../assets/date.svg'
const FeatureCard = ({city = "Lagos", name="asdfadf"}) => {

    


    return (
        <Box w={['100%','80%','70%','48%','48%']}
        mx={["auto"]}
         bg='#fff' my={"12px"} py={"18px"} px={"16px"} borderRadius={"10px"} dropShadow='0px 2px 30px rgba(0, 0, 0, 0.02)'>
            <Box
            
            bg='#000' 
            overflow={"hidden"}
            w='100%'  height={'12rem'}     borderRadius={"6px"}
            >

<Image 
objectFit={"cover"}
w={"100%"}
h={"100%"}
src={ "https://photos.bandsintown.com/large/9113907.jpeg"}
alt="event flyer"
            
 />

            </Box>
          
            <Flex justify={'space-between'}  alignItems="flex-end" flexWrap={"wrap"} >
                <Heading fontSize={['1rem']} my="1rem" textAlign="left" flex="1">{name}</Heading>
                <Flex bg="rgba(255, 106, 44, 0.08)" my="1rem" borderRadius={"6px"} py={"8px"} px={"10px"} pos="relative">
                    <Box bg="#fff" w={"14px"}  h={"14px"} borderRadius={"7px"} pos="absolute" top="-30%" left="40%" />
                    <Text color="#FF6A2C" fontWeight={600} m={0} textTransform="capitalize" fontSize={['.8rem']}>31 oct</Text>
                    <Box bg="#fff" w={"14px"}  h={"14px"} borderRadius={"7px"} pos="absolute" bottom="-30%" left="40%" />
                </Flex>
            </Flex>

            <Flex flexDir={"row"} justifyContent="space-between" flexWrap={"wrap"}>


            <Flex flexDir={"column"} flexWrap={"wrap"} >
            <Flex flexDir={"row"} flexWrap={"wrap"}>

            <Flex  alignItems={"center"} >
                <Image src={location} h={"14px"} />
                <Text fontWeight={400} pl={"6px"} fontSize={[".9rem"]} m={[".3rem"]} color="#6C757D">{city}</Text>
            </Flex>

            <Flex  alignItems={"center"} ml={["0px", "10px", "20px", "25px", "30px"]} >
                <Image src={date} h={"14px"} />
                <Text fontWeight={400} pl={"6px"} fontSize={[".9rem"]} m={[".3rem"]} color="#6C757D">8th December, 2021</Text>
            </Flex>
            </Flex>

            <Flex   alignItems={"center"}>
                <Image src={ticket}  h={"14px"}  />
                <Text fontWeight={400} pl={"9px"} fontSize={[".9rem"]} my={[".3rem"]}  color="#6C757D">Starting from</Text>
                <Text  pl={"6px"} fontSize={["1rem"]} m={0}              fontWeight={"600"}
 color="#372AA4">N15,000</Text>
            </Flex>
            </Flex>

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


export default FeatureCard