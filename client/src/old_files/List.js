import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { remoteArticles: state.remoteArticles };
};

const ConnectedList = ({ remoteArticles }) => (
  <ul>
    {remoteArticles.map(el => (
      <li key={el._id}>{el.country} &nbsp; {el.name}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default { List };
