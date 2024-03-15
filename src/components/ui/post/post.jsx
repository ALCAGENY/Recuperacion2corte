import './post.css';
import { PostProfile } from './atoms/profile';
import { postImages } from '../../../utils/post_image';
import { PostContent } from './atoms/content';
import { PostInteractions } from './atoms/interactions';
import { Titul_cart } from '../titul-cart/titul-cart';
import { PostInteractionBottom } from './atoms/bottom_interactions';
import "@fortawesome/fontawesome-free/css/all.min.css";
export function Post() {
    return (
        <>
            <div className="post_divider">
                <article className="post">
                    <div id='img-men'>
                    <PostProfile key="post_profile"userImage={postImages.user_img5} username="Jesus Gonzalez"  date="4 horas"  />
                    <i class="fa-solid fa-ellipsis" style={{color: "black"}}></i>
                    </div>
                    <PostContent  content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner={postImages.banner}   />
                    <PostInteractions likes="45" comments="35" />
                </article>
                <PostInteractionBottom likes="45" comments="35"/>
            </div>
            <div className="post_divider">
                <article className="post">
                <div id='img-men'>
                    <PostProfile key="post_profile"userImage={postImages.user_img} username="Jesus Gonzalez"  date="4 horas"  />
                    <i class="fa-solid fa-ellipsis" style={{color: "black"}}></i>
                    </div>
                    <PostContent  content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner={postImages.user_images2}   />
                    <PostInteractions likes="45" comments="35" />
                </article>
                <PostInteractionBottom likes="45" comments="35"/>
            </div>
            <div className="post_divider">
                <article className="post">
                <div id='img-men'>
                    <PostProfile key="post_profile"userImage={postImages.user_img2} username="Jesus Gonzalez"  date="4 horas"  />
                    <i class="fa-solid fa-ellipsis" style={{color: "black"}}></i>
                    </div>                    <PostContent  content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner={postImages.user_images3}   />
                    <PostInteractions likes="45" comments="35" />
                </article>
                <PostInteractionBottom likes="45" comments="35"/>
            </div>
            <div className="post_divider">
                <article className="post">
                <div id='img-men'>
                    <PostProfile key="post_profile"userImage={postImages.user_img3} username="Jesus Gonzalez"  date="4 horas"  />
                    <i class="fa-solid fa-ellipsis" style={{color: "black"}}></i>
                    </div><Titul_cart titul_car="COMUNICADO IMPORTANTE" />
                    <PostContent  content="Figma ipsum component variant main layer. Prototype thumbnail opacity outline select image list invite selection scale. Bold clip follower overflow align inspect. Star star asset team arrow pixel pixel vector team. Pen object background overflow draft text. Clip draft hand flatten selection connection flows. Editor undo italic blur union arrow union strikethrough editor. Image clip thumbnail flatten select pencil plugin overflow. Overflow italic star distribute object. Flows editor fill hand align rectangle create duplicate pencil style. Library content component italic group. Pixel content rectangle connection vector outline figma follower. Main flatten rectangle fill overflow share. Shadow style editor overflow edit selection object undo." banner=""   />
                    <PostInteractions likes="45" comments="35" />
                </article>
                <PostInteractionBottom likes="45" comments="35"/>
            </div>
            <div className="post_divider">
                <article className="post">
                <div id='img-men'>
                    <PostProfile key="post_profile"userImage={postImages.user_img4} username="Jesus Gonzalez"  date="4 horas"  />
                    <i class="fa-solid fa-ellipsis" style={{color: "black"}}></i>
                    </div>                    <PostContent  content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner={postImages.user_images4}   />
                    <PostInteractions likes="45" comments="35" />
                </article>
                <div className="post_interactions">
                <PostInteractionBottom likes="42" comments="35"/>
                </div>
            </div>
        </>
    );
}