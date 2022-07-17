import PropTypes from "prop-types";
import React from "react";
import styles from "./list.module.scss";

const List = ({ unordered, listItems, title="", containerClass="",color }) => {
    console.log({color})
  const modifiedItems = listItems.map((item) => <li style={{color}}>{item}</li>);

  return (
    <div className={containerClass}>
      {unordered ? (
        <ul data-header={title} className={styles.common}>
          {modifiedItems}
        </ul>
      ) : (
        <ol data-header={title} className={styles.common}>
          {modifiedItems}
        </ol>
      )}
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string,
  unordered: PropTypes.bool.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  color: PropTypes.oneOf(["black" , "white", 'grey']).isRequired ,
  containerClass:PropTypes.string
};

export { List };
