
const SendOrderButton = (props) => {
   
    return (
        <form>
        
            <button disabled={!props.isValid} onClick={props.onOrder} type="submit" >Send Order</button>
        </form>
    )
}

export default SendOrderButton