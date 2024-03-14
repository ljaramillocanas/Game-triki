
//Declaramos turnos
const TURNS={
  X: 'x',
  O: 'o'
}

//creamos el tablero 

const board = Array(9).fill(null)

//square o cuadrado del tablero
const Square = ({children,updateBoard,index}) =>{
  return(
    <div className="square">
      {children}
    </div>
  )
}

function App(){
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
                
            </Square> 

          )
        })
      }
    </section>
    </main>
  )
}


export default App
