function Heading(props){
  console.log(props)
    let title = "Hello there"
    return(
      <h1>{title}, {props.name}, {props.color}</h1>
    )
  }

  export default Heading;