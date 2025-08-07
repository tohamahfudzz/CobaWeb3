const flower=document.getElementsByClassName('flower');
const image=document.getElementById('satu');
const animasi=document.getElementById('animasi');
flower[0].style.backgroundImage="url('bijiFlower.png')";
flower[0].addEventListener('click',animate);
function animate(){
flower[0].classList.add('animate');
flower[0].style.backgroundImage="url('flower4.png')";
// image.classList.add('hidden');	
// 	animasi.classList.add('animate');
 
	 //image.style.display='none';


}