import React, { Component } from 'react';
import './Signup.css';

import SignUpModal from './SignUpModal';
import {
    Asterisk,
    Logo
  } from "../../Assets";

class Signup extends React.Component {

	// User Profile Modal Reference------------->
	SignUpModalRef = ({handleShowModal}) => {
		this.showModal = handleShowModal;
	}
	
	onBtnClick = () => {
	this.showModal();
	}
    render() {
        return (
           <div className="wrapper" id='signUp'>
                <div className="card">
                    <div className="form-title">
                    <img className='logo' src={Logo} alt=""/>
                        <h2>新規登録</h2>
                    </div>
                    <div className="card-body">
                        <form action="/home">
                            <div className="text-input">
                                <div className="inputWrap"><input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="会社名"/><img className='asterisk' src={Asterisk}></img></div>
                                <div className="inputWrap"><input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="住所"/><img className='asterisk' src={Asterisk}></img></div>
                                <div className="inputWrap"><input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="電話番号"/><img className='asterisk' src={Asterisk}></img></div>
                                <div className="inputWrap"><input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="メールアドレス"/><img className='asterisk'  src={Asterisk}></img></div>
                                <div className='checkBox'>
                                    <div>
                                        <label>販売者として登録</label>
                                        <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider"></span>
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <label>購入者として登録</label>
                                        <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider"></span>
                                        </label>
                                    </div>
                                    <h5 class='termsOfService'>利用規約</h5>
                                </div>
                            </div>
							<SignUpModal ref={this.SignUpModalRef}></SignUpModal> 
                            <div className="buttonsSignup">
                                <input type='button' className="btn form-control login" value="利用規約に同意して登録する" onClick={this.onBtnClick}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;