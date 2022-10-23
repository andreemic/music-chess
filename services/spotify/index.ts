import { SpotifyAuth, Scopes } from "react-spotify-auth";
import { useUser } from "../../hooks/useUser";
import Cookies from "js-cookie";
export const getSpotifyRedirectUrl = () => {
  const scopes = [
    Scopes.playlistReadCollaborative,
    Scopes.playlistReadPrivate,
    Scopes.playlistModifyPrivate,
    "user-top-read",
    "user-read-recently-played",
    "user-library-read",
  ];
  const redirectUri = "http://localhost:3000";
  const showDialog = true;
  return (
    "https://accounts.spotify.com/authorize?response_type=token" +
    `&client_id=${CLIENT_ID}` +
    `&scope=${scopes.join("%20")}` +
    `&redirect_uri=${redirectUri}` +
    "&show_dialog=" +
    Boolean(showDialog)
  );
};

const CLIENT_ID = "9e18761362b741afb567365402617591";
export const singInWithSpotify = () => {
  const url = getSpotifyRedirectUrl();
};

export const getUserInfo = async (accessToken: string) => {
  const token = Cookies.get("spotifyAuthToken");
};

export const makeRequest = async (url: string) => {
  const access_token = Cookies.get("spotifyAuthToken");
  if (!access_token) throw new Error("No access token");

  const resp = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const res = resp.json();
  if (res.error) {
    throw new Error(error.message);
  }
  return res;
};

export const topTracks = async () => {
  return makeRequest("https://api.spotify.com/v1/me/top/tracks");
};
export const getTrack = async (trackId: string) => {
  return makeRequest(`https://api.spotify.com/v1/tracks/${trackId}`);
};

export const userData = async () => {
  return makeRequest("https://api.spotify.com/v1/me/");
};

export const logout = () => {
  Cookies.remove("spotifyAuthToken");
  window.open("/", "_self");
};
