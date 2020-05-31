import React from "react";

import styles from "./Links.module.css";

const links = [
  {
    id: 1,
    name: "Link 1",
    path: "www.google.ro",
  },
  {
    id: 2,
    name: "Link 2",
    path: "www.google.ro",
  },
  {
    id: 3,
    name: "Link 3",
    path: "www.google.ro",
  },
  {
    id: 4,
    name: "Link 4",
    path: "www.google.ro",
  },
];

const Links = () => {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.id} className={styles.link}>
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
