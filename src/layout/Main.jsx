import React from "react";
import {Movies} from "../component/Movies";
import {Preloader} from "../component/preloader";
import {Search} from "../component/Search";

class Main extends React.Component {
    state ={
        movies:[],
    }


componentDidMount(str, type = "all") {
    fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !=="all" ? `&type=${type}` : ""}`)
    .then (response => response.json())
    .then (data => this.setState({movies: data.Search}))
}

searchMovies = (str, type = "all") => {
    fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !=="all" ? `&type=${type}` : ""}`)
    .then (response => response.json())
    .then (data => this.setState({movies: data.Search}))
}


render() {
    const{movies} = this.state;
    return <main className="container content">
        <Search searchMovies={this.searchMovies}/>
        {movies.length ? (
            <Movies movies={this.state.movies}/>
        ) : <Preloader />
        }
    </main>
}
}

export {Main}