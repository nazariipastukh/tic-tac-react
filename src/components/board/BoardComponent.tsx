import React from "react";

type BoardProps = {
    winner: string | null;
    player: string;
    winCells: number[];
    resetGame: () => void;
    cellClick: (index: number) => void;
    board: (string | null)[];
};

export const BoardComponent: React.FC<BoardProps> = () => {

    return(
        <div></div>
    )
};
