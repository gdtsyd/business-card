const cardPublicURL='https://gdtsyd.github.io/business-card/justine/';
function offerShareImage(){document.getElementById('share-image-dialog').showModal()}
async function shareCard(){
 const status=document.getElementById('notice');
 if(location.protocol==='file:'){offerShareImage();return}
 try{
  const response=await fetch('assets/justine-share-card.png');if(!response.ok)throw Error('Image unavailable');
  const file=new File([await response.blob()],'Justine-GDT-business-card.png',{type:'image/png'});
  if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'Justine Chien · GDT Journey'});return}
  offerShareImage();
 }catch(e){if(e.name!=='AbortError')offerShareImage()}
}
async function copyCardLink(){
 const status=document.getElementById('notice');
 try{await navigator.clipboard.writeText(cardPublicURL);status.textContent='名片連結已複製 / Card link copied'}
 catch{const input=document.getElementById('card-link-input');input.value=cardPublicURL;document.getElementById('copy-link-dialog').showModal();input.focus();input.select()}
}
