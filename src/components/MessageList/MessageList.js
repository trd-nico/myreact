import React, { Component } from 'react';
import './messagelist.css';
import { Route } from 'react-router-dom';

const Messages = (props) => (
    <Route render={({ history}) => (
        <tr onClick={() => { history.push('/messageContent') }}>
            <td class="message-title">{props.title}</td>
            <td class="message-details">{props.details}</td>
            <td class="message-status">{props.status}</td>
        </tr>
    )} />
)

class MessageList extends React.Component {
    render() {
        return (
            <div class="pt-3">
                <table class="message-list table">
                    <thead></thead>
                    <tbody>
                        <Messages title="Xマート株式会社"
                            details="5月12日　09:30"
                            status="•"
                        />
                        <Messages title="Aマート株式会社"
                            details="5月12日　09:30"
                            status=""
                        />
                        <Messages title="Bマート株式会社"
                            details="5月12日　09:30"
                            status="•"
                        />
                        <Messages title="Yマート株式会社"
                            details="5月12日　09:30"
                            status=""
                        />
                        <Messages title="Dマート株式会社"
                            details="5月12日　09:30"
                            status="•"
                        />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MessageList;