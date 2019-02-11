import React from "react";
import { Dropdown } from 'react-bootstrap';
import './UserDropdown.css';

const UserDropdown = props => (
    <Dropdown className="dropdown">
        <Dropdown.Toggle variant="Primary" id="dropdown-basic" size="lg" block>
            Select a collection
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-0">WEEK 0: My Bookmarks</Dropdown.Item>
            <Dropdown.Item href="#/action-1">WEEK 1: HTML + Git + CSS</Dropdown.Item>
            <Dropdown.Item href="#/action-2">WEEK 2: CSS-Bootstrap</Dropdown.Item>
            <Dropdown.Item href="#/action-3">WEEK 3: Javascript</Dropdown.Item>
            <Dropdown.Item href="#/action-4">WEEK 4: JQuery</Dropdown.Item>
            <Dropdown.Item href="#/action-5">WEEK 5: Timers</Dropdown.Item>
            <Dropdown.Item href="#/action-6">WEEK 6: Ajax</Dropdown.Item>
            <Dropdown.Item href="#/action-7">WEEK 7: Firebase</Dropdown.Item>
            <Dropdown.Item href="#/action-8">WEEK 8: Project 1</Dropdown.Item>
            <Dropdown.Item href="#/action-9">WEEK 9: Portfolio update</Dropdown.Item>
            <Dropdown.Item href="#/action-10">WEEK 10: Node.js</Dropdown.Item>
            <Dropdown.Item href="#/action-11">WEEK 11: Javascript Constructors</Dropdown.Item>
            <Dropdown.Item href="#/action-12">WEEK 12: MySQL</Dropdown.Item>
            <Dropdown.Item href="#/action-13">WEEK 13: Express</Dropdown.Item>
            <Dropdown.Item href="#/action-14">WEEK 14: Handlebars</Dropdown.Item>
            <Dropdown.Item href="#/action-15">WEEK 15: Sequelize</Dropdown.Item>
            <Dropdown.Item href="#/action-16">WEEK 16: Project 2</Dropdown.Item>
            <Dropdown.Item href="#/action-17">WEEK 17: Mongo + Mongoose</Dropdown.Item>
            <Dropdown.Item href="#/action-18">WEEK 18: React</Dropdown.Item>
            <Dropdown.Item href="#/action-19">WEEK 19: Wordpress</Dropdown.Item>
            <Dropdown.Item href="#/action-20">WEEK 20: Java</Dropdown.Item>
            <Dropdown.Item href="#/action-21">WEEK 21: Project 3</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default UserDropdown;