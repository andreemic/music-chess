import type { AppProps } from "next/app";

import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css"; // if using the included styles

import "@/styles/global.css";
import { useEffect, useState } from "react";
import { getSpotifyRedirectUrl } from "services/spotify";
import { useUser } from "hooks/useUser";
import { Pattern } from "@/components/Pattern";

const App = ({ Component, pageProps }: AppProps) => {
  const [token, setToken] = useState(null);
  const { user } = useUser();
  useEffect(() => setToken(Cookies.get("spotifyAuthToken")), []);
  const spotifyClick = (event) => {
    event.preventDefault();

    const redirectUri = getSpotifyRedirectUrl();

    if (window.location !== window.parent.location) {
      const loginWindow = window.open(redirectUri);
      window.addEventListener(
        "message",
        (event) => {
          if (event.data.type !== "react-spotify-auth" || !event.data.accessToken) {
            return;
          }

          loginWindow.close();
          // this.props.onAccessToken(event.data.accessToken)
        },
        false
      );
    } else {
      window.location = redirectUri;
    }
  };

  return (
    <div className="app">
      <div className="bg-pattern fixed w-screen h-screen opacity-50 z-0 pointer-events-none" />
      {user ? (
        <Component {...pageProps} />
      ) : (
        <div className="z-10">
          // Display the login page
          <SpotifyAuth
            className="z-10"
            redirectUri="http://localhost:3000"
            clientID="9e18761362b741afb567365402617591"
            scopes={[Scopes.userReadPrivate, "user-read-email"]} // either style will work
            onAccessToken={(token: string) => setToken(token)}
          />
          <button className="z-10" onClick={spotifyClick}>
            login with spotify
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
