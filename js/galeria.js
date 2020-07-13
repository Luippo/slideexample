//objeto de propiedades sobre la galería
var pg = {
    imgGaleria: document.querySelectorAll("#galeria ul li img"),  // Arreglo, almacena varias imagenes
    rutaImagen: null,
    cuerpoDom: document.querySelector("body"),
    lightBox: null
}

//objeto de metodos sobre la galería

var mg = {
    inicioGaleria: function(){
        for(var i = 0; i < pg.imgGaleria.length; i++){
            pg.imgGaleria[i].addEventListener("click",mg.capturaImagen)
        }
        
    },
    capturaImagen: function(img){
        pg.rutaImagen = img.target;
        mg.lightBox(pg.rutaImagen);
    },
    lightBox: function(img){
        pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id","lightbox");
        pg.lightBox = document.querySelector("#lightbox");

        pg.lightBox.style.width = "100%";
        pg.lightBox.style.height = "100%";
        pg.lightBox.style.position = "fixed";
        pg.lightBox.style.zIndex = "10";
        pg.lightBox.style.background = "rgba(0,0,0,.8)";
        pg.lightBox.style.top = 0;
        pg.lightBox.style.left = 0;
    }
}

//llamar a los inicios
mg.inicioGaleria();