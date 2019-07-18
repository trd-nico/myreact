import React, { Component } from 'react';
import "./ListingList.css";
import ListingListHeader from "./ListingListHeader";
import ListingContent from "./ListingContent";
import { ArrowIcon } from "../../Assets";


class ListingList extends Component {
    render() {
        return (
            <div>
                <ListingListHeader/>
            <div class="pt-5">
                <ListingContent title={'出品中'} status={'under_exhibition'}/>
                <div class="horizontal-line ml-5 mr-5"></div>
                <ListingContent title={'非公開'} status={'private'}/>
                <div class="mr-5 ml-5 mt-4 mb-5">
				    <button class="btn btn-trading-readmore btn-block">
                        <span>read more</span>
                        <img src={ArrowIcon} class="mx-auto d-block mt-2"/>
                    </button>
                </div>
            </div>
            </div>
        );
    }
}

export default ListingList;