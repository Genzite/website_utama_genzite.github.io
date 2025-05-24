function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

function toggleHamburger(){
    const btn = document.getElementById('hamburger');
    const sideBar = document.getElementById('sidebar');

    btn.classList.toggle('open');
    sideBar.classList.toggle('-translate-x-full');
    sideBar.classList.toggle('translate-x-0');
}

// main.js
window.onload = () => {
    // Inisialisasi AOS setelah semua elemen dimuat
    AOS.init({
      duration: 1800,  // durasi animasi     // animasi hanya sekali saat scroll pertama
    });
  };
  