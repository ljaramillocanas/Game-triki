import { useState } from "react"

//Declaramos turnos
const TURNS={
  X: 'x',
  O: 'o'
}

//creamos el tablero 

const board = Array(9).fill(null)

//square o cuadrado del tablero
const Square = ({children,updateBoard,index}) => {
  return(
    <div className="square">
      {children}
    </div>
  )
}

function App(){
  const [board,setBoard] = useState(Array(9).fill(null))

  const [turn,setTurn] = useState (TURNS.X )

 return (
  <main className="board">
    <h1>TIC TAC TOE</h1>
    <section className="game">
      {
        board.map((_, index) => {
          return(
            <Square 
              key={index}
              index={index}
            >
                {board[index]}
            </Square> 

          )
        })
      }
    </section>
    <section className="turn">

    </section>
    </main>
  )
}


export default App
