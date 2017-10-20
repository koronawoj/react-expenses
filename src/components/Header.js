import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = () => (
  <header>
      <AppBar
        iconElementLeft={
          <div>
            <span>Expensify</span>
            <NavLink to="/" activeClassName="is-active" exact={true}>
              <FlatButton label="Dashboard" />
            </NavLink>
            <NavLink to="/create" activeClassName="is-active">
              <FlatButton label="Create Expense" hoverColor="transparent" />
            </NavLink>
          </div>
        }
      />
    {/* <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> */}
  </header>
);

export default Header;
