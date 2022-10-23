import { TrackObjectSimplified } from "spotify-api";
export interface ISpotifyUser {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  id: string;
  images: {
    height: number | null;
    width: number | null;
    url: string;
  }[];
}

// adapted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/spotify-api/index.d.ts
export interface ISpotifyArtist {
  type: "artist";
  href: string;
  uri: string;
  name: string;
  id: string;
}

interface ImageObject {
  /**
   * The image height in pixels. If unknown: `null` or not returned.
   */
  height?: number | undefined;
  /**
   * The source URL of the image.
   */
  url: string;
  /**
   * The image width in pixels. If unknown: null or not returned.
   */
  width?: number | undefined;
}

export interface ISpotifyAlbum {
  artists: ISpotifyArtist[];
  id: string;
  images: ImageObject[];
  name: string;
  release_date: string;
}
export interface ISpotifyTrack {
  artists: ISpotifyArtist[];
  duration_ms: number;
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  preview_url: string | null;
  type: "track";
  uri: string;
  album: 
}
