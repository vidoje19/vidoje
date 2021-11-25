
function vracamNizArtikala() {
  return [
    {
      id: 1,
      marka: "HUAWEI",
      model: "P10 LITE BLACK DS",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/huaweiP10.jpg",
        alt: "huaweiP10",
      },
      kolicina: 22,
      cena: 29999,
      specifikacije: {
        ekran: 5.2,
        procesor: "Octa-Core",
        RAM: "3GB",
        operativniSistem: "Android OS, v7.0 (Nougat)",
        kamera: {
          prednja: "12 MP",
          zadnja: "8MP",
        },
      },
      popust: 30,
    },
    {
      id: 2,
      marka: "HUAWEI",
      model: "P8 LITE WHITE",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/huaweiP8.jpg",
        alt: "huaweiP8",
      },
      kolicina: 2,
      cena: 19999,
      specifikacije: {
        ekran: 5,
        procesor: "Octa-Core",
        RAM: "2GB",
        operativniSistem: "Android OS, v5.0.2 (Lollipop)",
        kamera: {
          prednja: "5MP",
          zadnja: "13MP",
        },
      },
      popust: 15,
    },
    {
      id: 3,
      marka: "SAMSUNG",
      model: "Galaxy J3 J320 GOLD",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/samsungJ3.jpg",
        alt: "samsungJ3",
      },
      kolicina: 16,
      cena: 18999,
      specifikacije: {
        ekran: 5,
        procesor: "Quad-core ",
        RAM: "1.5GB",
        operativniSistem: "Android 5.1.1 (Lollipop)",
        kamera: {
          prednja: "5MP",
          zadnja: "8MP",
        },
      },
      popust: 0,
    },
    {
      id: 4,
      marka: "HUAWEI",
      model: "Y3 II WH",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/huaweiY3.jpg",
        alt: "huaweiY3",
      },
      kolicina: 8,
      cena: 12990,
      specifikacije: {
        ekran: 4.5,
        procesor: "Quad-core",
        RAM: "1GB",
        operativniSistem: "Android OS, v5.1 (Lollipop)",
        kamera: {
          prednja: "2MP",
          zadnja: "5MP",
        },
      },
      popust: 0,
    },
    {
      id: 5,
      marka: "SAMSUNG",
      model: "Galaxy J7",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/SasmungGalaxy.jpg",
        alt: "SasmungGalaxy",
      },
      kolicina: 2,
      cena: 29999,
      specifikacije: {
        ekran: 5.5,
        procesor: "Octa-Core",
        RAM: "3GB",
        operativniSistem: "Android OS, v7.0 (Nougat)",
        kamera: {
          prednja: "5MP",
          zadnja: "13MP",
        },
      },
      popust: 30,
    },
    {
      id: 6,
      marka: "SAMSUNG",
      model: "S8 G950F BLACK",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/samsungS8.jpg",
        alt: "samsungS8",
      },
      kolicina: 22,
      cena: 29999,
      specifikacije: {
        ekran: 5.5,
        procesor: "Octa-Core",
        RAM: "4GB",
        operativniSistem: "Android OS, v7.0 (Nougat)",
        kamera: {
          prednja: "12MP",
          zadnja: "8MP",
        },
      },
      popust: 10,
    },
  ];
}
;
var rezerva;
window.addEventListener("load", function () {

  const artikli = vracamNizArtikala();
  console.log(artikli);

  ispisiArtikle(artikli);

  function ispisiArtikle(nizArtikala) {

    rezerva = nizArtikala;

    console.log(rezerva);
    let ispis = "";

    
    nizArtikala.forEach(element => {

      ispis += `<div class="blok">
      <img src="${element.slika.putanja}" alt="${element.slika.alt}" />
      <h3>${element.marka} - ${element.tipProizvoda} - ${element.model}</h3>
      <ul>`;

      if (element.specifikacije.ekran) {

        ispis += `<li>Ekran: ${element.specifikacije.ekran}</li>`
      }
      ispis += `<li>RAM: ${element.specifikacije.RAM}</li>
        <li>Procesor: ${element.specifikacije.procesor}</li>
        <li>Operativni sistem: ${element.specifikacije.operativniSistem}</li>
        <li>Kamera:
          <ul>
            <li>Prednja kamera: ${element.specifikacije.kamera.prednja}</li>
            <li>Zadnja kamera: ${element.specifikacije.kamera.zadnja}</li>
          </ul>
        </li>

      </ul>
      <h4>`;

      let cena;

      if (element.popust != 0) {
        cena = element.cena - Math.round((element.cena * element.popust) / 100);
      } else {
        cena = element.cena;
      }
      ispis += `${cena}
       </h4>
      <a class="korpaText" href="#" data-id="${element.id}">DODAJ U KORPU</a>
    </div>`;
    });

    console.log(ispis)
    document.getElementById("artikli").innerHTML = ispis;
  }

  let buttons = document.querySelectorAll(".korpaText");

  for (let el of buttons) {
    el.addEventListener("click", dohvatiArtikle);
  }
  function dohvatiArtikle(e) {
    e.preventDefault();
    console.log(this);
    let elId = this.dataset.id;


    let pronadjeni = rezerva.find(function (element) {
      if (element.id == elId) return element;

    })

    if (pronadjeni) {

      console.log(pronadjeni)
    }
    else {
      console.log("Nema takvog")
    }
  }

  const input = document.getElementById("tbDeoModel");
  input.addEventListener("keyup", filterProizvoda);


  function filterProizvoda() {
    let unos = this.value;
    let filtrirani = rezerva.filter(function (element) {

      if (element.model.toUpperCase().indexOf(unos.trim().toUpperCase()) != -1
        ||
        element.marka.toUpperCase().indexOf(unos.trim().toUpperCase()) != -1) {

        return element;

      }



    })

    ispisiArtikle(filtrirani);
  }
  const klikSort = document.getElementById("sortMarka");
  klikSort.addEventListener("click", sortiraj);

  function sortiraj() {
    console.log("test")
    rezerva.sort(function (a, b) {
      if (a.marka < b.marka) {
        return -1;
      }
      if (a.marka > b.marka) {
        return 1;
      }

      if (a.marka == b.marka) {
        return 0;
      }

    })
    ispisiArtikle(rezerva);
  }

  const slajder = document.getElementById("rnCena");
  slajder.addEventListener("change", upisiCenu);

  function upisiCenu() {

    let cena = this.value;
    document.getElementById("cenaIzbor").textContent = cena;
    filterCene();
  }

  const dugme = document.getElementById("btnCena");
  dugme.addEventListener("click", filterCene);

  function filterCene() {
    let cena = document.getElementById("rnCena").value;
    let noviNiz = rezerva.filter(function (element) {

      if (element.cena <= cena) return element;

    })
    ispisiArtikle(noviNiz);

  }


})