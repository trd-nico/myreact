import React, { Component } from 'react';
import "./Notification.css";
import NotificationList from "./NotificationList";
import { ArrowIcon } from "../../Assets";
import AddNewNotifyModal from '../Modal/AddNewNotifyModal';

class NotificationDelivery extends Component {
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
        return (
            <div>
                <div class="p-4">
                    <div class="notify-card card">
                        <div class="card-body">
                            <button class="btn btn-notify-add float-right" onClick={this.toggleModal}>新規追加</button>
                            <NotificationList/>
                            <div class="mt-3">
                                <button class="btn btn-notify-readmore btn-block">
                                    <span>read more</span>
                                    <img src={ArrowIcon} class="mx-auto d-block mt-2"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <AddNewNotifyModal show={this.state.isOpen} onClose={this.toggleModal}/>
            </div>
        );
    }
}

export default NotificationDelivery;