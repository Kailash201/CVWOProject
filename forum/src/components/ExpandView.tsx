import { Backdrop, Button, Fade, Modal } from "@material-ui/core";
import React, { useState } from "react";

type Props ={
    res: boolean
}

const Expand= (res: boolean) => {
    const [open, setOpen] = useState(false);
    setOpen(res);
    return (
    <div>
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          disableEscapeKeyDown={true}
          
          
          open={open}
          onClose={(reason) => reason !== "backdropClick" ? setOpen(true) : setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div >
             
              <div >
              
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </div>
            </div>
          </Fade>
      </Modal>
    </div>
    );
};

export default Expand;