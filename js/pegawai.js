document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', hitungGaji);

    function hitungGaji() {
        const nama = document.getElementById('nama').value;
        const jabatan = document.getElementById('jabatan').value;
        const status = document.getElementById('status').value;

        // Memeriksa apakah inputan tidak kosong
        if (nama.trim() === '' || jabatan === '' || status === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Inputan tidak boleh kosong!',
            });
            return; // Menghentikan eksekusi jika inputan kosong
        }

        let gajiPokok = 0;
        switch (jabatan) {
            case 'Manager':
                gajiPokok = 15000000;
                break;
            case 'Asisten Manager':
                gajiPokok = 10000000;
                break;
            case 'Staff':
                gajiPokok = 5000000;
                break;
            default:
                gajiPokok = 0;
        }

        const tunjanganJabatan = 0.15 * gajiPokok;
        const bpjs = 0.10 * gajiPokok;
        const tunjanganKeluarga = (status === 'Menikah') ? 0.20 * gajiPokok : 0;
        const totalGaji = gajiPokok + tunjanganJabatan - bpjs + tunjanganKeluarga;

        Swal.fire({
            html: `<table id="table" style="border-collapse: collapse; width: 100%; border: 1px solid black;">
        <thead style="background-color: #f2f2f2;">
            <tr>
            <h2>Slip Gaji ${nama}</h2>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 8px; text-align:left;">Nama Pegawai</td>
                <td>:</td>
                <td style="text-align:left">${nama}</td>
            </tr>
            <tr>
                <td style="padding: 8px; text-align:left;">Jabatan</td>
                <td>:</td>
                <td style="text-align:left">${jabatan}</td>
            </tr>
            <tr>
                <td style="padding: 8px; text-align:left;">Status</td>
                <td>:</td>
                <td style="text-align:left">${status}</td>
            </tr>
            <tr>
                <td colspan="2" style="border: 1px solid black; padding: 8px; text-align:left;">Gaji Pokok</td>
                <td colspan="2" style="border: 1px solid black; padding: 8px; text-align:right;">${formatRupiah(gajiPokok)}</td>
            </tr>
            <tr>
                <td colspan="2" style="border: 1px solid black; padding: 8px; text-align:left;">Tunjangan Jabatan</td>
                <td colspan="2" style="border: 1px solid black; padding: 8px; text-align:right;">${formatRupiah(tunjanganJabatan)}</td>
            </tr>
            <tr>
                <td colspan="2" style="border: 1px solid black; padding: 8px; text-align:left;">Iuran BPJS</td>
                <td colspan="2" style="border: 1px solid black; padding: 8px; text-align:right;">${formatRupiah(bpjs)}</td>
            </tr>
            <tr>
            <td colspan="2" style="border: 1px solid black; padding: 8px; text-align:left;">Tunjangan Keluarga</td>
                <td colspan="2" style="border: 1px solid black; padding: 8px; text-align:right;">${formatRupiah(tunjanganKeluarga)}</td>
            </tr>
            
        </tbody>
        <tfoot style="background-color: #f2f2f2;">
            <tr>
                <td colspan="2" style="text-align: center;">Total Gaji</td>
                <td style="border: 1px solid black; padding: 8px; text-align:right;">${formatRupiah(totalGaji)}</td>
            </tr>
        </tfoot>
    </table>`
        });
        // Membersihkan nilai input setelah proses selesai
        document.getElementById('nama').value = '';
        document.getElementById('jabatan').value = '';
        document.getElementById('status').value = '';
    }

    // Fungsi untuk memformat angka menjadi format rupiah
    function formatRupiah(angka) {
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return 'Rp ' + ribuan;
    }

});
