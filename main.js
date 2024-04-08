
function responsive(){
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    const bg_left = this.document.getElementsByClassName('bg-left')
    const bg_right = this.document.getElementsByClassName('bg-right')

    if (screenWidth<=1000){
        console.log(screenWidth, screenHeight)
        bg_left[0].classList.remove('col-3');
        bg_right[0].classList.remove('col-7');
        bg_left[0].classList.add('padding-30')
        console.log(bg_left)
    }
    window.addEventListener('resize', function() {
        screenWidth = screen.width;
        screenHeight = screen.height;
        

        if (screenWidth<=1000){
            console.log(screenWidth, screenHeight)
            bg_left[0].classList.remove('col-3');
            bg_right[0].classList.remove('col-7');
            bg_left[0].classList.add('padding-30')
            console.log(bg_left)
        }
        else{
            bg_left[0].classList.add('col-3');
            bg_right[0].classList.add('col-7');
            bg_left[0].classList.remove('padding-30')
        }

        

        
    });

}



