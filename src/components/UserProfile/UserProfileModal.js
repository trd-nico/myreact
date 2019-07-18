import React, { Component } from 'react';
import { 
    Popover,
    Tooltip,
    Modal
  } from 'react-bootstrap';

import { Avatar } from '../../Assets';
import './userProfile.css';
import { Star } from '../../Assets/Icons';
import { Link } from 'react-router-dom';


class UserProfileModal extends React.Component {
render() {
    if(!this.props.show) {
        return null;
      }
    return (
       <div>
          <Modal show={this.props.show} onHide={this.props.onClose} >
              <div class="user-dialog-wrapper-1">
                    <Modal.Header closeButton>
                    <div class="user-dialog-avatar">
                            <img alt="person logo" class="user-dialog-avatar-logo" src={Avatar} />
                   
                            <h4>Xマート社</h4>
                            
                            <img src={Star} class="user-dialog-rating"></img>
                            <img src={Star} class="user-dialog-rating"></img>
                            <img src={Star} class="user-dialog-rating"></img>
                            <img src={Star} class="user-dialog-rating"></img>
                            <img src={Star} class="user-dialog-rating"></img>

                            <div class="link-to-trade-history">
                                <Link to="/tradinghistory" onClick={this.handleClose}>取引履歴</Link>
                            </div>
                         
                            
                    </div>
                    </Modal.Header>
              </div>
              <Modal.Body>
                   <table class="user-dialog-table">
                       <tr>
                           <td>会社名</td>
                           <td>株式会社マリニティ</td>
                       </tr>
                       <tr>
                           <td>住所</td>
                           <td>福岡市港区12-19</td>
                       </tr>
                       <tr>
                           <td>電話番号</td>
                           <td>092-000-0000</td>
                       </tr>
                       <tr>
                           <td>メールアドレス</td>
                           <td>mail@example.com</td>
                       </tr>
                       <tr>
                           <td>ホームページurl</td>
                           <td>example.com</td>
                       </tr>
                       <tr>
                           <td>資本金</td>
                           <td>1000万円</td>
                       </tr>
                       <tr>
                           <td>設立年月日</td>
                           <td>1995年10月00日</td>
                       </tr>
                       <tr>
                           <td>自己PR</td>
                           <td>サンプルの自己PR文章が入ります。 サンプルの自己PR文章が入ります。 サンプルの自己PR文章が入ります。</td>
                       </tr>
                       <tr>
                           <td>取引上の注意</td>
                           <td>サンプルの取引上の注意文が入ります。</td>
                       </tr>
                      
                   </table>
              </Modal.Body>
          </Modal>
        </div>
    )
  }
}
export default UserProfileModal;