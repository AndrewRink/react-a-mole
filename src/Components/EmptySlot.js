import { useEffect } from 'react'
import hillImg from '../molehill.png'

const EmptySlot = (props) => {
    
    useEffect(() => {
        let secs = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
        props.toggle(true)
    }, secs)
    return () => clearTimeout(timer)
    })

    return (
        <div>
        <img style = {{'width': '30vw'}}
        src={hillImg}
        onClick={props.handleClick} />
        </div>
    )
}
export default EmptySlot