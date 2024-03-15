import './Perfil.css';
import { PostContent } from '../../ui/post/atoms/content';
import { Tituls } from '../../ui/Textos/Tituls';
import { PostProfile } from '../../ui/post/atoms/profile';
import { CustomLink } from '../../ui/link/customLink';
import { postImages } from '../../../utils/post_image';
export function Perfil() {
    return (
        <div id='conte'>
            <div id="post_divider">   
                    <Tituls tituls="Artículos recientes" />
            </div>
            <div className="post-content">
                <PostContent content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner="" />
            </div>
            <div id='profile-con'>
                <div id='img-but'> 
    <div className="post-profile-container">
        <PostProfile className="post-profile" userImage={postImages.user_images} username="Cary Jhone" date="" />
    </div>
    <PostContent content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner=""/>
    <div id='but-sab'>
        <CustomLink id="link" key="shared" valueStr="Saber más"  />
    </div>
</div>
          </div>
          <div id="post_divider">
                    <Tituls tituls="Artículos recientes" />
            </div>
            <div className="post-content">
                <PostContent content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner="" />
            </div>

            <div id='profile-cons'>
                <div id='img-but'> 
    <div className="post-profile-container">
        <PostProfile className="post-profile" userImage={postImages.user_images} username="Cary Jhone" date="" />
    </div>
    <PostContent content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner=""/>
    <div id='but-sab'>
        <CustomLink id="link" key="shared" valueStr="Saber más"  />
    </div>
</div>
          </div>
          <div id="post_divider">
                    <Tituls tituls="Artículos recientes" />
            </div>
            <div className="post-content">
                <PostContent content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner="" />
            </div>

            <div id='profile-const'>
                <div id='img-but'> 
    <div className="post-profile-container">
        <PostProfile className="post-profile" userImage={postImages.user_images} username="Cary Jhone" date="" />
    </div>
    <PostContent content="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link" banner=""/>
    <div id='but-sab'>
        <CustomLink id="link" key="shared" valueStr="Saber más"  />
    </div>
</div>
          </div>
        </div>
    );
}
