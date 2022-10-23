import { useRouter } from "next/router";
import { db } from "services/firebase";
import { arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { useCollection, useCollectionData, useDocument, useDocumentData } from "react-firebase-hooks/firestore";
import { useUser } from "hooks/useUser";
import { useEffect, useState } from "react";
import { gameConverter, IGame, ITurn, turnConverter } from "services/firebase/types";

const GamePage = () => {
  const router = useRouter();
  // @ts-ignore
  const game_id: string = router.query.game_id;
  const { user } = useUser();
  const [game, gameLoading, gameError] = useDocumentData<IGame>(doc(db, "games", game_id).withConverter(gameConverter));
  const [turns, turnsLoading, turnsError] = useCollectionData<ITurn>(
    collection(db, "games", game_id, "turns").withConverter(turnConverter)
  );

  const [loadingDbUpdates, setLoadingDbUpdates] = useState(false);
  useEffect(() => {
    (async () => {
      if (game) {
        setLoadingDbUpdates(true);
        // add current user to the game's players list in firestore
        await updateDoc(doc(db, "games", game_id), {
          players: arrayUnion(user.id),
        });

        // todo: if the game type is 'journey', set the start and end songs

        setLoadingDbUpdates(false);
      }
    })();
  }, [game]);

  return (
    <div>
      <h1>Game Page</h1>
      {gameError && <strong>Error: {JSON.stringify(gameError)}</strong>}
      {gameLoading && <span>Document: Loading...</span>}
      {game && (
        <span>
          Document: {JSON.stringify(game)} {JSON.stringify(turns)}
        </span>
      )}
    </div>
  );
};

export default GamePage;
