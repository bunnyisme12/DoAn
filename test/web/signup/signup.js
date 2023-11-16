var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');

show.addEventListener('click', active);
function active() {
    if (input.type === "password") 
    {
        input.type = "text";
        show.style.color = "#1da1f2";
    }
    else 
    {
        input.type = "password";
        show.style.color = "#111";
    }
}