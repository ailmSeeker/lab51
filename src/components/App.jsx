import React from "react";
import blogData from "../data/blog";
import About from './About.jsx';
import Article from './Article.jsx';
import ArticleList from "./ArticleList";
import Header from './Header.jsx';
import Title from './Title.jsx'


function App() {
  return (
    <>
      <Header props={[blogData.name, blogData.about]} />
      <Title icon={blogData.image}/>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList list={blogData.posts} />
    </>
    
  );
}

export default App;
