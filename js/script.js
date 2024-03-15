// lengkapi kode berikut dan tampilkan hasilnya ada pada html
// 1. isian nama
// 2. isian pekerjaan
// 3. isian hobby

document.getElementById('frm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // cek inputan kosong apa gak
    let nama = this.nama.value.trim();
    let pekerjaan = this.pekerjaan.value.trim();
    let hobby = this.hobby.value.trim();

    if (nama === '' || pekerjaan === '' || hobby === '') {
        alert('Silakan isi semua formulir untuk mendapatkan hasil yang memuaskan wakaka.');
        return;
    }
    
    dataPerson();
    this.reset(); // membersikan form inputan
});

function dataPerson() {
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;

    let hasilElement = document.getElementById('hasil');
    hasilElement.innerHTML = `
    <p>Nama: ${nama}</p>
    <p>Pekerjaan: ${pekerjaan}</p>
    <p>Hobby: ${hobby}</p>
    `;
}



