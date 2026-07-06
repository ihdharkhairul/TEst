// ============ HYPERCARE — SHARED COMPONENTS ============

const HC_NAVBAR = `
<nav class="bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-[#F1EDE3]">
  <div class="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-[72px]">
    <a href="index.html" class="flex items-center gap-2">
      <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold text-lg">H</div>
      <span class="font-display font-bold text-lg text-[var(--text)]">HyperCare</span>
    </a>
    <div class="hidden lg:flex items-center gap-7" id="hc-navbar-links">
      <a href="index.html" data-nav="home" class="navbar-link">Home</a>
      <a href="index.html#tentang" data-nav="tentang" class="navbar-link">Tentang</a>
      <a href="index.html#layanan" data-nav="layanan" class="navbar-link">Layanan</a>
      <a href="index.html#perawat" data-nav="perawat" class="navbar-link">Perawat</a>
      <a href="index.html#edukasi" data-nav="edukasi" class="navbar-link">Edukasi</a>
      <a href="index.html#faq" data-nav="faq" class="navbar-link">FAQ</a>
      <a href="login.html" data-nav="login" class="navbar-link">Login</a>
    </div>
    <div class="hidden lg:flex items-center gap-3">
      <a href="register-pasien.html" class="btn-primary text-sm">Daftar Sekarang</a>
    </div>
    <button id="hc-burger" class="lg:hidden text-2xl text-[var(--text)]"><i class="fa-solid fa-bars"></i></button>
  </div>
  <div id="hc-mobile-menu" class="hidden lg:hidden flex-col gap-1 px-4 pb-4 bg-white border-t border-[#F1EDE3]">
    <a href="index.html" class="sidebar-link">Home</a>
    <a href="index.html#tentang" class="sidebar-link">Tentang</a>
    <a href="index.html#layanan" class="sidebar-link">Layanan</a>
    <a href="index.html#perawat" class="sidebar-link">Perawat</a>
    <a href="index.html#edukasi" class="sidebar-link">Edukasi</a>
    <a href="index.html#faq" class="sidebar-link">FAQ</a>
    <a href="login.html" class="sidebar-link">Login</a>
    <a href="register-pasien.html" class="btn-primary text-center mt-2">Daftar Sekarang</a>
  </div>
</nav>`;

const HC_FOOTER = `
<footer class="bg-[#1E1709] text-[#F3E6C8] mt-10">
  <div class="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <div class="flex items-center gap-2 mb-3">
        <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold">H</div>
        <span class="font-display font-bold text-white">HyperCare</span>
      </div>
      <p class="text-sm text-[#C9B889] leading-relaxed">Layanan telemonitoring hipertensi terpercaya untuk membantu Anda menjaga tekanan darah setiap hari.</p>
    </div>
    <div>
      <h4 class="font-semibold text-white mb-3">Menu</h4>
      <ul class="space-y-2 text-sm text-[#C9B889]">
        <li><a href="index.html" class="hover:text-primary">Home</a></li>
        <li><a href="index.html#tentang" class="hover:text-primary">Tentang</a></li>
        <li><a href="index.html#layanan" class="hover:text-primary">Layanan</a></li>
        <li><a href="index.html#edukasi" class="hover:text-primary">Edukasi</a></li>
        <li><a href="index.html#faq" class="hover:text-primary">FAQ</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-semibold text-white mb-3">Informasi</h4>
      <ul class="space-y-2 text-sm text-[#C9B889]">
        <li><a href="index.html#tentang" class="hover:text-primary">Tentang Kami</a></li>
        <li><a href="#" class="hover:text-primary">Kebijakan Privasi</a></li>
        <li><a href="#" class="hover:text-primary">Syarat &amp; Ketentuan</a></li>
        <li><a href="#" class="hover:text-primary">Kontak</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-semibold text-white mb-3">Kontak</h4>
      <ul class="space-y-2 text-sm text-[#C9B889]">
        <li><i class="fa-solid fa-phone mr-2"></i>0813-2456-7890</li>
        <li><i class="fa-solid fa-envelope mr-2"></i>info@hypercare.id</li>
        <li><i class="fa-solid fa-location-dot mr-2"></i>Universitas Mandala Waluya, Kendari</li>
      </ul>
      <div class="flex gap-3 mt-4 text-lg">
        <a href="#" class="hover:text-primary"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="hover:text-primary"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="hover:text-primary"><i class="fa-brands fa-youtube"></i></a>
        <a href="#" class="hover:text-primary"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>
  </div>
  <div class="border-t border-[#3A2E12] text-center py-4 text-xs text-[#9C8A5C]">
    &copy; 2025 HyperCare — Proyek Akademik Universitas Mandala Waluya Kendari. All rights reserved.
  </div>
</footer>`;

function hcSidebar(role, active){
  const pasienMenu = [
    {href:'dashboard-pasien.html', icon:'fa-gauge-high', label:'Dashboard', key:'dashboard'},
    {href:'profil-pasien.html', icon:'fa-user', label:'Profil Saya', key:'profil'},
    {href:'catat-tekanan.html', icon:'fa-heart-pulse', label:'Catat Tekanan Darah', key:'catat'},
    {href:'riwayat-pemeriksaan.html', icon:'fa-table-list', label:'Riwayat Pemeriksaan', key:'riwayat'},
    {href:'konsultasi-perawat.html', icon:'fa-comment-medical', label:'Konsultasi Perawat', key:'konsultasi'},
    {href:'ai-chat.html', icon:'fa-robot', label:'AI Chat Hipertensi', key:'aichat'},
    {href:'index.html#edukasi', icon:'fa-book-open', label:'Edukasi Hipertensi', key:'edukasi'},
  ];
  const perawatMenu = [
    {href:'dashboard-perawat.html', icon:'fa-gauge-high', label:'Dashboard', key:'dashboard'},
    {href:'data-pasien.html', icon:'fa-users', label:'Data Pasien', key:'datapasien'},
    {href:'monitoring-pasien.html', icon:'fa-chart-line', label:'Monitoring Pasien', key:'monitoring'},
    {href:'chat-perawat.html', icon:'fa-comments', label:'Konsultasi', key:'chatperawat'},
    {href:'profil-perawat.html', icon:'fa-user-nurse', label:'Profil', key:'profil'},
  ];
  const menu = role === 'perawat' ? perawatMenu : pasienMenu;
  const items = menu.map(m => `
    <a href="${m.href}" class="sidebar-link ${active===m.key?'active':''}">
      <i class="fa-solid ${m.icon} w-5 text-center"></i><span>${m.label}</span>
    </a>`).join('');
  const loginPage = role === 'perawat' ? 'login-perawat.html' : 'login-pasien.html';
  return `
  <aside id="hc-sidebar" class="sidebar-mobile w-[260px] bg-white border-r border-[#F1EDE3] min-h-screen px-4 py-6 flex flex-col">
    <a href="index.html" class="flex items-center gap-2 px-2 mb-8">
      <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold text-lg">H</div>
      <span class="font-display font-bold text-lg">HyperCare</span>
    </a>
    <nav class="flex flex-col gap-1 flex-1">${items}</nav>
    <a href="${loginPage}" class="sidebar-link text-[#C53030] mt-4">
      <i class="fa-solid fa-arrow-right-from-bracket w-5 text-center"></i><span>Logout</span>
    </a>
  </aside>`;
}

function hcTopbarDashboard(name, role, photo){
  return `
  <header class="flex items-center justify-between bg-white border-b border-[#F1EDE3] px-5 md:px-8 h-[72px] sticky top-0 z-30">
    <div class="flex items-center gap-3">
      <button id="hc-burger" class="lg:hidden text-xl text-[var(--text)]"><i class="fa-solid fa-bars"></i></button>
      <div>
        <p class="text-xs text-[#94A3B8]">Selamat datang,</p>
        <p class="font-semibold leading-tight">${name} <span class="ml-1">👋</span></p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button class="relative text-[#475569] text-lg"><i class="fa-regular fa-bell"></i><span class="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span></button>
      <div class="flex items-center gap-2">
        <img src="${photo}" class="w-9 h-9 rounded-full object-cover border-2 border-primary" alt="${name}">
        <div class="hidden md:block leading-tight">
          <p class="text-sm font-medium">${name}</p>
          <p class="text-xs text-[#94A3B8]">${role}</p>
        </div>
      </div>
    </div>
  </header>`;
}

function hcMount(){
  document.querySelectorAll('[data-component="navbar"]').forEach(el => el.outerHTML = HC_NAVBAR);
  document.querySelectorAll('[data-component="footer"]').forEach(el => el.outerHTML = HC_FOOTER);
  document.querySelectorAll('[data-component="sidebar"]').forEach(el => {
    el.outerHTML = hcSidebar(el.dataset.role, el.dataset.active);
  });
  document.querySelectorAll('[data-component="topbar"]').forEach(el => {
    el.outerHTML = hcTopbarDashboard(el.dataset.name, el.dataset.role, el.dataset.photo);
  });

  // mobile burger toggle (works for both navbar + sidebar contexts)
  document.addEventListener('click', (e) => {
    if(e.target.closest('#hc-burger')){
      const mobileNav = document.getElementById('hc-mobile-menu');
      const sidebar = document.getElementById('hc-sidebar');
      if(mobileNav){ mobileNav.classList.toggle('hidden'); mobileNav.classList.toggle('flex'); }
      if(sidebar){ sidebar.classList.toggle('open'); }
    } else if(!e.target.closest('#hc-sidebar') && document.getElementById('hc-sidebar')?.classList.contains('open') && !e.target.closest('#hc-burger')){
      // optional: close on outside click for mobile sidebar
    }
  });

  const page = document.body.dataset.navActive;
  if(page){
    document.querySelectorAll(`[data-nav="${page}"]`).forEach(a => a.classList.add('active'));
  }
}

document.addEventListener('DOMContentLoaded', hcMount);

// ============ DUMMY NOTIFICATION TOAST ============
function hcToast(message, type='success'){
  const colors = { success:'#22A559', error:'#E53E3E', info:'#F4A300' };
  const el = document.createElement('div');
  el.className = 'fixed top-5 right-5 z-[999] px-5 py-3 rounded-xl shadow-lg text-white font-medium text-sm flex items-center gap-2 animate-fadeIn';
  el.style.background = colors[type] || colors.success;
  el.innerHTML = `<i class="fa-solid ${type==='success'?'fa-circle-check':'fa-circle-info'}"></i> ${message}`;
  document.body.appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .4s'; el.style.opacity='0'; setTimeout(()=>el.remove(),400); }, 2600);
}
