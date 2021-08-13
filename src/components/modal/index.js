import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import styled from 'styled-components';

const ModalDiv = styled.div`

  .btn {
      position: relative;
      color: #fff;
      cursor: default;
      background: indigo;
      cursor: pointer;
      padding: 0.2em;
      font-family: Roboto,sans-serif;
      margin: 1em;
      font-size: 0.6;
      float:right;
    } 
`;


export default function ModalBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <ModalDiv>
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button className="btn">Show More</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Do Wish To Share?
      </Header>
      <Modal.Content>
        <p>
          Please select a Contact you wish to share this with.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    </ModalDiv>
  )
}//end ModalBasic