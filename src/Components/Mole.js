import { useEffect } from "react";
import moleImg from "../mole.png"

const Mole = (props) => {
    useEffect(() => {
        let secs = Math.ceil(Math.random() * 4000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, secs)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style = {{ 'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )

}

export default Mole