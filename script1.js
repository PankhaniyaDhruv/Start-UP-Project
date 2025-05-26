
let slideIndex = 1;

setSlide(1);

function setSlide(n) {
    showSlide(slideIndex = n);
    setTimeout(() => {
        n++;
        setSlide(n);
    }, 10000);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

}


let container3 = document.querySelector(".container3");
let png = [
    "png/download (1).jpeg",
    "png/download (2).jpeg",
    "png/download (3).jpeg",
    "png/download (4).jpeg",
    "png/download.jpeg",
    "png/im1.jpeg",
    "png/OIP (2).jpeg",
    "png/poteto.jpeg",
]
let n = 10;
for(let i = 0;i<n;i++){
    for(let j = 0; j<n; j++){
        let html = `
        <a id="text" href="TODO item detaile/index.html">
        <div class="container_3">
        <div id="img_div">
        <img id="img_div_img" src="${png[j]}" alt="">
        </div>
        <div id="info_div">
        <!-- Name of Product  -->
        <h4>વસ્તુ: બાટાકા</h4>
        <h5>પાક: રોકડિયા પાક</h5>
        <h5>ખેડૂતનું નામઃ રાજુભાઈ કુકડિયા</h5>
        <h6>સ્થાન: જૂનાગઢ</h6>
        </div>
        </div>
        </a>`
        container3.innerHTML = container3.innerHTML + html
    }
    
    
}

