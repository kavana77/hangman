import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]
type KeyboardProps = {
    disabled?: boolean
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}
const Keyboard = ({activeLetter,inactiveLetters
    ,disabled=false,addGuessedLetter}: KeyboardProps) => {
    return ( 
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem"
        }}>
            {KEYS.map(key => {
                const isActive = activeLetter.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return <button
                onClick={()=> addGuessedLetter(key)}
                className={`${styles.btn} 
                ${isActive ? styles.active: ""}
                ${isInactive ? styles.inactive: ""}`} 
                disabled={isActive || isInactive || disabled}
                key={key}>{key}</button>
            })}
        </div>
     );
}
 
export default Keyboard;