import {Box } from "@chakra-ui/react"

const AppContainer = ({children, ...otherProps}) => {



    return (
        <Box maxW={['1072px']} mx={'auto'} px={["1rem","2rem","2rem","2rem","2rem"]}  {...otherProps} >
          {children}
        </Box>
    )
}


export default AppContainer