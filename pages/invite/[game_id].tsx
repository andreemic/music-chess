import { useRouter } from "next/router";

const GameInvitePage = () => {
  const router = useRouter();
  const game_id = router.query.game_id;

  return (
    <div>
      <h1>Game Invite Page</h1>
      Game {game_id}
    </div>
  );
};

export default GameInvitePage;
