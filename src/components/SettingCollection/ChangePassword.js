import React, { Component } from 'react';
import './ChangePassword.css';
import ChangePasswordModal from '../Modal/ChangePasswordModal';


class ChangePassword extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
      }
    
      toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
    render() {
        return (
            <div className='changePassword container'>
                <ChangePasswordModal show={this.state.isOpen}
                onClose={this.toggleModal}>
              </ChangePasswordModal>
                <div className="text-input">
                    <label>New Password</label>
                    <input type="password" className="form-control" id="inlineFormInputGroupUsername" placeholder="•••••••"/>
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id="inlineFormInputGroupUsername" placeholder="•••••••"/>
                </div>
                <div className="buttons">
                    <input type='submit' className="btn form-control login" onClick={this.toggleModal} value="更新"></input>
                </div>
            </div>
        );
    }
}

export default ChangePassword;