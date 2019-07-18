import React, { Component } from 'react';
import RequestListCarousel from './RequestListCarousel';
import RequestListConfirm from './RequestConfirmModal';
import RequestListTable from './RequestListTable';
import PropTypes from 'prop-types';
import { Modal} from 'react-bootstrap';
import "./RequestList.css";
import {
    Kawai,
    SoundUp,
    Img1,
    Img2
  } from "../../Assets";
export default class RequestListModal extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpenConfirm: false };
      }
    
      toggleModal = () => {
        this.setState({
            isOpenConfirm: !this.state.isOpenConfirm
        });
      }
    render() {
        if(!this.props.show) {
            return null;
          }
        return (
        <section id="RequestList">
        <RequestListConfirm showConfirm={this.state.isOpenConfirm} onClose={this.toggleModal}/>
        <Modal show={this.props.show} onHide={this.props.onClose}>
            <Modal.Header  closeButton  onClick={this.props.onClose}></Modal.Header>
            <Modal.Body>
            <div className="requestInfo">
                <div class="row">
                    <div className="col-6"> 
                        <h5 className="soundsUP"><img alt="person logo" src={SoundUp} /> リクエスト</h5>
                        <h5 className="content-name">玄海産 真あじ</h5>
                        <p className="weight">300g x 100尾</p>
                    </div>
                    <div className="col-6 d-flex align-items-end">
                        <h3 className="amount">¥50,000</h3> 
                    </div>
                </div>
            </div>
            <RequestListCarousel/>
                <p className="contentText">
                    商品の説明が入ります。商品の説明が 入ります。
                    商品の説明が入ります。 商品の説明が入ります。
                    商品の説明が 入ります。商品の説明が入ります。 
                    商品の説明が入ります。商品の説明が 入ります。
                    商品の説明が入ります。
                </p>
            <div className="requestList">
                <RequestListModal/>
            </div>
            </Modal.Body>
            <div className="requestAct">
                <div className="row">
                    <div className="col-6"> 
                        <h5>リクエスト者</h5>
                        <h5><img alt="person logo" src={Kawai} /> Xマート社</h5>
                    </div>
                    <div className="col-6 d-flex align-items-end"> 
                        <h6 className="adjusting">[ メッセージ送信 ]</h6>
                    </div>
                </div>
                {/* <form> */}
                    <div className="form-input row">
                        <input type="number" className="form-input-num" min="0" max="100" name="amount"/>
                            <h6 class="lot">ロット</h6>
                            <h6 class="total-amount">¥200,000</h6>
                    </div>
                    <div className="form-input-button">
                        <button className="btn btnBlue "  onClick={this.toggleModal}>詳細検索</button>
                    </div>
                {/* </form> */}
            </div>
   
        </Modal>
        </section>
        )
    }
}
