function Movie (props) {
    const {Title, 
          Year, 
          ImdbID, 
          Type, 
          Poster} = props;
    
    return <div id={ImdbID} class="card movie">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={Poster}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{Title}
      <i class="material-icons right">{Year}</i>
      </span>
      <p>{Type}</p>
    </div>
    </div>

}


export {Movie}