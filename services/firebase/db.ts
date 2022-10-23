import { getFontOverrideCss } from "next/dist/server/font-utils";
import { db } from "./index";
import { doc, getDoc } from "firebase/firestore";

export const getGame = (gameId: string) => getDoc(doc(db, "games", gameId));
