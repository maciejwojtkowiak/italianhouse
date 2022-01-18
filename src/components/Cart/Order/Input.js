
const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input onChange={props.changeTextHandler} id={props.name} name={props.name} type={props.type} />
        </div>
        
    )
}