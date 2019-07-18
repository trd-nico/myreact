import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
    Popover,
    Tooltip,
    Modal
  } from 'react-bootstrap';
//   import './ChangePasswordModal.css';
import ShippingSettingModal from './ShippingSettingModal.js';



class ShippingSettingSuccess extends React.Component {
render() {
  if(!this.props.show) {
    return null;
  }
    return (
       <div>
          <Modal show={this.props.show} onHide={this.props.onClose} className='changePasswordModal'>
              <Modal.Body>
                  <p>削除しました</p> 
                  <input type='submit' value='OK' onClick={this.props.onClose("confirm")} ></input> 
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
export default ShippingSettingSuccess;