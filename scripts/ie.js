console.log(navigator.userAgent);
if (navigator.userAgent.indexOf('Trident') != -1 || navigator.userAgent.indexOf('MSIE') != -1) {
   // IE 10 or older => return version number
    var b = document.querySelector("body");
    b.innerHTML = "<h1>Ce site ne supporte pas internet explorer, merci de choisir un autre navigateur web pour utiliser notre site.</h1>"
    var h = document.querySelector("h1");
    h.style.textAlign = "center";
    h.style.color = "red";    
}