import React, { Fragment } from "react";
import "./style/LinkTree.css";

const LinkList = (props) => {
  return (
    <Fragment>
      <a className="list" target="_blank" rel="noreferrer" href={props.links}>
        {props.name}
      </a>
    </Fragment>
  );
};

export default LinkList;
