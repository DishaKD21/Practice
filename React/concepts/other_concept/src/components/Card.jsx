function Card(props){
return(
<>
<p>{props.name}</p>
<p>{props.children}</p>
</>
);
}
export default Card;