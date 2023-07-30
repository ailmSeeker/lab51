function Header(props){
  console.log(props.props)
  const [name, about] = props.props; 

  return (
      <header>
          <h1>{name}</h1> 
          <p>{about}</p>
      </header>
  ); 
}

export default Header;
