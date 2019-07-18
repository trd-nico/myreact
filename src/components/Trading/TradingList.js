import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { Photo1, Photo2, Photo3, Photo4, RefreshIcon } from "../../Assets";

const productImages = [
	{
		original: Photo1,
		description: "商品画像"
	},
	{
		original: Photo2,
		description: "商品画像"
	},
	{
		original: Photo3,
		description: "商品画像"
	},
	{
		original: Photo4,
		description: "商品画像"
	}
];

const fishermanImages = [
	{
		original: Photo1,
		description: "漁師名/漁船　画像"
	},
	{
		original: Photo2,
		description: "漁師名/漁船　画像"
	},
	{
		original: Photo3,
		description: "漁師名/漁船　画像"
	},
	{
		original: Photo4,
		description: "漁師名/漁船　画像"
	}
];

class TradingList extends Component {
	render() {
		return (
			<div class="ml-5 mr-5 mt-4">
				<div class="row align-items-end">
					<div class="col-6">
						<div class="float-left">
							<p class="s1 parag">
								<img src={RefreshIcon} class="mr-2"/>
								取引中
							</p>
							<p class="s2 parag">玄海産 真あじ</p>
							<p class="parag">300g x 100尾</p>
						</div>
					</div>
					<div class="col-6">
						<p class="price float-right">¥50,000</p>
					</div>
				</div>
				<div class="mt-2">
					<ImageGallery 
						items={productImages} 
						showBullets={true} 
						showPlayButton={false}
						showFullscreenButton={false}
						showThumbnails={false}
						showNav={false}
					/>
				</div>
				<div class="mt-4">
					<p class="descrp">
						商品の説明が入ります。商品の説明が 入ります。商品の説明が入ります。 
						商品の説明が入ります。商品の説明が 入ります。商品の説明が入ります。 
						商品の説明が入ります。商品の説明が 入ります。商品の説明が入ります。
					</p>
				</div>
				<div class="mt-5">
					<p class="fname text-center">
						漁師名/漁船名 ：大漁丸
					</p>
				</div>
				<div class="mt-2">
					<ImageGallery 
						items={fishermanImages} 
						showBullets={true} 
						showPlayButton={false}
						showFullscreenButton={false}
						showThumbnails={false}
						showNav={false}
					/>
				</div>
				<div class="mt-5">
					<Tables/>
				</div>
				<div class="mt-2 p-3">
					<div class="row">
						<div class="col-6 text-center">
							<button class="btn btn-trading btn-block">受注確認</button>
						</div>
						<div class="col-6 text-center">
							<button class="btn btn-no-color btn-block">受注確認</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function Tables () {
	return (
		<div>
			<table class="trading-table table table-bordered">
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

export default TradingList;