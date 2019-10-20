import React from "react";
import styles from "styled-components";


interface ITalkProps {
  title: string;
  speaker: string;
  location: string;
}

const Menu = styles.ul`
  list-style: none;
`;

const MenuItem = styles.li`
  padding: 5px 10px;
  margin-right: 10px;
  display: inline-block;
  border: 1px solid #999;
  min-width: 150px;
  border-radius: 5px 5px 0px 0px;
`;

const Talk: React.FC<ITalkProps> = ({ title, speaker, location }) => (
  <p>
    <MenuItem>
      {title} < br /> {speaker} < br /> {location}
    </MenuItem>
  </p>
);

export default Talk;