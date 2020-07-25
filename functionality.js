function goToContactMe() {
    var contact = document.getElementById("contactMe");
    contact.scrollIntoView();
}

function scroll(containerId, a, b) {
    let container = document.getElementById(containerId);
    container.addEventListener('click', ev => {
        ev.preventDefault();
        document.documentElement.scrollTo(a, b);
    })
}
scroll("about", 300, 620);
scroll("skills", 900, 1200);
scroll("studies", 1400, 1950);
scroll("portofolio", 2000, 2450);
scroll("contact", 2500, 2900);
scroll("upAbout", 0, 0);
scroll("upSkills", 0, 0);
scroll("upStudies", 0, 0);
scroll("upPortofolio", 0, 0);
scroll("upContact", 0, 0);



function downloadMyCV(downloadBtn) {
    let button = document.getElementById(downloadBtn);
    button.addEventListener('click', ev => {
        console.log('print');
        ev.preventDefault();
        window.print();
    })
}

downloadMyCV("downloadBtn");
downloadMyCV("aboutDBtn");