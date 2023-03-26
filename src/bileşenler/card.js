import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const _divCard=document.createElement("div");
  _divCard.classList.add("card");

  const _divHeadline=document.createElement("div");
  _divHeadline.classList.add("headline");
  _divHeadline.textContent=makale.anabaslik;
  _divCard.appendChild(_divHeadline);

  const _divAuthor=document.createElement("div");
  _divAuthor.classList.add("author");
  _divCard.appendChild(_divAuthor);

  const _divImgCont=document.createElement("div");
  _divImgCont.classList.add("img-container");
  _divAuthor.appendChild(_divImgCont);

  const _imgYazarFoto=document.createElement("img");
  _imgYazarFoto.src=makale.yazarFoto;
  _divImgCont.appendChild(_imgYazarFoto);

  const _spanYazar=document.createElement("span");
  _spanYazar.textContent=`${makale.yazarAdi} tarafından`;
  _divAuthor.appendChild(_spanYazar);

  _divCard.addEventListener("click" , (e) => {
    console.log(makale.anabaslik);
  });
  
  return _divCard 
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios.get("http://localhost:5001/api/makaleler").then(reponse => {
    let makaleler = reponse.data.makaleler
    for(let makale in makaleler){
      makaleler[makale].forEach( a => {
        const _secici= document.querySelector(secici);
        _secici.appendChild(Card(a));
      });
    }
  });
}

export { Card, cardEkleyici }