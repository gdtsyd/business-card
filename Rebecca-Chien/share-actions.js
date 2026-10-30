const cardPublicURL='https://gdtsyd.github.io/business-card/Rebecca-Chien/index.html';
function offerShareImage(){const d=document.getElementById('share-image-dialog');document.getElementById('share-feedback').textContent='';if(!d.open)d.showModal()}
async function shareCard(){
 const status=document.getElementById('notice');
 if(location.protocol==='file:'){document.getElementById('share-feedback').textContent='請點「儲存圖片」後分享 / Save the image below to share.';return}
 try{
  const response=await fetch('assets/rebecca-share-card-v2.png');if(!response.ok)throw Error('Image unavailable');
  const file=new File([await response.blob()],'Rebecca-GDT-business-card-v2.png',{type:'image/png'});
  if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'Rebecca Chien · GDT Journey'});return}
  document.getElementById('share-feedback').textContent='此瀏覽器請儲存圖片後分享 / Save the image below to share.';
 }catch(e){if(e.name!=='AbortError')document.getElementById('share-feedback').textContent='請儲存圖片後分享 / Save the image below to share.'}
}
async function copyCardLink(){
 const status=document.getElementById('share-feedback');
 try{await navigator.clipboard.writeText(cardPublicURL);status.textContent='名片連結已複製 / Card link copied'}
 catch{const input=document.getElementById('card-link-input');input.value=cardPublicURL;document.getElementById('copy-link-dialog').showModal();input.focus();input.select()}
}
