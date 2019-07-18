import React, { Component } from 'react';
import "./Trading.css";
import TradingList from "./TradingList"
import { ArrowIcon } from "../../Assets";
class Trading extends Component {
    render() {
        return (
            <div class="pt-4">
                <div class="row">
					<div class="col text-center">
						<button class="btn btn-trading">詳細検索</button>
					</div>
				</div>
                <TradingList/>
                <div class="trading-horizontal-line ml-5 mr-5 mt-5"></div>
                <TradingList/>
                <div class="mr-5 ml-5 mt-3 mb-5">
				    <button class="btn btn-trading-readmore btn-block">
                        <span>read more</span>
                        <img src={ArrowIcon} class="mx-auto d-block mt-2"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Trading;