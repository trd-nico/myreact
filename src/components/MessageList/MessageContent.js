import React, { Component } from 'react';
import{avatar_1, avatar_2, send_icon} from '../../Assets'

function GetMessages(props) {
    return (
      <div class="messageContainer mt-5">
        { props.messages.map((msg, index, arr) => 
            <div key={index} class={'w-100 mt-3 pl-5 pr-5'}>
                {msg.type == 'ME' ? (
                    <div class="msg-right">
                        <span>{msg.content}</span>
                        <img src={msg.avatar} class="ml-4"  />
                        { index < (arr.length - 1) &&
                            <div class="msg-horizontal-line mt-4 mb-4"></div>
                        } 
                    </div>
                ) : (
                    <div class="msg-left">
                        <img src={msg.avatar} class="mr-4" />
                        <span>{msg.content}</span>
                        { index < (arr.length - 1) &&
                            <div class="msg-horizontal-line mt-4 mb-4"></div>
                        } 
                    </div>
                )}
            </div>
        )}
        <div class="float-right msg-bottom-spacing">
            {/* extra space */}
        </div>
      </div>
    )
}

class MessageContent extends React.Component {
    state = {
        messages: [
            {type: 'OTHER', avatar: avatar_1, content: 'はじめまして、よろしく願いします!'},
            {type: 'ME',    avatar: avatar_2, content: 'よろしくお願いします!'}
        ],
        messageValue: ''
    }
    onSendMessage = () => {
        var newMsg = this.state.messages.slice(); 
        newMsg.push({type: 'ME',    avatar: avatar_2, content: this.state.messageValue})
        this.setState({messages:newMsg, messageValue: ''})
    }
    onMessageChange = (event) => {
        this.setState({messageValue: event.target.value});
    }
    render() {
        return (
            <div>
                <div class="pt-3">
                    <p class="message-sender">Xマート株式会社</p>
                    <GetMessages messages={this.state.messages} />        
                </div>
                <div class="form-group sender-textbox w-100">
                    <input type="text" class="form-control form-control-lg w-75" 
                        placeholder="メッセージを入力" id="msg" name="msg"
                        value={this.state.messageValue}
                        onChange={this.onMessageChange}
                    />
                    <button class="ml-2" onClick={this.onSendMessage}>
                        <img src={send_icon} height="75"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default MessageContent;