import './post.cell.css';
import {PostDTO} from "../../dto";
import {Link} from "react-router-dom";

export interface PostCellAttributes {
    post: PostDTO;
}

function PostCell(attributes: PostCellAttributes) {
    return (
        <div>
            <h3>{attributes.post.title}</h3>
            <p>{attributes.post.body}</p>
            <Link to={'/posts/' + attributes.post.id}>More detail</Link>
        </div>
    )
}

export default PostCell;