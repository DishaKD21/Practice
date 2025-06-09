function Logout(props){
return(<button onClick={() => props.setLoggedIn(false)}>Logout</button>);
}
export default Logout;