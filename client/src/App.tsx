import React, { useEffect, useState } from "react";
import useContextHook from "./context/useContextHook";
import "./App.css";
import { CardList, FluentFooter } from "./components/fluentUI";
import { IconButton, IIconProps, ThemeProvider } from "@fluentui/react";
import {
  StandardLuminance,
  baseLayerLuminance,
} from "@fluentui/web-components";
import GeneratorToolLayout from "./components/GeneratorTool";

const LightThemeIcon: IIconProps = { iconName: "Sunny" };
const DarkThemeIcon: IIconProps = { iconName: "ClearNight" };

const App = () => {
  const { state } = useContextHook();
  const [data, setData] = useState([]);
  const [isLight, setIsLight] = useState(true);
  const themeHandler = (l: boolean) => {
    setIsLight(!l);
    const app = document.getElementById("App") as HTMLElement;
    baseLayerLuminance.setValueFor(
      app,
      l ? StandardLuminance.DarkMode : StandardLuminance.LightMode
    );
  };
  const loadData = async () => {
    try {
      const response = await fetch("/api/azure/get-json/data/data.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const d = await response.json();
      setData(d); // Spread operator triggers observable
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle errors appropriately in your application context
    }
  };
  const postData = async () => {
    try {
      const response = await fetch("/api/azure/upload-json/data/data.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          {
            image: {
              url: "https://picsum.photos/200",
              altText: "some alt text",
            },
            title: "ABC",
            majorInititative: "sports",
            area: "sports v2",
            redirectUrl: "https://picsum.photos/200",
          },
          {
            image: {
              url: "https://picsum.photos/200",
              altText: "some alt text",
            },
            title: "ABC",
            majorInititative: "sports",
            area: "sports v2",
            redirectUrl: "https://picsum.photos/200",
          },
        ]),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const d = await response.json();
      setData(d); // Spread operator triggers observable
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle errors appropriately in your application context
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <ThemeProvider
      style={{ padding: "8px" }}
      theme={isLight ? state.lightTheme : state.darkTheme}
    >
      <div className="App" id="App">
        <IconButton
          onClick={() => themeHandler(isLight)}
          iconProps={isLight ? DarkThemeIcon : LightThemeIcon}
          title="Theme"
          ariaLabel="Theme"
        />
        <CardList cardsList={data} />
        <FluentFooter>
          <img
            slot="avatar"
            src="https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0"
            alt="Microsoft logo"
          />
        </FluentFooter>
      </div>
    </ThemeProvider>
  );
};

export default App;
