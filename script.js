const flower=document.getElementsByClassName('flower');
const image=document.getElementById('satu');
const animasi=document.getElementById('animasi');
const connectBtn=document.getElementById('connectBtn');
const status=document.getElementById('status');
flower[0].style.backgroundImage="url('bijiFlower.png')";
//flower[0].addEventListener('click',animate);

connectBtn.onclick=async()=>{
	if(typeof window.ethereum!=='undefined'){
		 window.web3 = new Web3(window.ethereum);
            ethereum.request({ method: 'eth_requestAccounts' });


		try{
			const accounts=await window.ethereum.request({method:'eth_requestAccounts'});
			status.innerText='wallet terkoneksi:'+accounts[0];
			console.log('akun terkoneksi',accounts[0]);
		}catch(error){
			status.innerText='user menolak koneksi';
			console.log(error);
		}
	}
	else{
		status.innerText='metamask tidak terdeteksi.'+'buka halaman ini lewat metamask mobile atau instal metamask dideskop';
	}
	const contractAddress = "0xd35a95A23CC3Ac2fc123f884a3C22CFf91b4d460";
        let contractABI;

         fetch('ABI.json')
            .then(response => response.json())
            .then(abi => {
                contractABI = abi;
                window.contract = new web3.eth.Contract(contractABI, contractAddress);
            });
};

function animate(){
flower[0].classList.add('animate');
flower[0].style.backgroundImage="url('flower4.png')";
// image.classList.add('hidden');	
// 	animasi.classList.add('animate');
 
	 //image.style.display='none';


}

document.getElementsByName("kirim")[0].addEventListener("click", async function() {
            const teks = document.forms["teks"]["tulisan"].value;
            const accounts = await web3.eth.getAccounts();

            if (!teks) {
                alert("Teks tidak boleh kosong!");
                return;
            }

            try {
                await window.contract.methods.setText(teks).send({ from: accounts[0] });
                alert("Teks berhasil disimpan di blockchain!");
                animate();
            } catch (error) {
                console.error(error);
                alert("Gagal mengirim teks.");
            }
        });


document.getElementsByName("lihat")[0].addEventListener("click", async function() {
           
           window.location.href="lihat.html";
        });