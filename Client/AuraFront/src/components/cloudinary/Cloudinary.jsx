import React, { useState } from "react";
import { Container } from 'reactstrap';
import Dropzone from 'react-dropzone';
import axios from "axios";
import './cloudinary.css';


const MultiplesImagenes = (props) => {

    const [image, setImage] = useState({ array: [] })
    const [Loading, setLoading] = useState ("")

    const handleDrop = (files) => {
        const uploaders = files.map((file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags",` codeinfuse, medium, gist`);
            formData.append("upload_preset","WorkArtist");
            formData.append("api_key", "753773386976734");
            formData.append("timestamp", (Date.now() / 1000) | 0);
            setLoading("true");
            return axios
            .post("https://api.cloudinary.com/v1_1/dl6ri9wnd/image/upload", formData, {
                headers: {"X-Requested-With": "XMLHttpRequest"}, 
            })
            .then((response) => {
                const data = response.data
                const fileURL = data.secure_url;
                let specificArrayInObjet = image.array;
                specificArrayInObjet.push(fileURL);
                const newobj = {...image, specificArrayInObjet};
                setImage(newobj)
                console.log(image)
                
            })
        })
        axios.all(uploaders).then(() => {
            setLoading("false")
        })
    }

    function imagePreview(){
        if(Loading === "true") {
            return <h3>Cargando imágenes...</h3>
        }
        if (Loading === "false") {
            return (
            <h3>
                {image.array.length <= 0 
                ? "No hay imgenes"
                : image.array.map((item, index) =>(
                    <img
                    alt='Imagen'
                    style={{width: "450px", height: "500px", backgroundSize: "cover", paddingRight: "15px"
                }}
                src={item} />
                ))
            }
            </h3>
        )}
    }


    return (
        <div><Container>
            <h2 className="text-center">Sube tus imágenes aquí</h2>
            <Dropzone
                classname="dropzone"
                onDrop={handleDrop}
                onChange={(e) => setImage(e.target.value)}
                value={image}
            >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps({className: "dropzone"})}>
                            <input {...getInputProps()} />
                            <p>Coloca tus imágenes</p>
                        </div>
                    </section>

                )}
            </Dropzone>
            {imagePreview()}
        </Container></div>);
}

export default MultiplesImagenes;