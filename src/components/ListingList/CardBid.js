import React, { Component } from 'react'

 class CardBid extends Component {
    render() {
        return (
            <div className="form-input bid">
                        <div className="row row-img">
                            <div className="col-6 col-img">
                                <div className="custom-file  d-flex align-items-center">
                                <input type="file" className="custom-file-input input-img" id="customFile"/>
                                <div className="noImage bid"><p>NO IMAGE</p></div>
                            </div>
                            </div>
                            <div className="col-6 col-content">
                                <p className="mart">X mart [ メッセージ送信 ]</p>
                                <p className="duration">2 ロット 〜 4ロット</p>
                            </div>
                        </div>
                        <div className="row row-input bid">
                            <input type="number" className="form-input-num bid" min="0" max="100" name="amount"/>
                            <h6 class="lot">ロット</h6>
                            <h6 class="total-amount">¥100,000</h6>
                        </div>
            </div>
        )
    }
}
export default CardBid;