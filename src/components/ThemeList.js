import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllThemes } from "../actions/themeActions";

const ThemeList = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllThemes());
    console.log(getAllThemes());
  }, []);

  const renderThemes = (themes) => {
    let myThemes = [];
    for (let theme of themes) {
      myThemes.push(
        <li key={theme.name}>
          {theme.name}
        </li>
      );
    }
    return myThemes;
  };
  return (
    <div>
      <ul>{renderThemes(theme.themes)}</ul>
    </div>
  );
};

export default ThemeList;
