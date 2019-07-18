import React, { Component } from "react";
import "../Nav/ToolBar.css";
import {
  Avatar,
  Icon,
  Assignment,
  Assignment_Turn,
  Description,
  Keyboard_arrow_down,
  Library_book,
  Offline_pin,
  Receipt,
  Power_Setting,
  Setting,
  Speaker_Notes,
  Star,
  ArrowDown,
  ErrorIcon,
  PersonIcon,
  LockIcon,
  MessageIcon,
  OutlineIcon,
  Notification,
  notification,
  Switch,
  Knob,
  White_Background
} from "../../Assets";
import UserProfileModal from '../UserProfile/UserProfileModal';

import { DrawerItems } from "..";

const drawerList = {
  personName : 'アリム・シュレスタ',
  email : 'shrestha.areem@gmail.com'
}
class SlideDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  state = {
    enable: false
  };
  handleShow = () => {
    this.setState({
      enable: !this.state.enable
    });
  };




  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>

        {/* Use component and assign ref */}
        <UserProfileModal show={this.state.isOpen}
                onClose={this.toggleModal}>
              </UserProfileModal>
        {/* Div on where to click so modal will display */}
        <div className="profilebox" >

		<div className="slide-header-wrapper" id="slide-drawer">
          	<div className="txtProfileBox">
		  		<div className="left">現在 : セラーモード</div>
				<div className="right"><div className="rightContent">モード変更</div>
					<div className="custom-control custom-switch">
					<input type="checkbox" className="custom-control-input" id="customSwitches"/>
					<label className="custom-control-label" for="customSwitches"></label>
					</div>
				</div>
		  	</div>
		  {/* <div className="txtModeChange">モード変更</div> */}
		  <div className="switch-wrapper">
			{/* <img src={Knob}></img> */}
			{/* <img src={White_Background}></img> */}
		  </div>
		</div>
          <div className="justifyprofilebox">
            <div className="profileboxInner">
              <img alt="person logo" src={Avatar} onClick={this.toggleModal}/>
              <p className="txtEmail">{drawerList.email}</p>
         </div>
            
          </div>
        </div>
        <DrawerItems
          logo={Star}
          title="ホーム"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'ホーム')}
          route="/home"
          btn="btn"
        />
        <DrawerItems
          logo={Library_book}
          title="新規出品"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'新規出品')}
          route="/listing"
          btn="btn"
        />
        <DrawerItems
          logo={Assignment}
          title="出品中リスト"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'出品中リスト')}
          route="/listinglist"
          btn="btn"
        />
        <DrawerItems
          logo={Description}
          title="取引中"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'取引中')}
          route="/trading"
          btn="btn"
        />
        <DrawerItems
          logo={Assignment_Turn}
          title="取引履歴"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'取引履歴')}
          route="/tradinghistory"
          btn="btn"
        />
        <DrawerItems
          logo={Receipt}
          title="リクエスト"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'リクエスト')}
          route="/requestlist"
          btn="btn"
        />
        <DrawerItems
          logo={Notification}
          title="お知らせ配信"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'お知らせ配信')}
          route="/notification"
          btn="btn"
        />
		<DrawerItems
          logo={notification}
          title="問い合わせ"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'問い合わせ')}
          route="/inquiry"
          btn="btn"
        />
        <DrawerItems
          logo={Offline_pin}
          title="送料設定"
          onClick={this.props.drawerToggle}
          onClick1={this.props.changeTitle.bind(this,'送料設定')}
          route="/shippingsetting"
          btn="btn"
        />
        {/* <DrawerItems
		  logo={Switch}
          title="設定"
          onClick={this.props.drawerToggle}
          route="/shippingsetting"
          btn="btn"
        /> */}
        <div className="DrawerItems">
          <img alt="drawer logo" src={Switch} />
          <button className="btn settingBtn" onClick={this.handleShow}>
            設定
          </button>
          <button onClick={this.handleShow} className="img-droplogo">
            <img
              alt="drawer dropdown logo"
              src={this.state.enable ? ArrowDown : Keyboard_arrow_down}
            />
          </button>
        </div>
        {this.state.enable ? (
          <div style={{ backgroundColor: "#7FB9EB" }}>
            <DrawerItems
              logo={PersonIcon}
              title="プロフィール更新"
              onClick={this.props.drawerToggle}
              onClick1={this.props.changeTitle.bind(this,'プロフィール更新')}
              route="/changeprofile"
              btn="btnInner"
            />
            <DrawerItems
              logo={MessageIcon}
              title="メールアドレス変更"
              onClick={this.props.drawerToggle}
              onClick1={this.props.changeTitle.bind(this,'メールアドレス変更')}
              route="/emailaddresschange"
              btn="btnInner"
            />
            <DrawerItems
              logo={LockIcon}
              title="パスワード変更"
              onClick={this.props.drawerToggle}
              onClick1={this.props.changeTitle.bind(this,'パスワード変更')}
              route="/passwordupdate"
              btn="btnInner"
            />
            <DrawerItems
              logo={ErrorIcon}
              title="利用規約"
              onClick={this.props.drawerToggle}
              onClick1={this.props.changeTitle.bind(this,'利用規約')}
              route="/termsofservice"
              btn="btnInner"
            />
            <DrawerItems
              logo={OutlineIcon}
              title="個人情報保護方針"
              onClick={this.props.drawerToggle}
              onClick1={this.props.changeTitle.bind(this,'個人情報保護方針')}
              route="/privacypolicy"
              btn="btnInner"
            />
          </div> 
        ) : null} 
        <DrawerItems
          logo={Power_Setting}
          title="ログアウト"
          onClick={this.props.drawerToggle}
          route="/"
          btn="btn"
        />
      </nav>
    );
  }
}

export default SlideDrawer;
