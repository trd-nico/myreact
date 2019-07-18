import React, { Component } from 'react';
import{
    ArrowMore,
	ArrowLess
} from '../../Assets';
class ShippingTable extends Component {
	render() {
		return (
			<div class="mt-5">
				<table class="shipping-table table">
					<thead>
					<tr>
						<th>
							<span>地域</span>
							<img class="less" src={ArrowLess}/>
							<img class="more" src={ArrowMore}/>
						</th>
						<th>
							<span>魚種</span>
							<img class="less" src={ArrowLess}/>
							<img class="more" src={ArrowMore}/>
						</th>
						<th>
							<span>量</span>
							<img class="less" src={ArrowLess}/>
							<img class="more" src={ArrowMore}/>
						</th>
						<th>
							<span>金額</span>
							<img class="less" src={ArrowLess}/>
							<img class="more" src={ArrowMore}/>
						</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>地域</td>
						<td>真あじ</td>
						<td>~20</td>
						<td>¥2000</td>
						<td>
							<button class="btn btn-shipping-edit btn-sm">編集</button>
							<button class="btn btn-shipping-delete btn-sm">削除</button>
						</td>
					</tr>
					<tr>
						<td>地域</td>
						<td>イカ</td>
						<td>~20</td>
						<td>¥2000</td>
						<td>
							<button class="btn btn-shipping-edit btn-sm">編集</button>
							<button class="btn btn-shipping-delete btn-sm">削除</button>
						</td>
					</tr>
					<tr>
						<td>地域</td>
						<td>タコ</td>
						<td>~20</td>
						<td>¥2000</td>
						<td>
							<button class="btn btn-shipping-edit btn-sm">編集</button>
							<button class="btn btn-shipping-delete btn-sm">削除</button>
						</td>
					</tr>
					<tr>
						<td>地域</td>
						<td>真鯛</td>
						<td>~20</td>
						<td>¥2000</td>
						<td>
							<button class="btn btn-shipping-edit btn-sm">編集</button>
							<button class="btn btn-shipping-delete btn-sm">削除</button>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default ShippingTable;