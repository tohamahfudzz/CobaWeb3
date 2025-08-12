const contractAddress="0xd35a95A23CC3Ac2fc123f884a3C22CFf91b4d460";
async function loadABI(){
	const response=await fetch("ABI.json");
	return await response.json();
}

async function loadBlockchainData(){
	if(typeof window.ethereum !== "undefined"){
		try{
			await ethereum.request({method:"eth_requestAccounts"});
			const provider=new ethers.providers.Web3Provider(window.ethereum);
			const abi=await loadABI();
			const contract=new ethers.Contract(contractAddress,abi,provider);
			const text=await contract.storedText();
			document.getElementById('hasil').innerText=text || "belum ada data";


		}catch(error){
			console.error(error);
			document.getElementById('hasil').innerText="gagal mengambil data";
		}

	}
	else{
		document.getElementById('hasil').innerText="metamask tidak ditemukan";
	}
}

//window.addEventListener("load",loadBlockchainData);
document.getElementById('loadBtn').addEventListener("click", loadBlockchainData);

