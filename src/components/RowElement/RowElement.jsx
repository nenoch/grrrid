import React from "react";
import styles from "./RowElement.module.css";

const RowElement = ({ children }) => (
  <div className={styles.RowElement}>{children}</div>
);

export default RowElement;