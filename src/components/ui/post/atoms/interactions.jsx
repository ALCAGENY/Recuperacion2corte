import "@fortawesome/fontawesome-free/css/all.min.css";
export function PostInteractions({likes,comments}) {
    return (
        <>
            <div className="post_interactions">
                <nav className="post_interactions_nav">
                    <li>
                        <span className="post_interactions_icon"></span>
                        <i className="fa-solid fa-heart" style={{color:"red"}}></i>
                        <a href="" className="post_interactions_link">{likes} me gusta</a>
 
                        
                    </li>
                    <li>
                        <span className="post_interactions_icon"></span>
                        <i className="fa-solid fa-comment" style={{color: "black"}}></i>
                        <a href="" className="post_interactions_link_inherit ">{comments} Comentario(s)</a>
                    </li>
                    <li>
                        <span className="post_interactions_icon"></span>
                        <i className="fa-solid fa-share-nodes" style={{color:"black"}}></i>
                        <a href="" className="post_interactions_link">0 Compartir</a>
                    </li>
                </nav>
            </div>
        </>
    );
}