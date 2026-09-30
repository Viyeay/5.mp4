// ==========================================
// DAFTAR VIDEO
// ==========================================

const daftarVideo = [
    "https://cdn2.videy.co/ZwdCN9621.mp4",
    "https://cdn2.videy.co/VNDBFNBT1.mp4",
    "https://cdn2.videy.co/lZBK9W3A1.mp4",
    "https://cdn2.videy.co/pFDi1M5m1.mp4",
    "https://cdn2.videy.co/BjVsmoPs1.mp4",
    "https://cdn.videy.co/8cWz7SRK1.mp4",
    "https://cdn2.videy.co/AAovM0bj1.mp4",
    "https://cdn2.videy.co/CU550Zof1.mp4",
    "https://cdn2.videy.co/mRZ1Lm0Y1.mp4",
    "https://cdn2.videy.co/rTERwuzM1.mp4",
    "https://cdn2.videy.co/xn4L8uRk1.mp4",
    "https://cdn2.videy.co/s2yazRB51.mp4",
    "https://cdn2.videy.co/KQPf4Otj1.mp4",
    "https://cdn2.videy.co/TD8eGo2X1.mp4"
];


// ==========================================
// PILIH VIDEO ACAK
// ==========================================

const videoAcak =
    daftarVideo[Math.floor(Math.random() * daftarVideo.length)];


// ==========================================
// TAMPILKAN VIDEO
// ==========================================

const wadahVideo = document.getElementById("tempat-video");

if (wadahVideo) {

    wadahVideo.innerHTML = `
        <video
            id="video"
            controls
            playsinline
            preload="metadata"
        >
            <source src="${videoAcak}" type="video/mp4">
            Browser kamu tidak mendukung video.
        </video>
    `;

}
