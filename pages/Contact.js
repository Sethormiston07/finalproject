import { Input } from '@chakra-ui/react'
import {InputGroup} from '@chakra-ui/react'
import {InputLeftAddon} from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import {Stack} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import {EmailIcon} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/react'

export default function ContactPage() {
    return (
        <> 
            <div> 
            <a style={{color:'white'}}><Input placeholder='Please Enter Your Name'/></a><a style={{color:'white'}}><Input placeholder='Please Input Your Email'/></a>
            
            <InputGroup>
            <InputLeftAddon>+44</InputLeftAddon>
            <Input type='tel' placeholder='phone number' />
            </InputGroup>
            <Textarea placeholder='Please Enter Your Comment' />
            <Stack direction='row' spacing={4}>
            <Button background={<EmailIcon />} colorScheme='teal' variant='solid'>
                Email
            </Button>
            <Button background={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                Call us
            </Button>
            </Stack>
            </div>
        </>
    )
}
