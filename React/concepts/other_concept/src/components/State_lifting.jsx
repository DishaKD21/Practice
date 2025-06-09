function State_lifting(props){
return(
<>
<input type="text" onChange={(e)=>props.setName(e.target.value)} 
value = {props.name}/>
<p>value ={props.name}</p>
</>
);
}
export default State_lifting;