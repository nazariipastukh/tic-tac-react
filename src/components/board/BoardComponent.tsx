import React from "react";
import styles from './BoardStyles.module.css'

type BoardProps = {
    winner: string | null;
    player: string;
    winCells: number[];
    resetGame: () => void;
    cellClick: (index: number) => void;
    board: string[];
};

export const BoardComponent: React.FC<BoardProps> = (
    {winner, board, player, winCells, cellClick, resetGame}) => {

    return (
        <div className={styles['gameBoard']}>
            <div className={styles.titleWrap}>
                <div className={styles.title}>
                    {winner ? (winner === 'Draw' ? (
                        <p className={styles['winnerTitle']}> Draw! </p>
                    ) : (
                        <p className={styles['winnerTitle']}>
                            <span className={styles[winner]}>{winner}</span> - is winner!
                        </p>
                    )) : (
                        <p className={styles['winnerTitle']}>
                            <span className={styles[player]}>Current player: {player} </span>
                        </p>
                    )}
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles['board']}>
                    {board.map((cell, index) => (
                        <div
                            key={index}
                            className={`${styles['cell']} ${winCells.includes(index) ? styles['winning'] : ''} ${styles[cell]}`}
                            onClick={() => cellClick(index)}>
                            {cell}
                        </div>
                    ))}
                </div>
                {winner && (
                    <div className={styles['winner']}>
                        <button onClick={resetGame}> Play Again </button>
                    </div>
                )}
            </div>
        </div>
    );
};