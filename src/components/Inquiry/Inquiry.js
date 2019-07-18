import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './inquiry.css';
import InquiryModal from '../Modal/InquiryModal';

class Inquiry extends Component {
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
                <div className="container inquiry-container pl-4 pr-4 pt-3">
                    <form id="inquiry-form">
                        <FormGroup>
                            <label for="subject">件名</label>
                            <Input type="text" placeholder="件名" name="subject" id="subject"/>
                        </FormGroup>
                        <FormGroup>
                            <label for="details">詳細</label>
                            <Input type="textarea" name="details" id="details" className="inquiry-textarea" placeholder="お問い合わせ内容を記入ください。"/>
                        </FormGroup>
                        <FormGroup className="btn-inquiry-group">
                            <button type="button" className="inquiry-submit-btn" onClick={this.toggleModal}>送信確認</button>
                        </FormGroup>
                    </form>
                </div>
                <InquiryModal show={this.state.isOpen} onClose={this.toggleModal}/>
            </div>
        );
    }
}

export default Inquiry;