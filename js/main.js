(() => {
    let windows = document.querySelector('body');
    windows.addEventListener('click', event => {
        console.log(event.target.innerText);
    })
})();