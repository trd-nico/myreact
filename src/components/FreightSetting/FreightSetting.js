import React, { Component } from 'react';
import './FreightSetting.css';
import{
    ExpandLess,
  ExpandMore
} from '../../Assets';
class Inquiry extends Component {
    render() {
        
        return (
            <div className="freightSetting container"  >
                <div className="content">
                    <div className='addNew'>
                        <button className="btn-primary">新規追加</button>
                    </div>
                    <table className="table table-bordered list react-bootstrap-table2">
                        <tr>
                            <th>地域 <div className="arrows"><img className="up" src={ExpandLess} alt=""/><img className="down" src={ExpandMore} alt=""/></div></th>
                            <th>魚種<div className="arrows"><img className="up" src={ExpandLess} alt=""/><img className="down"  src={ExpandMore} alt=""/></div></th>
                            <th>量<div className="arrows"><img className="up" src={ExpandLess} alt=""/><img className="down"  src={ExpandMore} alt=""/></div></th>
                            <th>金額<div className="arrows"><img className="up" src={ExpandLess} alt=""/><img className="down"  src={ExpandMore} alt=""/></div></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>真あじ</td>
                            <td>真あじ</td>
                            <td>~20k</td>
                            <td>¥2000</td>
                            <td><button className="btn-primary edit">編集</button><button className="btn-danger delete">削除</button></td>
                        </tr>
                        <tr>
                            <td>真あじ</td>
                            <td>真あじ</td>
                            <td>~20k</td>
                            <td>¥2000</td>
                            <td><button className="btn-primary edit">編集</button><button className="btn-danger delete">削除</button></td>
                        </tr>
                        <tr>
                            <td>真あじ</td>
                            <td>真あじ</td>
                            <td>~20k</td>
                            <td>¥2000</td>
                            <td><button className="btn-primary edit">編集</button><button className="btn-danger delete">削除</button></td>
                        </tr>
                        <tr>
                            <td>真あじ</td>
                            <td>真あじ</td>
                            <td>~20k</td>
                            <td>¥2000</td>
                            <td><button className="btn-primary edit">編集</button><button className="btn-danger delete">削除</button></td>
                        </tr>
                        <tr>
                            <td>真あじ</td>
                            <td>真あじ</td>
                            <td>~20k</td>
                            <td>¥2000</td>
                            <td><button className="btn-primary edit">編集</button><button className="btn-danger delete">削除</button></td>
                        </tr>
                        
                    </table>
                    <div className="readMore">
                        <p>read more</p>
                        <img src={ExpandMore} alt=""/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Inquiry;