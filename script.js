let img=document.querySelector('.modal_img')


let btn=document.querySelectorAll('.btn')
btn.forEach(el=>{
el.addEventListener('click',function(){
 modalAdd(this)
})
})


function modalAdd(param){
  let atribut=param.getAttribute('data-value')

 let closeNumberspan=param.querySelector('.btn_number')
 let closeDescspan=param.querySelector('.btn_desc')
let closeNumberContent=closeNumberspan.innerHTML
let closeDescConten=closeDescspan.innerHTML

let img=document.querySelector('.modal_img')

  let modal=document.querySelector('.modal')
  let closeBtn=modal.querySelector('.btn_closeModal')
  let closeNumber=modal.querySelector('.btn_modal-number')
  closeNumber.innerHTML=closeNumberContent
  let closeDesc=modal.querySelector('.btn_modal-desc')
  closeDesc.innerHTML=closeDescConten

  modal.classList.add('active')
 img.classList.add('active')
  if(atribut=='apartaments'){
    img.src='img/3.png'
  }else if(atribut=='mansions'){
    img.src='img/1.png'
  }else if(atribut=='park'){
    img.src='img/2.png'
  }else if(atribut=='road'){
    img.src='img/4.png'
  }

closeBtn.addEventListener('click',()=>{
modal.classList.remove('active')
img.classList.remove('active')

})
}


const btnDownload=document.querySelector('.btn_download')
btnDownload.addEventListener('click',function () {
  let form=document.querySelector('.form')
  form.classList.add('active')
  form.classList.add('active2')
  let closeBtn=document.querySelector('.formCloseBtn')
  closeBtn.addEventListener('click',function () {
    form.classList.remove('active')
    
  })
})
