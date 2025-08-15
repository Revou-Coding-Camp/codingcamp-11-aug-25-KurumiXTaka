// Minta nama saat halaman dibuka
let userName = prompt("Masukkan nama Anda:");

// Kalau user klik Cancel atau kosong, default jadi "Guest"
if (!userName) {
  userName = "Guest";
}

// Masukkan ke teks welcome
document.getElementById("welcome-text").textContent = `Welcome ${userName} to Website King Firza`;

document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Biar halaman nggak reload

  // Ambil value dari form
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "-";
  const comment = document.getElementById("comment").value;

  // Tampilkan di Your Identity
  document.getElementById("outputName").textContent = `Name: ${name}`;
  document.getElementById("outputDob").textContent = `Tanggal Lahir: ${dob}`;
  document.getElementById("outputGender").textContent = `Jenis Kelamin: ${gender}`;
  document.getElementById("outputComment").textContent = `Komentar: ${comment}`;
});

