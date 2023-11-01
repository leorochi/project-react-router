import React from 'react'
import { useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css'
import NotFound from 'componentes/NotFound/NotFound';

const PostConteudo = () => {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })
    
    if(!post) {
        return <NotFound/>
    }

  return (
    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
        <div className='post-markdown-container'>
        <ReactMarkdown>
            {post.texto}
        </ReactMarkdown>
   
        </div>
    </PostModelo>
        
  )
}

export default PostConteudo