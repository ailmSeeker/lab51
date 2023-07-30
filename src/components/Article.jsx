function Article(props){
  props = props.props;
  if(!props.date){
    props.date = '1/1/01'
  }

  return (
    <article>
      <h3>{props.preview}</h3>
      <small>{props.date}</small>
      <p>{props.title}</p>
    </article>
  ); 
}

export default Article;
