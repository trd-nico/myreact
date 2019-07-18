import React, { Component } from 'react'
import { Modal} from 'react-bootstrap';

export default class DashBoardActivity2 extends Component {
    render() {
        if(!this.props.show) {
            return null;
          }
        return (
            <section id="dashBoardActivity2">
                <Modal dialogClassName="modal-contents" show={this.props.show} onHide={this.props.onClose} >
                    <div class="requestInfo">
                        <Modal.Header closeButton  onClick={this.handleClose}>
                            <p class="time-content">2019/04/03 10:00</p>
                        </Modal.Header>
                        <Modal.Body>
                            <p class="title-content">運営からのお知らせ</p>
                            <p class="body-content">４月12日(土)の22時から翌3時までの間にシステムアップデートを実施いたします。その間システムが利用できませんので、ご了承お願い申し上げます。</p>
                        </Modal.Body>
                    </div>
                </Modal>
            </section>
        )
    }
}
