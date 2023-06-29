import React, { SyntheticEvent, useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { PostService } from "../../services";
import { PostDTO } from "../../dto";
import PostCell from "../posts/post.cell";
import axios, { CancelTokenSource } from "axios"; // Importa CancelTokenSource desde axios

function App() {

  const [posts, setPosts] = useState<PostDTO[]>();

  useEffect(() => {
    const cancelTokenSrc: CancelTokenSource = axios.CancelToken.source(); // Añade el tipo CancelTokenSource
    const fetchPosts = async () => {
      const apiPosts = await PostService.getPosts(cancelTokenSrc.token);
      setPosts(apiPosts);
      return () => cancelTokenSrc.cancel();
    }
    fetchPosts().catch(console.error);
  }, []);

  return (
      <div className="App">
        {
            !posts &&
            <p>Chargement des données en cours...</p>
        }
        {
            posts &&
            posts.map((dto) => <PostCell post={dto} key={dto.id} />)
        }
      </div>
  );
}

export default App;
