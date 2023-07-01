import React from 'react'
import { useState } from 'react';
import './drawerProfile.css'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
const DrawerProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  
  return (
    <>
    <>

      <Button colorScheme='teal' size='xs' onClick={onOpen}>
        My Profile
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='2px'> My Profile</DrawerHeader>
          <DrawerBody>
          <div className="subProfile">
             <div className="imgdata">
                 <div className="teacherimg">
                 <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg" alt="" />
              </div>
              <div className="teachername">
                 Mr. Vinay Kumar Maurya
              </div>
              <div className="branch">
                 Branch: BCA ,MCA
              </div>
              <p className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rerum expedita reiciendis debitis voluptate beatae a quas aliquid hic repudiandae.
              </p>
              <div className="btns">
                  <button className='btn'>Give FeedBack</button>
                  <button className='btn'>Edit</button>
              </div>
      </div>
      </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
       
       

      
    </>
    )
}

export default DrawerProfile