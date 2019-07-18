import React, { Component } from 'react';
import './tradinghistory.css'
import{
	Search_Icon
} from "../../Assets";
import{
	ComboBox_ArrowDown
} from "../../Assets";

class TradingHistory extends Component {
    render() {
        return (
			<div className="row no-gutters">
				<div className="col-sm-12 px-0 py-0 mx-0 my-0 trading-history-wrapper" id="tradingHistory">
					<div className="search-download-wrapper">
						<div className="search-tool-wrapper ">
							<div className="search-bar d-flex align-items-center">
								<p>Search..</p>
							</div>
							<div className="search-icon-container">
								<img src={Search_Icon}></img>
							</div>
						</div>

						<div className="csv-download-button d-flex justify-content-center align-items-center">
							<p>CSVダウンロード</p>
						</div>

					<div className="date-wrapper">
						<div className="delivery-date d-flex justify-content-center align-items-center">
							<h6>納品日</h6>						
							<img src={ComboBox_ArrowDown}></img>
							<p>2010 年 5月</p>
						</div>
						<div className="closing-date d-flex justify-content-center align-items-center">
							<h6>納品日</h6>						
							<img src={ComboBox_ArrowDown}></img>
							<p>2010 年 5月</p>
						</div>
					</div>

					<div className="container">
						<div className="first-table">
							<table class="first-combo-table">
								<tr>
									<td>評価済</td>
									<td>評価済</td>
									<td>評価済</td>
									<td>評価済</td>
								</tr>
								<tr>
									<td>評価済</td>
									<td>評価済</td>
									<td>評価済</td>
									<td>評価済</td>
								</tr>
							</table>
						</div>
					</div>

					<div className="second-table">
						<table class="second-combo-table">
							<tr>
								<td>評価済</td>
								<td>2019/09/10</td>
								<td>2019/09/15</td>
								<td>発送済</td>
							</tr>
							<tr>
								<td>真あじ</td>
								<td>¥2000</td>
								<td>Xマート社</td>
								<td>小倉倉庫</td>
							</tr>
						</table>
					</div>

					<div className="third-table">
						<table class="third-combo-table">
							<tr>
								<td>評価済</td>
								<td>2019/09/10</td>
								<td>2019/09/15</td>
								<td>発送済</td>
							</tr>
							<tr>
								<td>真あじ</td>
								<td>¥2000</td>
								<td>Xマート社</td>
								<td>小倉倉庫</td>
							</tr>
						</table>
					</div>

					<div className="fourth-table">
						<table class="fourth-combo-table">
							<tr>
								<td>評価済</td>
								<td>2019/09/10</td>
								<td>2019/09/15</td>
								<td>発送済</td>
							</tr>
							<tr>
								<td>真あじ</td>
								<td>¥2000</td>
								<td>Xマート社</td>
								<td>小倉倉庫</td>
							</tr>
						</table>
					</div>

					<div className="fifth-table">
						<table class="fifth-combo-table">
							<tr>
								<td>評価済</td>
								<td>2019/09/10</td>
								<td>2019/09/15</td>
								<td>発送済</td>
							</tr>
							<tr>
								<td>真あじ</td>
								<td>¥2000</td>
								<td>Xマート社</td>
								<td>小倉倉庫</td>
							</tr>
						</table>
					</div>

					</div>	
				</div>
			</div>
        );
    }
}

export default TradingHistory;