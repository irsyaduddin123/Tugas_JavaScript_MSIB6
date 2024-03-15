// lengkapi kode berikut dan tampilkan hasilnya ada pada html
// 1. isian nama
// 2. isian pekerjaan
// 3. isian hobby

function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;
    
    let hasilElement = document.getElementById('hasil');
    hasilElement.innerHTML = `
    <p>Nama: ${nama}</p>
    <p>Pekerjaan: ${pekerjaan}</p>
    <p>Hobby: ${hobby}</p>
    `;}
    
    // Melampirkan event listener untuk formulir
    document.getElementById('frm').addEventListener('submit', function(e) {
        // Menghentikan perilaku bawaan formulir untuk mencegah refresh halaman
        e.preventDefault();
        
        // Memanggil fungsi dataPerson untuk menampilkan hasil
        dataPerson();
    });


