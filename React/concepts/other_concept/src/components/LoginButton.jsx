function LoginButton(props){
return(<button onClick={() => props.setLoggedIn(true)}>Login</button>);
}
export default LoginButton;