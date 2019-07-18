import React, { Component } from 'react';
import DashBoardActivity from './DashBoardActivity';



  
class CardComponent extends Component {
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
        var count = 0;
            return ( this.props.data.map( value => { 
                count = count + 1;
                return ( <div class="card-body">
                    {count < 2 ? <DashBoardActivity show={this.state.isOpen} onClose={this.toggleModal}/>: ""}
                 
                        <ul class="list-group">
                            <div class="items-dashboard">       
                                <li class="list-group-item" onClick={this.toggleModal}>
                                        <div class="row">
                                            <div class="col-6">
                                                <h5>{value.time}</h5>
                                            </div>
                                            <div class="col-6 actions">
                                                <h5 style={{color:value.color}}>{value.title}</h5>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-3" style={{'text-align':'center'}}>
                                                <img style={{width:'34px','margin-top':'10px'}} src={value.img} alt="arrow down" />
                                            </div>
                                            <div class="col-9" style={{padding:'0'}}>
                                                <p>
                                                {value.content}
                                                </p>
                                            </div>
                                        </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                )
            })
        )
        
    }
}
export default CardComponent;