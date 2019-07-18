import React, { Component } from 'react';
import "./dashboard.css";
import DashBoardDrop from './DashBoardDrop';
import CardComponent from './CardComponent';
import NewsModal from './NewsModal';
import {
    BlueArrowDown,
    Default,
    Fox,
    Squirrel
  } from "../../Assets";

class HomePage extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
      }
    
      toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        let cardData = [
            {color:'#007AFF',img:Default,title : "出品情報", time : "04月03日 10:22", content:'豊洲市場　玄海産　真アジ \n300gx100尾 ¥50,000 \nが出品されました'},
            {color:'#46B51D',img:Squirrel,title : "バイヤーメッセージ", time : "04月03日 10:22", content: "瀬戸内産のイワシを大量に買いたいです。\n出品予定の方からのメッセージをお待ち しております！"},
            {color:'#FF8540',img:Fox,title : "売買成立", time : "04月03日 10:22", content: "豊洲市場　玄海産　真アジ \n300gx100尾 ¥50,000 \nの売買が成立しました。"},
            {color:'#FF40A7',img:Fox,title : "売買成立", time : "04月03日 10:22", content: "豊洲市場　玄海産　真アジ \n300gx100尾 ¥50,000 \nのリクエストがありました。"},
        ]

        return (
            <section id="dashBoard" >
                <NewsModal show={this.state.isOpen}
                onClose={this.toggleModal}/>
            <div class="container">
            <div class="card">
                <div class="row">
                    <div class="col-8">
                    <h4>お知らせ</h4>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <DashBoardDrop/>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <div class="items-dashboard">
                            <li class="list-group-item" onClick={this.toggleModal}>
                                <div class="row">
                                    <div class="col-6">
                                        <h5>04月03日 10:22 </h5>
                                    </div>
                                    <div class="col-6 actions">
                                        <h5>運営からのお知らせ</h5>
                                    </div>
                                </div>
                                <p>
                                    4月12日（土）の22:00から次の3時へのシステム更新実装されます。 
                                    その間、システムは利用できません。ご理解いただきありがとうございます。
                                </p>
                            </li>
                        </div>
                        <div class="items-dashboard">
                            <li class="list-group-item" onClick={this.onUpdateClick}>
                            <div class="row">
                                <div class="col-6">
                                    <h5>04月03日 10:22</h5>
                                </div>
                                <div class="col-6 actions2">
                                    <h5>アクティビティ</h5>
                                </div>
                                </div>
                                <p>
                                    玄海産 真アジ <br/>300gx100尾 ¥50,000 <br/>に入札がありました。
                                </p>
                            </li>
                        </div>
                    </ul>
                </div>
                <button class="btn btn-sm readMore"> <p>read more</p> <img src={BlueArrowDown} alt="arrow down" /></button>
            </div>
            
            <div class="card">
                <div class="row">
                    <div class="col-8">
                    <h4>掲示板</h4>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <DashBoardDrop/>
                    </div>
                </div>
                <CardComponent data = { cardData } />
                <button class="btn btn-sm readMore"> <p>read more</p> <img src={BlueArrowDown} alt="arrow down" /></button>
            </div>

            </div>
            </section>
        );
    }
}

export default HomePage;