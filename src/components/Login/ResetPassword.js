import React, { Component } from 'react';
import './ResetPassword.css';
class ResetPassword extends React.Component {
    render() {
        return (
           <div className="wrapper" id='resetPassword'>
                <div className='card-body'>
                    <h5 className='resetTitle'>メールアドレスを入力ください。<br/> パスワードリセットリンクを送信します。</h5>
                    <form action='/passwordconfirmation'>
                        <input type='email' className="form-control" placeholder='sample@gmail.com'/>
                        <input type='submit' className="btn form-control " value='OK'/>
                     </form>
                </div>
            </div>
        );
    }
}
export default ResetPassword;