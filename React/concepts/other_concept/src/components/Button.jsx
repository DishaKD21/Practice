function Button(props){
return(
<>
<button onClick={props.handleClick}>{props.name}</button>
<p>{props.c}</p>
</>
);
}
export default Button;