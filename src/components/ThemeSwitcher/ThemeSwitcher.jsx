/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
// import useDarkSide from "../../hooks/useDarkSide";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../app/feature/theme/themeSlice";
// import { toggleMode } from "../app/feature/theme/themeSlice";

export default function ThemeSwitcher({ themeSwitcher }) {
  //   const [colorTheme, setTheme] = useDarkSide();
  //   const [darkSide, setDarkSide] = useState(
  //     colorTheme === "light" ? true : false
  //   );

  const theme = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = (checked) => {
    // setTheme(colorTheme);
    // setDarkSide(checked);
    dispatch(toggleMode());
  };

  const defaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: "50%",
        cy: "23%",
      },
      svg: {
        transform: "rotate(40deg)",
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "100%",
        cy: "0%",
      },
      svg: {
        transform: "rotate(90deg)",
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  return (
    <>
      <div className={themeSwitcher}>
        <DarkModeSwitch
          checked={theme}
          onChange={toggleDarkMode}
          size={35}
          moonColor="yellow"
          sunColor="orange"
          animationProperties={defaultProperties}
          style={{
            verticalAlign: "middle",
          }}
        />
      </div>
    </>
  );
}
