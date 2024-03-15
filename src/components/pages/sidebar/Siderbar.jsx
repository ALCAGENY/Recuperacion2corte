import './sidebar.css';
import { PostProfile } from '../../ui/post/atoms/profile';
import { postImages } from '../../../utils/post_image';
import { CustomLink } from '../../ui/link/customLink';
import { GlobalField } from '../../ui/input/input';
import { Button } from '../../ui/button/button';
import { Texts } from '../../ui/Textos/text';
import { Aside } from '../aside/aside';
import { Perfil } from '../Perfil_left/Perfil_left';
export function Siderbar() {
    return (
        <>
        
        <div id='Conten'>
            <div id='text-bus'>
            <PostProfile 
                        key="post_profile"
                        userImage={postImages.user_images}
                        username=""
                        date=""
                        
                    ></PostProfile>
            <div id='buscador'>
                <div id='input'>
                    <GlobalField placeholder="Crear Publicacion" label={false} />
                </div>
                <img id='check' src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-grise.png" alt="" />
            </div> 
            </div>
            <div id='butons'>
            <CustomLink key="home" valueStr="Contenido multimedia" className="custom-link" />
            <CustomLink key="home" valueStr="Evento" className="custom-link" />
            <CustomLink key="home" valueStr="Escribir articulo" className="custom-link" />
            </div>
        </div>
        <div id='filt'>
        <div id='opcion'>
        <Texts title="Filtrar por:" />
      <Button content="Catergorías: eventos" />
      <Button content="Etiquetas: ciclo 2023-2024" />
      </div>
      </div>
      <Aside></Aside>
      <div id='izq'>
      <Perfil></Perfil>
      <Perfil />
      </div>
        </> 
        
    );
}
