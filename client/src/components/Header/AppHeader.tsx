import "./appHeader.scss";
import "../MainContainer/mainContainer.scss";

import { Callout, DefaultButton, mergeStyleSets, Persona, PersonaSize, PersonaPresence } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useBoolean, useId } from "@fluentui/react-hooks";

import { BingLogo } from "../../icons/icons";
import { Constants } from "../constants/Constants";

// import { SignInButton } from '../SignInButton';

// import { callMsGraph } from '../../graph';
// import { loginRequest } from '../../authConfig';

// import { SignInButton } from '../SignInButton';
// import { SignOutButton } from '../SignOutButton';

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const AppHeader = (props: any) => {
  // const isAuthenticated = useIsAuthenticated();
  // const { instance, accounts } = useMsal();
  // const [graphData, setGraphData] = useState<any>(null);
  const [personaDetails, setPersonaDetails] = useState(null);
  const [activeNav, setActiveNav] = useState("home");
  const { pathname } = useLocation();
  // const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  // let examplePersona: IPersonaSharedProps = {
  //     text: accounts[0]?.name,
  //     secondaryText: "",
  //     imageAlt: ""
  // };

  // function RequestProfileData() {
  //     // Silently acquires an access token which is then attached to a request for MS Graph data
  //     instance
  //         .acquireTokenSilent({
  //             ...loginRequest,
  //             account: accounts[0],
  //         })
  //         .then((response: any) => {
  //             callMsGraph(response.accessToken).then((response) => setGraphData(response));
  //         });
  // }

  function handleScrollDown() {
    const scroll = document.documentElement.scrollTop;
    if (scroll && scroll > 0) {
      document.getElementById("header")?.classList.add("shadow");
    } else {
      document.getElementById("header")?.classList.remove("shadow");
    }
  }

  useEffect(() => {
    // if (isAuthenticated) {
    //     RequestProfileData();
    // }
    window.addEventListener("scroll", handleScrollDown);
  }, []);

  // useEffect(() => {
  //     if (graphData) {
  //         examplePersona = {
  //             text: graphData?.displayName,
  //             secondaryText: graphData?.jobTitle,
  //             imageAlt: graphData?.displayName
  //         };
  //     }
  // }, [graphData]);

  useEffect(() => {
    const splitPathName = pathname.split("/");
    if (splitPathName[1] !== "") {
      setActiveNav(splitPathName[1]);
    }
  }, [pathname]);

  function onRouteClick(navItem: string) {
    setActiveNav(navItem);
    if (isCalloutVisible) {
      toggleIsCalloutVisible();
    }
    if (isPersonaCalloutVisible) {
      toggleIsPersonaCalloutVisible();
    }
  }

  useEffect(() => {
    const fetchPersonaDetails = async () => {
      try {
        const response = await fetch('/user/profile');
        const data = await response.json();
        setPersonaDetails(data);
        console.log('Persona details:', data);
      } catch (error) {
        console.error('Error fetching persona details:', error);
      }
    };

    fetchPersonaDetails();
  }, []);

  // const onRenderFooterContent = React.useCallback(
  //     () => (
  //         <div>
  //             <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
  //         </div>
  //     ),
  //     [dismissPanel],
  // );
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] =
    useBoolean(false);
  const [isPersonaCalloutVisible, { toggle: toggleIsPersonaCalloutVisible }] =
    useBoolean(false);

  const styles = mergeStyleSets({
    callout: {
      width: 320,
      maxWidth: "90%",
      padding: "20px 24px",
    },
    personaCallout: {
      width: 200,
      maxWidth: "90%",
      padding: "10px 12px",
      borderRadius: "5px",
      overflow: "hidden",
    }
  });
  const buttonId = useId("callout-button");
  const personaButtonId = useId("persona-callout-button");
  // const getProfileButton = (): JSX.Element => {
  //     return (
  //         <IconButton
  //             ariaLabel="Profile"
  //             allowDisabledFocus={true}
  //             className="profileBtn"
  //             aria-haspopup={"dialog"}
  //             aria-expanded={true}
  //             title={accounts[0]?.name}
  //             onClick={() => console.log("Profile Click")}
  //             onRenderIcon={() => {
  //                 return (
  //                     <Persona {...examplePersona} hidePersonaDetails presence={PersonaPresence.online} size={PersonaSize.size32} />
  //                 );
  //             }}
  //             id="targetButton"
  //             onMouseEnter={() => console.log("Profile Mouse Enter")}
  //             onFocus={() => console.log("Profile Focus")}
  //         />
  //     );
  // };

  return (
    <header>
      <nav id="header" className="navbarStyle">
        <a className="navbar-brand" href="/">
          <div className="msBingLogo">
            <BingLogo />
          </div>
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="nav-menu">
            <li
              className={activeNav === "home" ? "listItem active" : "listItem"}
              key="home"
            >
              <RouterLink
                className="elementor-item"
                onClick={() => {
                  onRouteClick("home");
                }}
                to="/home"
                data-is-focusable={true}
                aria-disabled={activeNav === "home"}
                aria-current={activeNav === "home" ? "page" : undefined}
              >
                {Constants.Home}
              </RouterLink>
            </li>
            <li
              className={
                activeNav === "prototypes" ? "listItem active" : "listItem"
              }
              key="prototypes"
            >
              <RouterLink
                className="elementor-item"
                onClick={() => {
                  onRouteClick("prototypes");
                }}
                to="/prototypes"
                data-is-focusable={true}
                aria-disabled={activeNav === "prototypes"}
                aria-current={activeNav === "prototypes" ? "page" : undefined}
              >
                {Constants.Prototypes}
              </RouterLink>
            </li>
            <li
              className={
                activeNav === "newsletters" ? "listItem active" : "listItem"
              }
              key="newsletters"
            >
              <RouterLink
                className="elementor-item"
                onClick={() => {
                  onRouteClick("newsletters");
                }}
                to="/newsletters"
                data-is-focusable={true}
                aria-disabled={activeNav === "newsletters"}
                aria-current={activeNav === "newsletters" ? "page" : undefined}
              >
                {Constants.Newsletters}
              </RouterLink>
            </li>
            <li
              className={activeNav === "tools" ? "listItem active" : "listItem"}
              key="tools"
            >
              <RouterLink
                className="elementor-item"
                onClick={() => {
                  onRouteClick("tools");
                }}
                to="/tools"
                data-is-focusable={true}
                aria-disabled={activeNav === "tools"}
                aria-current={activeNav === "tools" ? "page" : undefined}
              >
                {Constants.Tools}
              </RouterLink>
            </li>
            <li className={"listItem"} key="profile">
              <Persona
                text={personaDetails?.displayName}
                hidePersonaDetails={true}
                onClick={toggleIsPersonaCalloutVisible}
                size={PersonaSize.size32}
                presence={PersonaPresence.none}
                id={personaButtonId}
                styles={{ root: { cursor: "pointer" }, details: {padding: 0} }}
              />
              {isPersonaCalloutVisible && (
                <Callout
                  className={styles.personaCallout}
                  role="dialog"
                  target={`#${personaButtonId}`}
                  onDismiss={toggleIsPersonaCalloutVisible}
                  directionalHint={6}
                  gapSpace={10}
                >
                  <ul className="persona-menu">
                    <li>
                      <Persona
                        text={personaDetails?.displayName}
                        size={PersonaSize.size32}
                        presence={PersonaPresence.none}
                      />
                    </li>
                    <li>
                      <hr className="divider"/>
                    </li>
                    <li>
                      <DefaultButton
                        onClick={() => {
                          toggleIsPersonaCalloutVisible();
                          window.location.href = "/auth/signout"
                        }}
                        text="&#61579; Sign Out"
                        className="sign-out-button"
                        styles={{ label: { margin: 0 } }}
                      />
                    </li>
                  </ul>
                </Callout>
              )}
            </li>
            {/* <li className={activeNav === "components" ? "listItem active" : "listItem"} key="components">
                            <RouterLink
                                className="elementor-item"
                                onClick={() => {
                                    onRouteClick("components");
                                }}
                                to="/components"
                                data-is-focusable={true}
                                aria-disabled={activeNav === "components"}
                                aria-current={
                                    activeNav === "components" ? "page" : undefined
                                }
                            >Components</RouterLink></li> */}
          </ul>

          {/* For Mobile */}
          <DefaultButton
            onClick={toggleIsCalloutVisible}
            id={buttonId}
            text="&#9776;"
            className="icon-more-button"
          />

          {isCalloutVisible && (
            <Callout
              className={styles.callout}
              role="dialog"
              target={`#${buttonId}`}
              onDismiss={toggleIsCalloutVisible}
            >
              <ul className="nav-menu-mobile">
                <li className="listItem">
                  <Persona
                    text={personaDetails?.displayName}
                    size={PersonaSize.size32}
                    presence={PersonaPresence.none}
                    className="elementor-item"
                  />
                </li>
                <li>
                  <hr className="divider"/>
                </li>
                <li
                  className={
                    activeNav === "home" ? "listItem active" : "listItem"
                  }
                  key="home"
                >
                  <RouterLink
                    className="elementor-item"
                    onClick={() => {
                      onRouteClick("home");
                    }}
                    to="/home"
                    data-is-focusable={true}
                    aria-disabled={activeNav === "home"}
                    aria-current={activeNav === "home" ? "page" : undefined}
                  >
                    {Constants.Home}
                  </RouterLink>
                </li>
                <li
                  className={
                    activeNav === "prototypes" ? "listItem active" : "listItem"
                  }
                  key="prototypes"
                >
                  <RouterLink
                    className="elementor-item"
                    onClick={() => {
                      onRouteClick("prototypes");
                    }}
                    to="/prototypes"
                    data-is-focusable={true}
                    aria-disabled={activeNav === "prototypes"}
                    aria-current={
                      activeNav === "prototypes" ? "page" : undefined
                    }
                  >
                    {Constants.Prototypes}
                  </RouterLink>
                </li>
                <li
                  className={
                    activeNav === "newsletters" ? "listItem active" : "listItem"
                  }
                  key="newsletters"
                >
                  <RouterLink
                    className="elementor-item"
                    onClick={() => {
                      onRouteClick("newsletters");
                    }}
                    to="/newsletters"
                    data-is-focusable={true}
                    aria-disabled={activeNav === "newsletters"}
                    aria-current={
                      activeNav === "newsletters" ? "page" : undefined
                    }
                  >
                    {Constants.Newsletters}
                  </RouterLink>
                </li>
                <li
                  className={
                    activeNav === "tools" ? "listItem active" : "listItem"
                  }
                  key="tools"
                >
                  <RouterLink
                    className="elementor-item"
                    onClick={() => {
                      onRouteClick("tools");
                    }}
                    to="/tools"
                    data-is-focusable={true}
                    aria-disabled={activeNav === "tools"}
                    aria-current={activeNav === "tools" ? "page" : undefined}
                  >
                    {Constants.Tools}
                  </RouterLink>
                </li>
                <li
                  className={
                    activeNav === "components" ? "listItem active" : "listItem"
                  }
                  key="components"
                >
                  <RouterLink
                    className="elementor-item"
                    onClick={() => {
                      onRouteClick("components");
                    }}
                    to="/components"
                    data-is-focusable={true}
                    aria-disabled={activeNav === "components"}
                    aria-current={
                      activeNav === "components" ? "page" : undefined
                    }
                  >
                    {Constants.Components}
                  </RouterLink>
                </li>
                <li>
                  <hr className="divider"/>
                </li>
                <li className="list-item">
                  <DefaultButton
                    onClick={() => {
                      toggleIsPersonaCalloutVisible();
                      window.location.href = "/auth/signout"
                    }}
                    text="&#61579; Sign Out"
                    className="elementor-item sign-out-button"
                    styles={{ label: { margin: 0 } }}
                  />
                </li>
              </ul>
            </Callout>
          )}
        </div>
      </nav>
    </header>
  );
};
