import React, { Component } from 'react'
import { Modal} from 'react-bootstrap';

class RequestConfirmModal extends Component {

    render() {
      if(!this.props.showConfirm) {
        return null;
      }
        return (
            <Modal dialogClassName="requestListModal"  show={this.props.showConfirm} onHide={this.props.onClose}>

              <Modal.Body>
                     <div className="text-title">
                            <h3 className="txt-modal">更新しました</h3>
                    </div>
                 <button className="btn btn-modal-click "  onClick={this.props.onClose}>OK</button>
              </Modal.Body>
          </Modal>
        )
    }
}
export default RequestConfirmModal;