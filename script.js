const menuToggle=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.mobile-nav');
menuToggle?.addEventListener('click',()=>mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const toast=document.querySelector('.toast');
function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('[data-placeholder]').forEach(link=>link.addEventListener('click',e=>{if(link.getAttribute('href')==='#'){e.preventDefault();showToast(`${link.dataset.placeholder} akan kita hubungkan pada tahap berikutnya.`)}}));
