import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from 'react-bootstrap';
import ShippingSettingSuccess from './ShippingSettingSuccess.js';
import './ShippingModal.css';



class ShippingSettingModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpenSecond:false };
      }
    
render() {
  if(!this.props.show) {
    return null;
  }
    return (
       <div>
			  <ShippingSettingSuccess show={this.state.isOpenSecond}
                onClose={this.props.onClose}>
              </ShippingSettingSuccess>
          <Modal show={this.props.show} onHide={this.props.onClose} className='ShippingSettingModal'>
              <Modal.Body>
                  <p>削除しますか？</p> 
                  <input type='submit' style={{'text-align':'left'}} value='はい' onClick={this.props.onClose("success")}></input> 
                  <input type='submit' style={{color:'red','text-align':'right'}} value='いいえ' onClick={this.props.onClose("confirm")} ></input> 
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
export default ShippingSettingModal;