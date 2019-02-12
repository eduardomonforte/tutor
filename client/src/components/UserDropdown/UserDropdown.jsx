import React from "react";
import { Dropdown } from 'react-bootstrap';
import './UserDropdown.css';

const UserDropdown = ({ dropArray, week, whenClicked }) => {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg" block>
                    {week}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {dropArray.map((week) => (
                        <Dropdown.Item href="#" onSelect={() => whenClicked({ week: week.week })}>{week.week}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div >
    );
};

export default UserDropdown;