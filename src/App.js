
import './App.css';
import Footer from './Footer/footer';
import Header from './Header/header';
import React from 'react'; 
import Article from './Article/Articles';
import articles from './articles.json';


class App extends React.Component {
  state = {
    articleNew: {
      author: "",
      date: "",
      title: "",
      image: "",
      text: ""
    },
  };

  render() {
    console.log(articles);
    return (
      <div className='App'>
        <Header/>
        {articles.map((article) => (
          <Article 
            key={article.title} 
            author={article.author} 
            date={article.date} 
            title={article.title} 
            image={article.image} 
            text={article.text} 
          />
        ))}
        <Footer/>
      </div>
    )
  };
}

export default App;
