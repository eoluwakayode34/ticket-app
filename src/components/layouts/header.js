import { Box, Flex,  Heading, Icon, Text, Image,  Button } from "@chakra-ui/react"
import {AiOutlineDown} from 'react-icons/ai'
import { Container } from ".."

const Header = () => {



    return (
        <Container>

        <Flex pt={["1.2rem","1.5rem","1.7rem","2rem"]} alignItems={"center"} alignContent={"center"} justifyContent="space-between" display="flex">
        <Heading fontSize={['1rem','1.1rem','1.2rem','1.7rem']}>Events</Heading>

            <Flex alignItems={"center"}>
                <Box w={["2rem","2.2rem","2.5rem","3rem"]} h={["2rem","2.2rem","2.5rem","3rem"]} borderRadius={"10px"} bg="blue" >

                </Box>
                <Heading fontSize={['.6rem','.9rem','1rem','1.1rem']}  mx={["5px","8px","10px","12px"]} >Benice</Heading>
                <Button bg="#EAEDF7" border={0} ring={0} px={"0"} w={["20px","24px","28px","30px"]} h={["20px","24px","28px","30px"]} borderRadius={["5px","8px","10px"]} >
                {<Icon as={AiOutlineDown} color='#200E32' fontSize={["7px","8px","10px","12px","15px"]}  />}

                </Button>
            </Flex>
          </Flex>
        </Container>
    )
}


export default Header