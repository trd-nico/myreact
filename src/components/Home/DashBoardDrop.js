import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';
 class DashBoardDrop extends Component {
    render() {
        return (
            <Dropdown>
                    <Dropdown.Toggle className="dashboard-dropdown" id="dropdown-basic">
                        すべて
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
        </Dropdown>
        )
    }
}
export default DashBoardDrop;