import React, { Component } from 'react'
import { Modal} from 'react-bootstrap';
import ListCarousel from '../RequestList/RequestListCarousel';
import Tables from './ListingTable';
import Cardbid from './CardBid';
import '../RequestList/RequestList.css';
import '../SettingCollection/changeProfile.css';
import PostBidExhibitionModal from './PostBidExhibitionModal';
class BidExhibitionModal extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpenSecond: false };
      }
    
      toggleModal = () => {
        this.setState({
            isOpenSecond: !this.state.isOpenSecond
        });
      }
    render() {
        if(!this.props.show) {
            return null;
          }
        return (
            <div>
            <PostBidExhibitionModal showSecond={this.state.isOpenSecond}
                onClose={this.toggleModal}>
              </PostBidExhibitionModal>
            <Modal show={this.props.show} onHide={this.props.onClose}  >
                <Modal.Header  closeButton  onClick={this.close}></Modal.Header>
                <Modal.Body>
                    <div class="row align-items-end">
                        <div class="col-6">
                            <div class="float-left">
                                <p class="txt1"><i class="fa fa-shopping-cart"></i> 出品中</p>
                                <p class="txt2">玄海産 真あじ</p>
                                <p>300g x 100尾</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <p class="money float-right">¥50,000</p>
                        </div>
                        </div>
                    <ListCarousel />
                    <p class="contentText">
                    商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。<br />
                    商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。<br />
                    商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。
                    </p>
                    <p class="head">
                        漁師名/漁船名 ：大漁丸
                    </p>
                <ListCarousel />
                
                <div className="listTables">
                    <Tables />
                    <p class="contentText text-center">入札数：3</p>
                </div>
                    <Cardbid/>
                    <Cardbid/>
                    <Cardbid/>
                    <Cardbid/>
                    <div className="form-input bid-info">
                        <p>合計</p>
                        <p>[ 300g x 100尾 ] x 10ロット</p>
                        <p>¥500,000</p>
                    </div>
                    <div className="form-input-button">
                        <button className="btn btnBlue " onClick={this.toggleModal}>受注確認</button>
                     </div>
                </Modal.Body>
            </Modal>
            </div>
        )
    }
}


export default BidExhibitionModal;