import React from "react";
import { Dropdown } from 'react-bootstrap';
import './UserDropdown.css';

const UserDropdown = ({ dropArray, subject, whenClicked }) => {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg" block>
                    {subject}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {dropArray.map((week) => (
                        <Dropdown.Item href="#" onSelect={() => whenClicked(week)}>{week.week}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div >
    );
};

export default UserDropdown;