import React, { Component } from 'react';
import { Delete_Icon, ExpandLess, ExpandMore } from '../../Assets';
import ShippingSettingModal from '../Modal/ShippingSettingModal';
import ShippingSettingSuccess from '../Modal/ShippingSettingSuccess';
import './ShippingSetting.css';

class ShippingSettings extends Component {
	constructor(props) {
        super(props);
    
        this.state = { isOpen: false,isOpenSecond:false };
      }
    
      toggleModal = modalType => () => {
		if (modalType === "modal") {
			this.setState({
				isOpen: true,
			});
		}
		else if (modalType === "success") {
            this.setState({
                isOpen: false,
                isOpenSecond:true
            });
            console.log(this)
		}
		else if (modalType === "confirm") {
            this.setState({
                isOpen: false,
                isOpenSecond:false
            });
            console.log(this)
		}
		
      }
    render() {
		console.log('Shipp');
		return (
			<div className="shippingSetting container">
			<ShippingSettingModal show={this.state.isOpen}
                onClose={this.toggleModal}
				>
              </ShippingSettingModal>

			  <ShippingSettingSuccess show={this.state.isOpenSecond}
                onClose={this.toggleModal}>
              </ShippingSettingSuccess>
			  
				<div className="content">
					<div className='addNew'>
						<button className="btn-primary">新規追加</button>
					</div>
					<table className="table table-bordered list react-bootstrap-table2 shippingsetting-header-table">
						<tr>
							<th>地域<div className="arrows"><img className="up" src={ExpandLess} alt="" /><img className="down" src={ExpandMore} alt="" /></div></th>
							<th>発送方法<div className="arrows"><img className="up" src={ExpandLess} alt="" /><img className="down" src={ExpandMore} alt="" /></div></th>
							<th>発送タイプ<div className="arrows"><img className="up" src={ExpandLess} alt="" /><img className="down" src={ExpandMore} alt="" /></div></th>
							<th>量<div className="arrows"><img className="up" src={ExpandLess} alt="" /><img className="down" src={ExpandMore} alt="" /></div></th>
							<th>金額<div className="arrows"><img className="up" src={ExpandLess} alt="" /><img className="down" src={ExpandMore} alt="" /></div></th>
						</tr>
						<tr>
							<td>関東</td>
							<td>ヤマト/クール</td>
							<td>冷凍</td>
							<td>200kg</td>
							<td>¥15,000</td>
							<td><img src={Delete_Icon} onClick={this.toggleModal("modal")}></img></td>
						</tr>
						<tr>
							<td>関東</td>
							<td>佐川/クール</td>
							<td>冷凍</td>
							<td>200kg</td>
							<td>¥12,000</td>
							<td><img src={Delete_Icon} onClick={this.toggleModal("modal")}></img></td>
						</tr>
						<tr>
							<td>関東</td>
							<td>ヤマト</td>
							<td>常温</td>
							<td>200kg</td>
							<td>¥10,000</td>
							<td><img src={Delete_Icon} onClick={this.toggleModal("modal")}></img></td>
						</tr>
						<tr>
							<td>関東</td>
							<td>佐川/空輸</td>
							<td>冷凍</td>
							<td>200kg</td>
							<td>¥25,000</td>
							<td><img src={Delete_Icon} onClick={this.toggleModal("modal")}></img></td>
						</tr>
						<tr>
							<td>九州</td>
							<td>ヤマト/クール</td>
							<td>冷凍</td>
							<td>200kg</td>
							<td>¥5,000</td>
							<td><img src={Delete_Icon} onClick={this.toggleModal("modal")}></img></td>
						</tr>
						<tr>
							<td>九州</td>
							<td>ヤマト</td>
							<td>常温</td>
							<td>200kg</td>
							<td>¥3,000</td>
							<td><img src={Delete_Icon} onClick={this.toggleModal("modal")}></img></td>
						</tr>

					</table>
					<div className="readMore">
						<p>read more</p>
						<img src={ExpandMore} alt="" />
					</div>
				</div>
			</div>
		);
    }
}

export default ShippingSettings;