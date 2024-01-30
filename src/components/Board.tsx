import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";
import {useState} from 'react';

function Board() {
  const board: string[] = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize: number = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  return (
    <div
   >
    <div
    className="flex flex-wrap rounded-lg justify-center" // Add justify-center class
    style={{
      width: "100%", // Set the width to 100% to fill the container
      height: "100%", // Set the width to 100% to fill the container
      maxWidth: `${6 * boardSize}rem`, // Set the maximum width for larger screens
      margin: "0 auto", // Center the board horizontally
    }}
  >
      {board.map((candy: string, index: number) => (
        <Tile candy={candy} key={index} candyId={index}
        />
      ))}
    </div>
    </div>

  );
}

export default Board;
