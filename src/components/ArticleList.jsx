import Article from "./Article.jsx";

function ArticleList(list){
  let newList = list.list;
  console.log(list.list)
  let newPosts =  [];

  newList.forEach(element => {
    return newPosts.push(<Article key={element.id} props={element}/>); 
  });;

  return (
    <main>
      <h1>Overreacted</h1> 
      {newPosts}
    </main>
  );
}

export default ArticleList;
