import './aside.css'
import { PostProfile } from '../../ui/post/atoms/profile'
import { PostContent } from '../../ui/post/atoms/content'
import { postImages } from '../../../utils/post_image';
import { Texts } from '../../ui/Textos/text';
import { CustomLink } from '../../ui/link/customLink';
export function Aside(){
    return(
        <div id='cont'>
            <div id="post_divider">
                <article id="post">
                    <div className='profile-container'>
                        <div id='perf'>
                            <PostProfile className="post-profile" userImage={postImages.user_images} username="" date="" />
                            <Texts title="Joanna Rosenbaum"  />
                        </div>
                    </div>
                    <div className="post-content-wrapper">
                        <PostContent content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner=""/>
                    </div>       
                    <div id='but'>     
                    <CustomLink key="shared" valueStr="24 articulos" />
                    <CustomLink key="shared" valueStr="136 articulos" />
            </div>
                </article>
            </div>
        </div>
    )
}
