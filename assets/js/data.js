// ============ HYPERCARE — DUMMY DATA ============

const HC_NURSES = [
  { name:"Ns. Siti Aisyah, S.Kep", spec:"Spesialis Hipertensi", exp:"5 Tahun Pengalaman", online:true, photo:"https://i.pravatar.cc/150?img=47" },
  { name:"Ns. Rina Amelia, S.Kep", spec:"Spesialis Hipertensi", exp:"4 Tahun Pengalaman", online:true, photo:"https://i.pravatar.cc/150?img=44" },
  { name:"Ns. Andi Pratama, S.Kep", spec:"Spesialis Hipertensi", exp:"3 Tahun Pengalaman", online:false, photo:"https://i.pravatar.cc/150?img=12" },
  { name:"Ns. Dewi Lestari, S.Kep", spec:"Spesialis Kardiovaskular", exp:"6 Tahun Pengalaman", online:true, photo:"https://i.pravatar.cc/150?img=32" },
];

const HC_RIWAYAT = [
  { tgl:"01/06/2025", sistol:120, diastol:80, status:"Normal", badge:"badge-normal" },
  { tgl:"05/06/2025", sistol:130, diastol:85, status:"Pra Hipertensi", badge:"badge-pra" },
  { tgl:"10/06/2025", sistol:140, diastol:90, status:"Hipertensi Tingkat 1", badge:"badge-tk1" },
  { tgl:"15/06/2025", sistol:160, diastol:100, status:"Hipertensi Tingkat 2", badge:"badge-tk2" },
];

const HC_PASIEN_LIST = [
  { nama:"Budi Santoso", umur:54, gender:"Laki-laki", hp:"0812-3456-7001", status:"Normal", badge:"badge-normal" },
  { nama:"Siti Rahma", umur:61, gender:"Perempuan", hp:"0812-3456-7002", status:"Hipertensi Tingkat 2", badge:"badge-tk2" },
  { nama:"Agus Salim", umur:47, gender:"Laki-laki", hp:"0812-3456-7003", status:"Pra Hipertensi", badge:"badge-pra" },
  { nama:"Maria Goreti", umur:58, gender:"Perempuan", hp:"0812-3456-7004", status:"Hipertensi Tingkat 1", badge:"badge-tk1" },
  { nama:"Hendra Wijaya", umur:50, gender:"Laki-laki", hp:"0812-3456-7005", status:"Normal", badge:"badge-normal" },
  { nama:"Lestari Putri", umur:63, gender:"Perempuan", hp:"0812-3456-7006", status:"Hipertensi Tingkat 2", badge:"badge-tk2" },
  { nama:"Joko Susanto", umur:45, gender:"Laki-laki", hp:"0812-3456-7007", status:"Normal", badge:"badge-normal" },
  { nama:"Ani Kartika", umur:55, gender:"Perempuan", hp:"0812-3456-7008", status:"Pra Hipertensi", badge:"badge-pra" },
  { nama:"Rudi Hartono", umur:60, gender:"Laki-laki", hp:"0812-3456-7009", status:"Hipertensi Tingkat 1", badge:"badge-tk1" },
  { nama:"Yuni Astuti", umur:49, gender:"Perempuan", hp:"0812-3456-7010", status:"Normal", badge:"badge-normal" },
];

const HC_FAQ = [
  { q:"Apa itu hipertensi?", a:"Hipertensi atau tekanan darah tinggi adalah kondisi ketika tekanan darah pada dinding arteri terus berada di atas batas normal, yaitu di atas 130/80 mmHg." },
  { q:"Berapa tekanan darah normal?", a:"Tekanan darah normal pada umumnya berada pada kisaran 90/60 mmHg hingga 120/80 mmHg." },
  { q:"Apakah konsultasi dapat dilakukan secara online?", a:"Ya, HyperCare menyediakan layanan konsultasi online dengan perawat profesional maupun AI Health Assistant kapan saja Anda butuhkan." },
  { q:"Apakah data saya aman?", a:"Seluruh data kesehatan Anda dijaga kerahasiaannya dan hanya digunakan untuk keperluan monitoring serta konsultasi kesehatan." },
  { q:"Kapan saya harus berkonsultasi dengan tenaga kesehatan?", a:"Segera konsultasikan ke tenaga kesehatan apabila tekanan darah Anda secara konsisten di atas 140/90 mmHg atau muncul gejala seperti pusing berat, nyeri dada, dan pandangan kabur." },
];

const HC_AI_QUICK = [
  "Apa itu hipertensi?",
  "Berapa tekanan darah normal?",
  "Makanan yang harus dihindari?",
  "Cara menurunkan tekanan darah?",
  "Kapan harus ke dokter?"
];

const HC_AI_ANSWERS = {
  "apa itu hipertensi?": "Hipertensi adalah kondisi ketika tekanan darah berada secara konsisten di atas 130/80 mmHg. Kondisi ini sering disebut 'silent killer' karena jarang menimbulkan gejala di awal. ⚠️ Ini bukan diagnosis medis, konsultasikan ke tenaga kesehatan untuk kepastian.",
  "berapa tekanan darah normal?": "Tekanan darah normal umumnya berkisar 90/60 mmHg sampai 120/80 mmHg. Angka 120-129/<80 mmHg disebut tekanan darah tinggi normal (elevated).",
  "makanan yang harus dihindari?": "Sebaiknya batasi garam, makanan olahan/kalengan, gorengan, jeroan, dan minuman bersoda. Perbanyak sayur, buah, dan makanan rendah natrium ya 🍎🥦",
  "cara menurunkan tekanan darah?": "Beberapa cara: kurangi konsumsi garam, rutin olahraga ringan 30 menit/hari, kelola stres, cukup tidur, hindari rokok & alkohol, serta rutin memantau tekanan darah.",
  "kapan harus ke dokter?": "Segera ke fasilitas kesehatan terdekat jika tekanan darah Anda di atas 140/90 mmHg disertai pusing berat, nyeri dada, sesak napas, atau pandangan kabur. 🚨"
};

function hcAIReply(text){
  const key = text.trim().toLowerCase();
  if(HC_AI_ANSWERS[key]) return HC_AI_ANSWERS[key];
  if(key.includes('hipertensi') || key.includes('tekanan darah') || key.includes('darah')){
    return "Hipertensi perlu dipantau secara rutin. Jaga pola makan rendah garam, rutin berolahraga, dan periksa tekanan darah Anda secara berkala melalui menu Catat Tekanan Darah. 💛";
  }
  return "Terima kasih atas pertanyaannya 🙏 Saat ini saya berfokus membantu seputar hipertensi, tekanan darah, pola makan, dan gaya hidup sehat. Coba tanyakan hal terkait itu, ya!";
}
