import React, { Component } from 'react'

export default class DashboardTable extends Component {
    render() {
        return (
            <table class="table table-bordered">
            <tbody>
                <tr>
                <td>分類</td>
                <td>青身魚</td>
                </tr>
                <tr>
                <td>魚種</td>
                <td>真あじ</td>
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
        )
    }
}
