import {Post} from "./post";



export function Posts(props){
    return <div>
        {
            props.posts.map ( post => (
                <Post key={post.id} id={post.id} name ={post.name} removePost={props.removePost}/>
            ))
        }
    </div>
}