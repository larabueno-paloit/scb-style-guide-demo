import React from 'react';
import Dropdown from 'react-simple-dropdown';
import './Dropdown.css';

var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

class DropdownMenu extends React.Component {
  render() {
    return (
      <Dropdown>
          <DropdownTrigger>Profile</DropdownTrigger>
          <DropdownContent>
              <img src="avatar.jpg" /> Username
              <ul>
                  <li>
                      <a href="/profile">Profile</a>
                  </li>
                  <li>
                      <a href="/favorites">Favorites</a>
                  </li>
                  <li>
                      <a href="/logout">Log Out</a>
                  </li>
              </ul>
          </DropdownContent>
      </Dropdown>
    )
  }
}

export default DropdownMenu;
