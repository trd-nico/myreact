import React, { Component } from 'react';
import RequestListCarousel from './RequestListCarousel';
import RequestListModal from './RequestListModal';

import "./RequestList.css";
import { Modal} from 'react-bootstrap';
import {
    Kawai,
    SoundUp,
    Img1,
    Img2
  } from "../../Assets";
class RequestList extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
      }
      toggleRlModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <section id="RequestList">
                 <RequestListModal show={this.state.isOpen} onClose={this.toggleRlModal}/>
                <div className="requestInfo">
                <button className="btn btnBlue" >詳細検索</button>
                <div className="row">
                    <div className="col-6"> 
                        <h5 className="soundUp"><img alt="person logo" src={SoundUp} /> リクエスト</h5>
                        <h5>玄海産 真あじ</h5>
                        <p>300g x 100尾</p>
                    </div>
                    <div className="col-6 d-flex align-items-end">
                        <h3>¥50,000</h3> 
                    </div>
                </div>
                <RequestListCarousel />
                <p className="contentText">
                    商品の説明が入ります。商品の説明が 入ります。
                    商品の説明が入ります。 商品の説明が入ります。
                    商品の説明が 入ります。商品の説明が入ります。 
                    商品の説明が入ります。商品の説明が 入ります。
                    商品の説明が入ります。
                </p>
                </div>
                
                <div className="requestList">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                            <tr>
                            <td>サンプル</td>
                            <td>サンプル</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="requestAction">
                    <div className="row">
                        <div className="col-6"> 
                            <h5>リクエスト者</h5>
                            <h5><img alt="person logo" src={Kawai} /> Xマート社</h5>
                        </div>
                        <div className="col-6 d-flex align-items-end"> 
                            <h6>[ メッセージ送信 ]</h6>
                        </div>
                    </div>
                    <button className="btn btnBlue " onClick={this.toggleRlModal} >詳細検索</button>
                </div>
            </section>
        );
    }
}

export default RequestList;