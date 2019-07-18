import React, { Component } from 'react';
import DeleteNotifyModal from '../Modal/DeleteNotifyModal';

class NotificationList extends Component {
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
				<div class="mt-5">
					<table class="notify-table table">
						<thead>
						<tr>
							<th>配送日</th>
							<th>内容</th>
							<th></th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>2019/04/03 10:10</td>
							<td>通知の説明が含まれています。</td>
							<td>
								<button class="btn btn-notify-delete btn-sm" onClick={this.toggleModal}>削除</button>
							</td>
						</tr>
						<tr>
							<td>2019/04/04 10:10</td>
							<td>通知の説明が含まれています。</td>
							<td>
								<button class="btn btn-notify-delete btn-sm" onClick={this.toggleModal}>削除</button>
							</td>
						</tr>
						<tr>
							<td>2019/04/05 10:10</td>
							<td>通知の説明が含まれています。</td>
							<td>
								<button class="btn btn-notify-delete btn-sm" onClick={this.toggleModal}>削除</button>
							</td>
						</tr>
						<tr>
							<td>2019/04/06 10:10</td>
							<td>通知の説明が含まれています。</td>
							<td>
								<button class="btn btn-notify-delete btn-sm" onClick={this.toggleModal}>削除</button>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
				<DeleteNotifyModal show={this.state.isOpen} onClose={this.toggleModal}/>
			</div>
		);
	}
}

export default NotificationList;