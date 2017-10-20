import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import moment from 'moment';


let toRight = {
  float: 'right'
}


let linkStyle = {
  textDecoration: 'none'
}
const ActionInfo = (props) => (<span style={toRight}>{props.children}</span>);


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`} style={linkStyle}>
    <ListItem
      rightIcon={<ActionInfo>{amount/100}$</ActionInfo>}
      primaryText={description}
      secondaryText={moment(createdAt).format("MMM Do YY")}
    />
  </Link>
  </div>
);

export default ExpenseListItem;


{/* <Link to={`/edit/${id}`}>
<h3>{description}</h3>
</Link>
<p>{amount} - {createdAt}</p> */}
