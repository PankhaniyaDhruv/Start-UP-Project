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

for(let i = 0;i<10;i++){
    for(let j = 0; j<8; j++){
        let html = `
        <a href="TODO item detaile/index.html">
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