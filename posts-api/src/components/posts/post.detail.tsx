import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostDTO } from "../../dto";
import { PostService } from "../../services";
import "./post.detail.css";
import PostCell from "./post.cell";
import axios from "axios";

function PostDetail() {
    const { id } = useParams();

    const [post, setPost] = useState<PostDTO | null>(null);

    useEffect(() => {
        const cancelTokenSrc = axios.CancelToken.source();
        const fetchPost = async () => {
            const apiPost = await PostService.getPost(id || "");
            setPost(apiPost);
        };
        fetchPost().catch(console.error);
        return () => cancelTokenSrc.cancel();
    }, []);

    return (
        <div>
            {
                post === null &&
                <p>impossible de trouver le poste avec l'id { id }...</p>
            }
            {
                post === undefined &&
                <p>chargement en cours</p>
            }
            {
                post &&
                <PostCell post={post} />
            }
        </div>
    );
}

export default PostDetail;
