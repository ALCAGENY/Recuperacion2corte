    import './img.css';

    export function Img({ src, alt, props }) {
        return (
            <>
        <h1 id='textos'>{props.tituls}</h1>
            <img id='imagen' src={src} alt={alt} />
            </>
        );
    }