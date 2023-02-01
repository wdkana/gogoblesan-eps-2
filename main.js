let opsi = document.getElementById('selection').selectedIndex;
let input = document.getElementById('inputValue').value;
let update = () => {
    alert(opsi);
    let cekKosong = (isi) => {
        if (isi == '') {
            alert('Inputan gak boleh kosong')
        }
    }
    switch (opsi) {
        case 0:
            // alert(opsi);
            break;
        case 'Warna Text':
            alert('txt' + input);
            break;
        case 'Ukuran Text':
            alert('uk' + input);
            break;
        case 'Jenis Font':
            alert('font' + input);
            break;
        case 'Lebar Konten':
            alert('dd' + input);
            break;
        case 'Tinggi Konten':
            alert('tt' + input);
            break;
        default:
            alert('Gak bisa Euy!');
            break;
    }
}