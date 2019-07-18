import React, { Component } from 'react';
import './SignUpModal.css';
import {
	Popover,
	Tooltip,
	Modal
} from 'react-bootstrap';

class SignUpModal extends React.Component {

	constructor(props, context) {
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
	handleClose() {
		this.setState({ show: false })
	}
	render() {
		return (

			<Modal centered show={this.state.show} onHide={this.handleClose}>

				<Modal.Body>
					<div id="signupModal" className="signup-modal-wrapper">
						<div className="modal-body">
							<p>登録しますか？</p>
						</div>
						<div className="modal-options">
							<div className="btn-save">はい</div>
							<div className="btn-close" onClick={this.handleClose}>いいえ</div>
						</div> 
					</div>
				</Modal.Body>
			</Modal>

		);
	}
}

export default SignUpModal;