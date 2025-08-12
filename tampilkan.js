const contractAddress = "0xd35a95A23CC3Ac2fc123f884a3C22CFf91b4d460";

async function loadABI() {
    const response = await fetch("ABI.json");
    return await response.json();
}

async function loadBlockchainData() {
    if (typeof window.ethereum === "undefined") {
        document.getElementById('hasil').innerText = "MetaMask tidak ditemukan";
        return;
    }

    try {
        // Minta akses akun
        await ethereum.request({ method: "eth_requestAccounts" });

        // Buat provider dan signer
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const abi = await loadABI();
        const contract = new ethers.Contract(contractAddress, abi, provider);

        // Ambil data
        const text = await contract.storedText();
        document.getElementById('hasil').innerText = text || "belum ada data";

    } catch (error) {
        console.error("Error saat membaca data:", error);
        document.getElementById('hasil').innerText = "Gagal mengambil data: " + error.message;
    }
}

// Jalankan saat tombol diklik
document.getElementById('loadBtn').addEventListener("click", loadBlockchainData);