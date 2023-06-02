let showMap = () => {
    let elem = document.querySelector('div');
    let chip = map[y][x];
    elem.innerHTML = '<img src="adv_img/' + images[chip] + '.png"><img src="adv_img/man.png">';
};

showMap();

document.addEventListener('keyup',(event) => {
    let keyname = event.key;
    console.log(keyname);
    let fname = images[map[y][x]];
    if(keyname == 'ArrowLeft'){
        if(fname.indexOf('left') > -1){
        x -= 1;
        }
    } else if(keyname == 'ArrowRight'){
        if(fname.indexOf('right') > -1){
            x += 1;
        }
    } else if(keyname == 'ArrowUp'){
        if(fname.indexOf('up') > -1){
            y -= 1;
        }
    } else if(keyname == 'ArrowDown'){
        if(fname.indexOf('down') > -1){
            y += 1;
        }
    }
    showMap();
} );