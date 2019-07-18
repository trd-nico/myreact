import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap/";
import './AddNewNotifyModal.css';

class AddNewNotifyModal extends React.Component {
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
				<Modal show={this.props.show} 
					onHide={this.props.onClose}
					backdrop={'static'}
					className='addNewNotifyModal'
					centered
				>
					<Modal.Body>
						<div class="p-3">
							<div class="form-group">
								<label for="newNotify">お知らせ</label>
								<input type="text" class="form-control" 
									placeholder="サンプル" 
									id="newNotify" name="newNotify"/>
							</div>
							<div class="row">
								<div class="col-6">
									<button type="button" class="btn btnSaveNotify btn-block" 
										onClick={this.showSuccess}>保存する</button>
								</div>
								<div class="col-6">
									<button type="button" class="btn btnCancel btn-block" 
										onClick={this.props.onClose}>キャンセル</button>
								</div>
							</div>
						</div>
					</Modal.Body>
				</Modal>
				{/* Success */}
				<Modal show={this.state.succcess} 
                    onHide={this.closeSuccess} 
                    backdrop={'static'}
                    dialogClassName="addNotifySuccessModal"
                    centered
                >
                    <Modal.Body>
                        <p class="addNotifyMsg mt-4 mb-5">成功しました</p>
						<button type="button" class="btn btnAddnotifyOK btn-block" onClick={this.closeSuccess}>OK</button>
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
export default AddNewNotifyModal;