function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

function toggleHamburger() {
  const btn = document.getElementById('hamburger');
  const sideBar = document.getElementById('sidebar');

  btn.classList.toggle('open');
  sideBar.classList.toggle('-translate-x-full');
  sideBar.classList.toggle('translate-x-0');

  // Cek jika sidebar dibuka
  if (sideBar.classList.contains('translate-x-0')) {
    // Tambahkan event listener 1x untuk mendeteksi klik di luar
    document.addEventListener('click', clickOutsideHandler);
  }
}

// Fungsi untuk menutup jika klik di luar
function clickOutsideHandler(event) {
  const btn = document.getElementById('hamburger');
  const sideBar = document.getElementById('sidebar');

  // Jika klik bukan di dalam sidebar atau tombol hamburger
  if (!sideBar.contains(event.target) && !btn.contains(event.target)) {
    // Tutup sidebar
    sideBar.classList.add('-translate-x-full');
    sideBar.classList.remove('translate-x-0');
    btn.classList.remove('open');

    // Hapus event listener setelah tertutup
    document.removeEventListener('click', clickOutsideHandler);
  }
}


// main.js
window.onload = () => {
    // Inisialisasi AOS setelah semua elemen dimuat
    AOS.init({
      duration: 1800,  // durasi animasi     // animasi hanya sekali saat scroll pertama
    });
  };


// faq logic 
  function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.material-symbols-rounded');

    // Toggle jawaban
    answer.classList.toggle('hidden');

    // Toggle ikon: expand_more <=> expand_less
    if (icon.textContent.trim() === "expand_more") {
      icon.textContent = "expand_less";
    } else {
      icon.textContent = "expand_more";
    }
  }

// button to top
function setupBackToTopButton(buttonId = "myBtn") {
  const mybutton = document.getElementById(buttonId);

  // Tampilkan tombol saat scroll > 20px
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  });

  // Scroll ke atas saat tombol diklik
  mybutton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Bisa diganti "auto" kalau ingin langsung
    });
  });
}

window.addEventListener("DOMContentLoaded", function() {
  setupBackToTopButton();
});

  