import React, { Component } from 'react'
import DashBoardCarousel from './DashBoardCarousel';
import { Modal} from 'react-bootstrap';
import DashboardTable from './DashboardTable';
class DashBoardActivity extends Component {
    render() {
        if(!this.props.show) {
            return null;
          }
        return (
            
            <section id="dashBoardActivity">
                <Modal dialogClassName="dashBoardActivity" show={this.props.show} onHide={this.props.onClose} >
                    <div class="requestInfo">
                        <Modal.Header closeButton  onClick={this.handleClose}>
                        <div class="row">
                            <div class="col-6"> 
                                <h5>玄海産 真あじ</h5>
                                <p>300g x 100尾</p>
                            </div>
                            <div class="col-6 d-flex align-items-end">
                                <h3>¥50,000</h3> 
                            </div>
                        </div>
                        </Modal.Header>
                        <Modal.Body>
                        <DashBoardCarousel/>
                        <p class="contentText">
                            商品の説明が入ります。商品の説明が 入ります。
                            商品の説明が入ります。 商品の説明が入ります。
                            商品の説明が 入ります。商品の説明が入ります。 
                            商品の説明が入ります。商品の説明が 入ります。
                            商品の説明が入ります。
                        </p>
                        <p>漁師名/漁船名 ：大漁丸</p>
                        <DashBoardCarousel/>
                        </Modal.Body>
                    </div>
                    <div class="requestList">
                        <DashboardTable/>
                    </div>
                </Modal>
            </section>
        )
    }
}

export default DashBoardActivity;