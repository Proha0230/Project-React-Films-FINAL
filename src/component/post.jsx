export function Post(props) {

    // Диструктиризация props, чтоб каждый раз не писать props.cb и props.name
    const{id, name, removePost} = props;

    return <h2>{name}<button onClick={() => removePost(id)} style={{margin: "10px"}}>Удалить</button></h2>
}