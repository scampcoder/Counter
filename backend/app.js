//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        //testing event selection
        //console.log(e.currentTarget.classList);
        //grab event listener selection
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('reset')){
            count = 0;
        } else if(styles.contains('increase')){
            count++;
        }
        value.textContent = count;
    })
});
