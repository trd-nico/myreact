import React, { Component } from 'react';
import './changeProfile.css';
import ChangeProfileMsg from './ChangeProfMsg';
import { Link } from 'react-router-dom';
import {

  } from "../../Assets";
class ChangeProfile extends Component {
    changeProfileMsg = ({handleShowModal}) => {
        this.showModal = handleShowModal;
     }
     onUpdateClick = () => {
        this.showModal();
      }
    render() {
        return (
            <section id="changeProfile">
                  <ChangeProfileMsg ref={this.changeProfileMsg}/>
                <div className="container">
                    <form action="" className="imgForm">
                        <div className="custom-file">
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <input type="file" className="custom-file-input" id="customFile"/>
                                    <p className="noImage">NO IMAGE</p>
                                </div>
                                <div className="col-6 d-flex align-items-center">
                                <button type="submit" className="btn btn-primary btnImg">画像を更新する</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form action="" className="profile-form-group">
                        <div className="form-group">
                            <label for="company-name">会社名</label>
                            <input type="text" className="form-control" name="company-name" required/>
                        </div>
                        <div className="form-group">
                            <label for="address">住所</label>
                            <input type="text" className="form-control"name="address" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">電話番号</label>
                            <input type="text" className="form-control"name="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="url">ホームページURL</label>
                            <input type="text" className="form-control" name="url" required/>
                        </div>
                        <div className="form-group">
                            <label for="capital">資本金</label>
                            <input type="text" className="form-control" name="capital" required/>
                        </div>
                        <div className="form-group">
                            <label for="date-establish">設立年月日</label>
                            <input type="text" className="form-control" name="date-establish" required/>
                        </div>
                        <div className="form-group ">
                            <label for="self-pr">自己PR</label>
                            <textarea className="form-control" name="self-pr"> </textarea>
                        </div>
                        <div className="form-group ">
                            <label for="trading-notes">取引上の注意</label>
                            <textarea className="form-control" name="trading-notes"> </textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" onClick={this.onUpdateClick}>更新 </button>
                    </form>
                </div>

            </section>
        );
    }
}

export default ChangeProfile;