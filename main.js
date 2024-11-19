const sentences = [
    "Tetap Semangat jalani hidup meskipun iitu melelahkan 😁",
    "Jangan takut gagal. Gagal adalah bagian dari perjalanan menuju kesuksesan 😉",
    "Setiap hari adalah halaman baru dalam cerita hidup Anda. Tulis dengan baik!😊",
    "Kamu adalah bintang yang bersinar! 🤩",
    "Hidup ini singkat, jadi buatlah setiap momen berarti🤗"
];

function showAlert() {
    const audio = document.getElementById('music');
        audio.play(); // Memutar audio
    const inputField = document.getElementById('nama');
    const inputValue = inputField.value.trim();
        if (inputValue === '') {
        // Jika input kosong, tidak menampilkan alert
            return;
        }
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];
    
    const alertBox = document.getElementById('custom-alert');
    alertBox.querySelector('p').innerText = randomSentence; // Mengupdate isi alert dengan kalimat acak
    alertBox.classList.remove('hidden');
    alertBox.classList.add('show');

    
    
}

function closeAlert() {
    const audio = document.getElementById('music');
        audio.pause();
        audio.currentTime = 0;
    document.getElementById('custom-alert').classList.add('hidden');
}
