const destinations={
 'google-play':'https://play.google.com/store/apps/details?id=com.goldendragon.gdtjourney&pcampaignid=web_share',
 'app-store':'https://apps.apple.com/us/app/gdt-journey/id6502626351',
 facebook:'https://www.facebook.com/GoldenDragon/',
 line:'https://line.me/ti/p/%40xtd3844m'
};
for(const [id,url] of Object.entries(destinations)){const element=document.getElementById(id);element.href=url;element.target='_blank';element.rel='noopener'}
