import React, { Component } from 'react';
import './ResetPassword.css';
import {
    Mail
  } from "../../Assets";
class ResetConfirmation extends React.Component {
    render() {
        return (
           <div className="wrapper" id='resetPassword'>
                <div className='card-body'>
                    <h5 className='confimationTitle'>メッセージ</h5>
                    <img src={Mail}/>
                    <h5 className='confirmationContent'>Eメールが送信されました。<br/> メールを確認してパスワードをリセットください。</h5>
                    <input type='submit' className="btn form-control " value='OK'/>
                </div>
            </div>
        );
    }
}
export default ResetConfirmation;