import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap/";
import './InquiryModal.css';

class InquiryModal extends React.Component {
	constructor(props, context){
		super(props, context);
		this.showSuccess = this.showSuccess.bind(this);
		this.closeSuccess = this.closeSuccess.bind(this);
		this.state = {
			succcess: false
		}
	}
	showSuccess() {
		this.setState({ succcess: true })
	}
	closeSuccess(){
		this.setState({ succcess: false })
		this.props.onClose()
	}
	render() {
		if(!this.props.show) {
			return null;
		}
		return (
		   <div>
				{/* delete confirmation modal */}
				<Modal show={this.props.show} 
                    onHide={this.props.onClose} 
                    backdrop={'static'}
                    dialogClassName="inquiryConfirmModal"
                    centered
                >
                    <Modal.Body>
                        <p class="inquiryConfirmMsg mt-4 mb-5">送信しますか？</p>
						<div class="row">
							<div class="col-6">
								<button type="button" class="btn btnInquiryYes btn-block" 
									onClick={this.showSuccess}>はい</button>
							</div>
							<div class="col-6">
								<button type="button" class="btn btnInquiryNo btn-block" 
									onClick={this.props.onClose}>いいえ</button>
							</div>
						</div>
                    </Modal.Body>
                </Modal>

				{/* delete successful */}
				<Modal show={this.state.succcess} 
                    onHide={this.closeSuccess} 
                    backdrop={'static'}
                    dialogClassName="inquirySuccessModal"
                    centered
                >
                    <Modal.Body>
                        <p class="deleteNotifyMsg mt-4 mb-5">送信完了しました</p>
						<button type="button" class="btn btn-inquiry-ok btn-block" onClick={this.closeSuccess}>OK</button>
                    </Modal.Body>
                </Modal>
			</div>
		)
	}
}
Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool,
	children: PropTypes.node
};
export default InquiryModal;