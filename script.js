// ---------- DOM Selection ----------
function domSelection() {
  // ------------------------------------------------------------------------------
  // // getElementById()
  // // -> element
  // const judul = document.getElementById("judul");
  // judul.style.color = "red";
  // judul.style.backgroundColor = "#ccc";
  // judul.innerHTML = "ShalanggaID";
  // ------------------------------------------------------------------------------
  // // getElementsByTagName()
  // // -> HTMLCollections (array) (meskipun cuman ada 1, tetap menghasilkan array)
  // const p = document.getElementsByTagName("p");
  // for (let i = 0; i < p.length; i++) {
  //   p[i].style.backgroundColor = "lightblue";
  // }
  // ------------------------------------------------------------------------------
  // // getElementsByClassName()
  // // -> HTMLCollection (array) (meskipun cuman ada 1, tetap menghasilkan array)
  // const p1 = document.getElementsByClassName("p1")[0];
  // p1.innerHTML = "ini diubah dari javascript";
  // ------------------------------------------------------------------------------
  // // querySelector()
  // // -> element
  // const p4 = document.querySelector("#b p");
  // p4.style.color = "green";
  // p4.style.fontSize = "30px";
  // const li2 = document.querySelector("section#b ul li:nth-child(2)");
  // li2.style.backgroundColor = "orange";
  // ------------------------------------------------------------------------------
  // // querySelectorAll()
  // // -> nodeList (array)
  // const p = document.querySelectorAll("p");
  // for (let i = 0; i < p.length; i++) {
  //   p[i].style.backgroundColor = "lightblue";
  // }
  // ------------------------------------------------------------------------------
}

// ---------- DOM Manipulation ----------
function domManipulation() {
  // ------------------------------------------------------------------------------
  // // ----- Manipulation Element -----
  // --------------------------------------
  // // 1. innerHTML
  // const judul = document.getElementById("judul");
  // judul.innerHTML = "<em>Angga R</em>";
  // const sectionA = document.querySelector("section#a");
  // sectionA.innerHTML = "Hello World";
  // --------------------------------------
  // // 2. style.<property>
  // const judul = document.querySelector("#judul");
  // judul.style.color = "lightblue";
  // judul.style.backgroundColor = "salmon";
  // --------------------------------------
  // // 3. setAttribute()
  // const judul = document.getElementsByTagName("h1")[0];
  // judul.setAttribute("name", "anggara");
  // --------------------------------------
  // // 4. getAttribute()
  // const a = document.querySelector("a");
  // a.getAttribute("href");
  // --------------------------------------
  // // 5. removeAttribute()
  // const a = document.querySelector("a");
  // a.removeAttribute("href");
  // --------------------------------------
  // // 6. classList.<property>()
  // const p2 = document.querySelector(".p2");
  // // 6.1 add()
  // p2.classList.add("label");
  // // 6.2 remove()
  // p2.classList.remove("label");
  // // 6.3 toggle()
  // p2.classList.toggle("label");
  // // 6.4 item()
  // p2.classList.item(1); // dimulai dari 0
  // // 6.5 contains()
  // p2.classList.contains("label");
  // // 6.6 replace()
  // p2.classList.replace("label", "cinta");
  // --------------------------------------
  // --------------------------------------
  // // ----- Manipulation Node -----
  // --------------------------------------
  // 1. appendChild()
  // buat element baru
  const pBaru = document.createElement("p");
  const textPBaru = document.createTextNode("Paragraf Baru");
  // simpan tulisan didalamm paragraf
  pBaru.appendChild(textPBaru);
  // simpan pBaru diakhir section a
  const sectionA = document.getElementById("a");
  sectionA.appendChild(pBaru);
  // --------------------------------------
  // 2. insertBefore()
  // buat element baru
  const liBaru = document.createElement("li");
  const textLiBaru = document.createTextNode("Item Baru");
  // simpan tulisan didalamm paragraf
  liBaru.appendChild(textLiBaru);
  // simpan li baru di ul sebelum li2
  const ul = document.querySelector("section#b ul");
  const li2 = ul.querySelector("li:nth-child(2)");
  ul.insertBefore(liBaru, li2);
  // --------------------------------------
  // 3. removeChild()
  const link = document.getElementsByTagName("a")[0];
  sectionA.removeChild(link);
  // --------------------------------------
  // 4. replaceChild()
  const sectionB = document.getElementById("b");
  const p4 = sectionB.querySelector("p");

  const h2Baru = document.createElement("h2");
  const textH2Baru = document.createTextNode("Judul Baru");
  h2Baru.appendChild(textH2Baru);

  sectionB.replaceChild(h2Baru, p4);
  // --------------------------------------
  // Menandai hal yang baru di Manipulation Node
  pBaru.style.backgroundColor = "lightgreen";
  liBaru.style.backgroundColor = "lightgreen";
  h2Baru.style.backgroundColor = "lightgreen";
  // ------------------------------------------------------------------------------
}

// ---------- DOM Events ----------
function domEvents() {
  // 1. Event Handler
  const p3 = document.querySelector(".p3");
  function ubahWarna() {
    p3.style.backgroundColor = "lightblue";
  }
  // element method. bila yang inline HTML attribute, ditulis di htmlnya onclick(ubahWarna)
  p3.onclick = ubahWarna;

  // 2. addEventListener()
  const p4 = document.querySelector("section#b p");
  p4.addEventListener("click", function () {
    const ul = document.querySelector("section#b ul");
    const liBaru = document.createElement("li");
    const textLiBaru = document.createTextNode("item baru");
    liBaru.appendChild(textLiBaru);
    ul.appendChild(liBaru);
  });
}

// ---------- Latihan Warna ----------
function latihanWarna() {
  const button = document.getElementsByClassName("button")[0];
  const h1 = document.getElementsByTagName("h1")[0];

  button.addEventListener("click", function () {
    document.body.classList.toggle("black");
  });

  const tAcakWarna = document.createElement("button");
  const textTombol = document.createTextNode("Acak Warna");
  tAcakWarna.appendChild(textTombol);
  tAcakWarna.setAttribute("type", "button");
  button.after(tAcakWarna);

  tAcakWarna.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  });

  const sMerah = document.querySelector("input[name=sMerah]");
  const sHijau = document.querySelector("input[name=sHijau]");
  const sBiru = document.querySelector("input[name=sBiru]");

  sMerah.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  });

  sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  });

  sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  });

  document.body.addEventListener("mousemove", function (e) {
    // posisi sumbu x
    const posisiX = Math.round((e.clientX / window.innerWidth) * 255);
    // posisi sumbu y
    const posisiY = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor =
      "rgb(" + posisiX + "," + posisiY + ",100)";
  });
}

// ---------- DOM Traversal ----------
function domTraversal() {
  const close = document.querySelectorAll(".close");
  const card = document.querySelectorAll(".card");

  // for (let i = 0; i < close.length; i++) {
  //   close[i].addEventListener("click", function (e) {
  //     e.target.parentElement.style.display = "none";
  //   });
  // }

  close.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.target.parentElement.style.display = "none";
      // untuk menghentikan aksi default (pindah halaman karena tag a href="")
      e.preventDefault();
      e.stopPropagation(); // biar tidak menjalankan event .card di line 226-230
    });
  });

  card.forEach(function (card) {
    card.addEventListener("click", function (e) {
      alert("ok");
    });
  });
}

function domTraversalEfektif() {
  const container = document.querySelector(".container");

  container.addEventListener("click", function (e) {
    if (e.target.className == "close") {
      e.target.parentElement.style.display = "none";
      e.preventDefault();
    }
  });
}

// ---------- Kalkulator ----------
function kalkulator() {
  const input1 = document.querySelector("input[name=bil1]");
  const op = document.querySelector("select[name=op]");
  const input2 = document.querySelector("input[name=bil2]");
  const button = document.getElementById("button");
  const output = document.querySelector("input[name=hasil]");

  button.addEventListener("click", function () {
    let hasil;
    const bil1 = parseFloat(input1.value);
    const bil2 = parseFloat(input2.value);
    if (op.value == "+") {
      hasil = bil1 + bil2;
    } else if (op.value == "-") {
      hasil = bil1 - bil2;
    } else if (op.value == "x") {
      hasil = bil1 * bil2;
    } else if (op.value == "/") {
      hasil = bil1 / bil2;
    }
    output.setAttribute("value", hasil);
  });
}

// ---------- IMG SLIDE ----------
function imgSlide() {
  const container = document.querySelector(".container");
  const jumbo = document.querySelector(".jumbo");
  const thumbs = document.querySelectorAll(".thumb");

  container.addEventListener("click", function (e) {
    // cek apakah yang di klik adalah thumb
    if (e.target.className == "thumb") {
      jumbo.src = e.target.src;
      jumbo.classList.add("fade");
      setTimeout(function () {
        jumbo.classList.remove("fade");
      }, 500);
    }

    thumbs.forEach(function (thumb) {
      // if (thumb.classList.contains("active")) {
      //   thumb.classList.remove("active");
      // }
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  });
}

// domSelection();
// domManipulation();
// domEvents();
// latihanWarna();
// domTraversal();
// domTraversalEfektif();
// kalkulator();
// imgSlide();
