import React from 'react'

import {Button, Icon, Image, Modal,Divider} from 'semantic-ui-react';
function Instruction() {
    const [open, setOpen] = React.useState(false);
    
    return (
        <div>
      <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button icon labelPosition="right">Help<Icon name="help"/></Button>}
    >
      <Modal.Header>Metamask Guide</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
          <p>
              This is your guide to setup MetaMask on your system.
          </p>

          <Image
            src='/1.png'
            style={{ marginBottom: 10 , alignContent: "center"}}
            width={500}
            height={500}
            
          /><Divider/>
          <Image
            src='/2.png'
            style={{ marginBottom: 10 }}
            width={500}
            height={500}
          /><Divider/>
           <Image
           width={500}
            height={500}
            src='/3.png'
            style={{ marginBottom: 10 }}
          /><Divider/>
           <Image
           width={500}
            height={500}
            src='/4.png'
            style={{ marginBottom: 10 }}
          /><Divider/>
          <Image
          width={500}
            height={500}
            src='/5.png'
            style={{ marginBottom: 10 }}
          /><Divider/>
          <Image
          width={500}
            height={500}
          src='/6.png'
          style={{ marginBottom: 10 }}
        /><Divider/>
          <Image
          width={500}
            height={500}
            src='/7.png'
            style={{ marginBottom: 10 }}
          /><Divider/>
          <Image
          width={500}
            height={500}
            src='/8.png'
            style={{ marginBottom: 10 }}
          /><Divider/>
          <Image
          width={500}
            height={500}
            src='/9.png'
            style={{ marginBottom: 10 }}
          /><Divider/>
          <Image
          width={500}
            height={500}
            src='/10.png'
            style={{ marginBottom: 10 }}
          /><Divider/>
          <Image
          width={500}
            height={500}
            src='/11.png'
            style={{ marginBottom: 10 }}
          /><Divider/>
          <Image
          width={500}
            height={500}
            src='/12.png'
            style={{ marginBottom: 10 }}
            
          /><Divider/>
          <Image
          width={500}
            height={500}
            src='/13.png'
            style={{ marginBottom: 10 }}
          />

          

         
           </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Done <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
      </div>
    )
}

export default Instruction
