import React, { Component } from 'react';
import './Login.css';
import{Logo} from '../../Assets'
class Login extends React.Component {
   
    render() {
        localStorage.setItem('title','ホーム');
        return (
            <div className="wrapper" id="login">
                <div className="card">
                    <div className="form-title">
                        {/* <img></img> */}
                        <img className='logo' src={Logo} alt=""/>
                        <p>ログイン</p>
                    </div>
                    <div className="card-body">
                        <form action="/home">
                            <div className="text-input">
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="User Name"/>
                                <input type="password" className="form-control" id="inlineFormInputGroupUsername" placeholder="•••••••••"/>
                            </div>
                            <div className="buttons">
                                <input type='submit' className="btn form-control login" value="ログイン"></input>
                                <a href='/signup' className='btn form-control signup' value="">新規登録はこちら</a>
                                <a className="forgetPassword" href="/passwordreset">パスワードを忘れた方はこちら</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;