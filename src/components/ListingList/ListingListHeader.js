import React, { Component } from 'react';
import ListCarousel from '../RequestList/RequestListCarousel';
import '../RequestList/RequestList.css';
import BidExhibitionModal from './BidExhibitionModal';

class ListingListHeader extends Component {
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
			<section id="listing_list">
                 <BidExhibitionModal show={this.state.isOpen}
                onClose={this.toggleModal}>
              </BidExhibitionModal>
        <div class="pt-4">
        
        <div class="ml-5 mr-5 mt-4">
            <div class="row align-items-end">
                <div class="col-6">
                    <div class="float-left">
                        <p class="txt1"><i class="fa fa-shopping-cart"></i> 出品中</p>
                        <p class="txt2">玄海産 真あじ</p>
                        <p>300g x 100尾</p>
                    </div>
                </div>
                <div class="col-6">
                    <p class="money float-right">¥50,000</p>
                </div>
            </div>
            <ListCarousel />
            <p class="contentText">
            商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。<br />
            商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。<br />
            商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。
            </p>
            <p class="head">
                漁師名/漁船名 ：大漁丸
            </p>

        <ListCarousel />
        </div>
       
       
        <div class="mt-5">
            <Tables />
        </div>
       
        <div class="mt-2 p-3">
            <div class="row">
                <div class="col-6 text-center text-button">
                    <button class="btn btn-trading btn-block"  onClick={this.toggleModal}>入札確認</button>
                </div>
                <div class="col-6 text-center text-button ">
                    <button class="btn btn-block text-gray">編集</button>
                </div>
            </div>
            <div class="row">
                <div class="col-6 text-center text-button ">
                    <button class="btn btn-block text-red">非公開にする</button>
                </div>
                <div class="col-6 text-center text-button ">
                    <button class="btn btn-default btn-block text-gray">再出品</button>
                </div>
            </div>
            <div class="row">
                <div class="col-6 text-center text-button">
                    <button class="btn btn-block text-red">削除</button>
                </div>
            </div>
        </div>
        <hr>
        </hr>
        {/* Next section after line break*/}
        <div class="ml-5 mr-5 mt-4">
            <div class="row align-items-end">
                <div class="col-6">
                    <div class="float-left">
                        <p class="txt1"><i class="fa fa-shopping-cart"></i> 出品中</p>
                        <p class="txt2">玄海産 真あじ</p>
                        <p>300g x 100尾</p>
                    </div>
                </div>
                <div class="col-6">
                    <p class="money float-right">¥50,000</p>
                </div>
            </div>
            <ListCarousel />
            <div class="mt-5">
            <p class="contentText">
                商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。<br />
                商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。<br />
                商品の説明が入ります。商品の説明が入ります。商品の説明が入ります。
            </p>
            </div>
            <p class="head">
            漁師名/漁船名 ：大漁丸
            </p>
            <ListCarousel />
        </div>
        <div class="mt-5">
            <Tables />
        </div>
        <div class="mt-2 p-3">
            <div class="row">
                <div class="col-6 text-center text-button">
                    <button class="btn btn-trading btn-block" >入札確認</button>
                </div>
                <div class="col-6 text-center text-button ">
                    <button class="btn btn-block text-gray">編集</button>
                </div>
            </div>
            <div class="row">
                <div class="col-6 text-center text-button ">
                    <button class="btn btn-block text-red">非公開にする</button>
                </div>
                <div class="col-6 text-center text-button ">
                    <button class="btn btn-default btn-block text-gray">再出品</button>
                </div>
            </div>
            <div class="row">
                <div class="col-6 text-center text-button">
                    <button class="btn btn-block text-red">削除</button>
                </div>
            </div>
        </div>
    </div>
</section>

			
			

        );
    }
}
function Tables () {
	return (
		<div>
			<table class="table table-bordered">
				<tbody>
				<tr>
					<td>分類</td>
					<td>青身魚</td>
				</tr>
				<tr>
					<td>魚種</td>
					<td>魚種</td>
				</tr>
				<tr>
					<td>刺身可</td>
					<td>不可</td>
				</tr>
				<tr>
					<td>水揚げ地</td>
					<td>長浜市場</td>
				</tr>
				<tr>
					<td>漁場</td>
					<td>玄界灘</td>
				</tr>
				<tr>
					<td>発注締切日時</td>
					<td>2019/04/23 06:30</td>
				</tr>
				<tr>
					<td>漁法</td>
					<td>一本釣り</td>
				</tr>
				<tr>
					<td>取引単位</td>
					<td>尾</td>
				</tr>
				<tr>
					<td>１尾あたりのサイズ</td>
					<td>300g</td>
				</tr>
				<tr>
					<td>１ロットあたりの数</td>
					<td>100尾</td>
				</tr>
				<tr>
					<td>１ロットあたりの価格</td>
					<td>300g x 100尾 ¥50,000</td>
				</tr>
				<tr>
					<td>出品数</td>
					<td>10ロット</td>
				</tr>
				<tr>
					<td>支払いターム</td>
					<td>支払いターム10日</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
}
export default ListingListHeader;