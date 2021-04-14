import React, {useState} from 'react';

const Library=()=>{
    const [books, setBooks]=useState("");
    const genre={
        "Programming": ['Introduction to Algorithms', 'Clean Code'],
        "Investment": ['The Intelligent Investor','Zero to One']
    };
    const genreKey=Object.keys(genre);
    function clickGenreHandler(gen){
        var allBooks=genre[gen];
        var books=allBooks.map((value,index)=><li key={index} className="book">{value}</li>);
        setBooks(books); 
        
    }

    return(
        <div className="lib-container">
            <h1>📕 mylibrary</h1>
            <h3>some of my favourite books. Pick your elixir ...</h3>
            <ul className="genres">
                {genreKey.map((genre)=>{
                    return <li 
                        key={genre} 
                        className="genreList" 
                        onClick={()=>clickGenreHandler(genre)}
                    >{genre}</li>
                })}
            </ul>
            <hr/>
            <ul className="books">
                {/* {books.map((value,index) => <li key={index} className="book">{value}</li>)}  */}
                {books}
            </ul>
            
        </div>
    )
}
export default Library;