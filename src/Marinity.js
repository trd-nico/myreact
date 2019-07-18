import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  BackDrop,
  Drawer,
  DraweItems,
  SlideDrawer,
  NewListing,
  Inquiry,
  NotificationDelivery,
  RequestList,
  ChangePassword,
  ChangeProfile,
  EmailAddressChange,
  PrivacyPolicy,
  TermsOfService,
  Trading,
  TradingHistory,
  ToolBar,
  MessageList,
  ListingList,
  ShippingSettings,
  MessageContent
} from "./components";
import {Mail} from './Assets';

export default class Marinity extends Component {
  constructor(props) {
    super(props);
    var title  = localStorage.getItem('title')!=null?localStorage.getItem('title'):'ホーム';
    this.state = { title: title,sideDrawerOpen: false };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(title){
    console.log(title);
    this.setState({
      title:title,
    })
    localStorage.setItem('title',title);
  }

  drawerToggleClickHandler = () => {
    
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <React.Fragment>
        <ToolBar drawerToggle={this.drawerToggleClickHandler} title={this.state.title}/>
        <SlideDrawer
          show={this.state.sideDrawerOpen}
          drawerToggle={this.drawerToggleClickHandler}
          changeTitle={this.changeTitle}
        />
        {backDrop}
        <main style={{ marginTop: "100px" }}>
          <Switch>
            <Route path="/home" exact strict component={HomePage} />
            <Route path="/listing" exact strict component={NewListing} />
            <Route path="/inquiry" exact strict component={Inquiry} />
            <Route path="/requestlist" exact strict component={RequestList}/>
            <Route path="/notification" exact strict component={NotificationDelivery} />
            <Route path="/passwordupdate" exact strict component={ChangePassword} />
            <Route path="/changeprofile" exact strict component={ChangeProfile} />
            <Route path="/emailaddresschange" exact strict component={EmailAddressChange} />
            <Route path="/privacypolicy" exact strict  component={PrivacyPolicy} />
            <Route path="/termsofservice" exact strict  component={TermsOfService} />
            <Route path="/trading" exact strict  component={Trading} />
            <Route path="/tradinghistory" exact strict  component={TradingHistory} />
            <Route path="/messages" exact strict  component={MessageList} />
            <Route path="/listinglist" exact strict  component={ListingList} />
            <Route path="/shippingsetting" exact strict  component={ShippingSettings} />
            <Route path="/messageContent" exact strict  component={MessageContent} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
