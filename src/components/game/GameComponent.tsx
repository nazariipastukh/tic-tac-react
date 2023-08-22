import {FC, useState} from "react";
import {BoardComponent} from "../board/BoardComponent";

const initialValueBoard: (string)[] = Array(9).fill(null)

export const GameComponent: FC = () => {
    const [board, setBoard] = useState(initialValueBoard)
    const [player, setPlayer] = useState<string>('X')
    const [winner, setWinner] = useState<string | null>(null)
    const [winCells, setWinCells] = useState<number[]>([])

    const cellClick = (index: number) => {
        if (board[index] || winner) {
            return
        }
        const newBoard: (string)[] = [...board]
        newBoard[index] = player
        setBoard(newBoard)

        checkWinner(newBoard)
        setPlayer(player === 'X' ? 'O' : 'X')
    }
    const checkWinner = (board: (string | null)[]) => {
        const winConditionals: number[][] = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]
        for (let condition of winConditionals) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a])
                setWinCells([a, b, c])
                return;
            }
        }
        if (board.every((cell) => cell !== null)) {
            setWinner('Draw')
        }
    }
    const resetGame = () => {
        setBoard(initialValueBoard)
        setPlayer('X')
        setWinner(null)
        setWinCells([])
    }
    return (
        <div>
            <BoardComponent winner={winner} player={player} winCells={winCells}
                            resetGame={resetGame} cellClick={cellClick} board={board}/>
        </div>
    )
}