import React, { Component } from 'react'
import './changeProfile.css';
import { Modal} from 'react-bootstrap';
class ChangeProfMsg extends Component {
    constructor(props, context){
        super(props, context);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    }
    handleShowModal() {
        console.log(this.state)
        this.setState({ show: true })
    }
    handleClose(){          
        this.setState({ show: false })
    }
    render() {
        return (
        <section id="changeProfModal">
          <Modal show={this.state.show} onHide={this.handleClose}>
              <div class="user-dialog-wrapper-1">
                    <Modal.Header>
                        <div>
                            <h3 class="txt-modal">更新しました</h3>
                        </div>
                    </Modal.Header>
              </div>
              <Modal.Body>
                 <button class="btn btn-modal" onClick={this.handleClose}>OK</button>
              </Modal.Body>
          </Modal>
        </section>
        )
    }
}

export default ChangeProfMsg;