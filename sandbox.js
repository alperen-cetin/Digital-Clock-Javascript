const clock = document.querySelector('.clock');

const clockUpdate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const html = `
        <span>${hours}</span> :
        <span>${minutes}</span> :
        <span>${seconds}</span>
    `;

    clock.innerHTML = html;
};

setInterval(clockUpdate, 1000);