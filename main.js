let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click',()=>{
    let background = color.style.background;
    document.querySelectorAll('body').style.background = background;
}));