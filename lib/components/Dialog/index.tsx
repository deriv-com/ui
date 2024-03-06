import React from "react"
import { Modal } from "../Modal"
import { Text } from "../Text"
import { Button } from "../Button"
import "./Dialog.scss"

export const Dialog  =()=>{
    const [isOpen,setIsOpen]=React.useState(true);
    return(

        <Modal isOpen={isOpen} className={"deriv-dialog"} onRequestClose={()=>setIsOpen(false)} ariaHideApp={false}>
       <Modal.Header hideBorder={true}>
        <Text as='div' weight='bold' className='deriv-modal__header-title'>
             Modal Header
         </Text>
      </Modal.Header>
      <Modal.Body>
        <div>modal body</div>
      </Modal.Body>
      <Modal.Footer hideBorder={true}>
         <Button color="black">cancel</Button>
         <Button>ok</Button>
      </Modal.Footer>
     </Modal>

    )
}