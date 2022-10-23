import { jsonEval } from "@firebase/util";
import { useEffect, useState } from "react";
import { getTrack } from "services/spotify";
import { ISpotifyTrack } from "services/spotify/types";
import { FiExternalLink } from "react-icons/fi";
export interface ITrackProps {
  id?: string;
  track?: ISpotifyTrack;
}
export const Track = ({ id, track, ...rest }: ITrackProps) => {
  const [_track, setTrack] = useState<ISpotifyTrack | null>(track || null);

  _track;
  useEffect(() => {
    (async () => {
      if (id && !track) {
        // fetch the track from spotify
        let t = await getTrack(id);
        setTrack(t);
      }
    })();
  }, []);
  return (
    <a
      className="bg-white rounded-md bg-opacity-60 backdrop-blur-xs p-3 w-80 flex items-center hover:bg-opacity-90 shadow-md hover:shadow-sm transition-all cursor-pointer "
      href={_track?.external_urls?.spotify}
      target="_blank"
    >
      {_track?.album?.images?.length && <img className="rounded w-12 h-12 mr-2" src={_track.album.images[0].url} />}
      <div>
        <div className="text-black font-bold">{_track?.name}</div>
        <div className="text-gray-500">{_track?.artists?.map((a) => a.name).join(", ")}</div>
      </div>
      <div className="ml-auto mr-2">
        <FiExternalLink class="w-5 h-5" />
      </div>
    </a>
  );
};
