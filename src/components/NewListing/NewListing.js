import React, { Component } from 'react';
import './NewListing.css';

class NewListing extends Component {
    render() {
        return (
            <section id="new_list">
        <div class="row">
            <img src="" alt="NO IMAGE" />
            <div class="col-6 text-center">
            <button class="btn btn-trading btn-block">画像を登録</button>
            <a id="different">* 最大4つの画像をアップロードできます</a>
            </div>
            
            
        </div>
        <div class="title_input">
            <a class="title">分類 <sub>*</sub></a><br />
            <input type="text" placeholder="青身魚"></input>
        </div>
        <div class="title_input">
            <a class="title">魚種 <sub>*</sub></a><br />
            <input type="text" placeholder="真あじ"></input>
        </div>
        <div class="title_input">
            <a class="title">刺身可 </a><br />
            <div>
                <div></div>
                <a>X</a>
            </div>
        </div>
        <div class="title_input">
            <a class="title">水揚げ地 <sub>*</sub></a><br />
            <input type="text" placeholder="長浜市場"></input>
        </div>
        <div class="title_input">
            <a class="title">漁場<sub>*</sub></a><br />
            <input type="text" placeholder="長浜市場"></input>
        </div>
        <div class="title_input">
            <a class="title">漁船名 / 漁師名 <sub>*</sub></a><br />
            <input type="text" placeholder="長浜市場"></input>
        </div>
        <div class="title_input">
            <a class="title">漁船名/漁師(画像) <sub>*</sub></a><br />
            <input type="text" placeholder="長浜市場"></input>
        </div>
        <a id="different">* 最大4つの画像をアップロードできます</a>
        <div class="title_input">
            <a class="title">発注締切日時 <sub>*</sub></a><br />
            {/* <input type="text" placeholder="長浜市場"></input> */}
        </div>
        <div class="title_input">
            <a class="title">漁法</a><br />
            <input type="text" placeholder="一本釣り"></input>
        </div>
        <div class="title_input">
            <a class="title">商品の説明</a><br />
            <input type="text" placeholder="商品の説明が入ります。
                                            商品の説明が入ります。
                                            商品の説明が入ります。">

                                            </input>
        </div>
        <div class="title_input">
            <a class="title">取引単位 <sub>*</sub></a><br />
            <input type="text" placeholder="選択してください"></input>
        </div>
        
    </section>
        );
    }
}

export default NewListing;