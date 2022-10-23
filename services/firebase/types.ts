import {
  FirestoreDataConverter,
  WithFieldValue,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  DocumentReference,
} from "@firebase/firestore";

export type ISong = string;
export interface ITurn {
  id?: string;
  ref?: DocumentReference;

  date: Date;
  song: ISong;
}

export type UserId = string;
export enum GameType {
  JAM = "JAM",
  TRANSITION = "TRANSITION",
}
export interface IGame {
  id?: string;
  ref?: DocumentReference;

  type: GameType;
  lastTurn: UserId;
  players: UserId[];

  // if type is TRANSITION
  startSong?: ISong;
  endSong?: ISong;
}

export const gameConverter: FirestoreDataConverter<IGame> = {
  toFirestore(game: WithFieldValue<IGame>): DocumentData {
    return game;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): IGame {
    const data = snapshot.data(options);
    // @ts-ignore
    return {
      ...data,
      id: snapshot.id,
      // ref: snapshot.ref,
    };
  },
};

export const turnConverter: FirestoreDataConverter<ITurn> = {
  toFirestore(turn: WithFieldValue<ITurn>): DocumentData {
    return turn;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ITurn {
    const data = snapshot.data(options);
    // @ts-ignore
    return {
      ...data,
      date: data.date.toDate(),
      id: snapshot.id,
      // ref: snapshot.ref,
    };
  },
};
