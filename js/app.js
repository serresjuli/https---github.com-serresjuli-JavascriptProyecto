//Creo la class de productos
class Productos {
    constructor(id, nombre, color, precio, descripcion, talle, imagen){
        this.id = id
        this.nombre = nombre.toUpperCase(); // para que pase a MAYUSCULA
        this.color = color.toUpperCase(); // para que pase a MAYUSCULA
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
        this.talle = talle;
        this.imagen = imagen;
    }
}
//constante productos
const producto = []
//Creo los productos
producto.push(new Productos ("1", "conjunto", "beige", "1950", "lana", "3", "<img class='img__box img' src='imagenes/tejidos1.jpg' alt='tejido1'></img>"  ))
producto.push(new Productos ("2", "CHALECO", "azul", "750", "lana", "6", "<img class='img__box img' src='imagenes/tejidos2.jpg' alt='tejido2'></img>"  ))
producto.push(new Productos ("3", "conjunto", "rosa", "1950", "lana", "9", "<img class='img__box img' src='imagenes/tejidos3.jpg' alt='tejido3'></img>"  ))
producto.push(new Productos ("4", "ranita", "blanca", "790", "lana", "0", "<img class='img__box img' src='imagenes/tejidos4.jpg' alt='tejido4'></img>"  ))
producto.push(new Productos ("5", "enterito", "aero", "1250", "lana", "12", "<img class='img__box img' src='imagenes/tejidos5.jpg' alt='tejido5'></img>"  ))
producto.push(new Productos ("6", "gorro", "celeste", "620", "lana", "9", "<img class='img__box img' src='imagenes/tejidos6.jpg' alt='tejido6'></img>"  ))
producto.push(new Productos ("7", "conjunto", "verde musgo", "1950", "lana", "18", "<img class='img__box img' src='imagenes/tejidos7.jpg' alt='tejido7'></img>"  ))
producto.push(new Productos ("8", "gorro", "gris", "690", "lana", "12", "<img class='img__box img' src='imagenes/tejidos8.jpg' alt='tejido8'></img>"  ))
producto.push(new Productos ("9", "conjunto", "azul marino", "1950", "lana", "6", "<img class='img__box img' src='imagenes/tejidos9.jpg' alt='tejido9'></img>"  ))
producto.push(new Productos ("10", "saquito", "beige", "1450", "lana", "3", "<img class='img__box img' src='imagenes/tejidos1.jpg' alt='tejido1'></img>"  ))
producto.push(new Productos ("11", "saquito", "rosa", "1450", "lana", "9", "<img class='img__box img' src='imagenes/tejidos3.jpg' alt='tejido3'></img>"  ))
producto.push(new Productos ("12", "conjunto", "verde musgo", "1450", "lana", "18", "<img class='img__box img' src='imagenes/tejidos7.jpg' alt='tejido7'></img>"  ))
//Creo los productos en HTML
for (const Productos of producto) {
    $('.productos').append("<div class='productos__box'>"+Productos.imagen+
        "<p class='p__box textobig detalle'>"+Productos.nombre+" - <br> " + Productos.color+"</p><br>"+
        "<p class='p__box textobig talle'>Talle: "+Productos.talle+"M</p>"+
        "<p class='p__box textobig precio'><strong>$"+Productos.precio+"</strong></p><br>"+
        "<button class='comprar textobig'> COMPRAR </button> <button class='contacto textobig'> QUIERO NOVEDADES!</button></div>")
}
//Formulario para contacto
$('.formularioContacto').prepend("<div class='titular__contacto'><h2 class='textobig'>PODES CONTACTARNOS:</h2></div>"+
    "<form class='form__contacto'action='mailto:serresjuli@gmail.com' method='post' enctype='text/plain' >"+
        "<div class='form__nombre'>"+
            "<label class='form__nombre' for='nombre_apellido'>Nombre:</label>"+
            "<input type='Text' name='nombre_apellido'/>"+
        "</div>"+
        "<div class='form__telefono'>"+ 
            "<label for='Telefono_contacto'>Whatsapp:</label>"+
            "<input type='Text' name='Telefono_contacto'/>"+
        "</div>"+
        "<div class='form__correo'>"+    
            "<label for='Correo_email'>Correo:</label>"+
            "<input type='Text' name='Correo_email'/>"+
            "</div>"+
        "<div class='form__detalle'>"+    
            "<label for='detalle__producto'>Consulta</label>"+
            "<input type='Text' name='Consulta'/>"+
            "</div>"+
        "<div class='form__botones'>"+
            "<input class='btn_form form_enviar' type='submit' value='Enviar formulario'/><br>"+
            "<input class='btn_form form_limpiar' type='reset' value='Limpiar formulario'/><br>"+
            "<input class='form_cerrar' type='button' value='cerrar'/>"+
        "</div>"
)

//DESPLEGAR FORMULARIO CON CLICK AL BUTTON
let contactar = $(".contacto");
contactar.click( ()=>{
    let myForm = $(".formularioContacto");
    myForm.show(1400);
})
contactar.click(function(e){
    e.preventDefault();
    $('html, body, .bodyproductos, .cuerpo__productos').animate({
        scrollTop: $(".formularioContacto").offset().top}, 2500);
})            

//OCULTAR FORMULARIO CON CLICK AL BUTTON CERRAR
let cerrar = $(".form_cerrar");
cerrar.click(() =>{
    let myForm = $(".formularioContacto");
    myForm.hide(1400);
})
cerrar.click(function(e){
    e.preventDefault();
    $('html, body, .bodyproductos, .cuerpo__productos').animate({
        scrollTop: $(".productos").offset().top}, 2500);
})
