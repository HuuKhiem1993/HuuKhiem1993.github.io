if (screenWidth<=1000){
    console.log(screenWidth, screenHeight)
    bg_left[0].classList.remove('col-3');
    bg_right[0].classList.remove('col-7');
    console.log(bg_left)
}
window.addEventListener('resize', function() {
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const bg_left = this.document.getElementsByClassName('bg-left')
    const bg_right = this.document.getElementsByClassName('bg-right')

    if (screenWidth<=1000){
        console.log(screenWidth, screenHeight)
        bg_left[0].classList.remove('col-3');
        bg_right[0].classList.remove('col-7');
        console.log(bg_left)
    }
    else{
        bg_left[0].classList.add('col-3');
        bg_right[0].classList.add('col-7');
    }

    

    
});
