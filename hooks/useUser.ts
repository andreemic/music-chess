import { useEffect, useState } from "react";
import { userData } from "services/spotify";
import { ISpotifyUser } from "services/spotify/types";

export const useUser = () => {
  const [user, setUser] = useState<ISpotifyUser>(null);
  useEffect(() => {
    (async () => {
      try {
        let u = await userData();
        setUser(u);
      } catch (error) {
        setUser(null);
      }
    })();
  }, []);

  return { user, setUser };
};
