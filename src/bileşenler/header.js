const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const _headerdiv=document.createElement("div");
  _headerdiv.classList.add("header");

  const _spanDate=document.createElement("span");
  _spanDate.classList.add("date");
  _spanDate.textContent=tarih;
  _headerdiv.appendChild(_spanDate);

  const _h1Baslik=document.createElement("h1");
  _h1Baslik.textContent=baslik;
  _headerdiv.appendChild(_h1Baslik);

  const _spanTemp=document.createElement("span");
  _spanTemp.classList.add("temp");
  _spanTemp.textContent=yazi;
  _headerdiv.appendChild(_spanTemp);

  return _headerdiv;
  
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const _headerCont=document.querySelector(secici);
  const objHeader={
    baslik:"Din, Bilim, Darwin",
    tarih:"26.03.2023",
    yazi:"Temmuz Çetiner"
  }
  const _header=Header(objHeader.baslik,objHeader.tarih,objHeader.yazi);
 _headerCont.appendChild(_header);
}

export { Header, headerEkleyici }