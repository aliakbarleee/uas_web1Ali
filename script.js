document.getElementById("formTransaksi").addEventListener("submit", function(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const judul = document.getElementById("judul").value;

    const tableBody = document.querySelector("table tbody");
    const row = <tr><td>${nama}</td><td>${judul}</td><td>${new Date().toLocaleDateString()}</td></tr>;
    tableBody.innerHTML += row;

    alert("Transaksi berhasil disimpan!");
    document.getElementById("formTransaksi").reset();
});