
const SendOrderButton = (props) => {
   
    return (
        <form onSubmit={props.onOrder}> 
            <button type='submit' disabled={!props.isValid} type="submit" >Send Order</button>
        </form>
    )
}

export default SendOrderButton