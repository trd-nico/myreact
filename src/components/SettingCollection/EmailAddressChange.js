import React, { Component } from 'react';
import "./EmailAddressChange.css";
import { Modal } from "react-bootstrap/";

class EmailAddressChange extends Component {
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
            <div>
                <div class="changeEmailContainer p-5">
                    <div class="form-group">
                        <label for="newEmail">新しいメール</label>
                        <input type="text" class="form-control form-control-lg" 
                            placeholder="sample@gmail.com" 
                            id="newEmail" name="newEmail"/>
                    </div>
                    <div class="form-group mt-4">
                        <label for="newEmail">新しいメールアドレスを再入力</label>
                        <input type="text" class="form-control form-control-lg" 
                            placeholder="sample@gmail.com" 
                            id="newEmail" name="confirmEmail"/>
                    </div>
                    <div class="form-group mt-5">
                        <button type="button" class="btn btn-update-email btn-block"
                            onClick={this.handleShowModal}>更新</button>
                    </div>
                </div>

                <Modal show={this.state.show} 
                    onHide={this.handleClose} 
                    backdrop={'static'}
                    dialogClassName="modal-confirm-email"
                    centered
                >
                    <Modal.Body>
                        <p class="update-msg mt-4 mb-5">更新しました</p>
                        <button type="button" class="btn btn-email-ok btn-block" onClick={this.handleClose}>OK</button>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default EmailAddressChange;