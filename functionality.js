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
scroll("hobbies", 900, 1200);
scroll("skills", 1210, 1600);
scroll("studies", 1900, 2450);
scroll("portofolio", 2500, 3000);
scroll("contact", 3010, 3400);
scroll("upAbout", 0, 0);
scroll("upSkills", 0, 0);
scroll("upStudies", 0, 0);
scroll("upPortofolio", 0, 0);
scroll("upContact", 0, 0);
scroll("upHobbies", 0, 0);

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

function goToGmail() {
    location.href = "mailto:mihaela.iliescu1708@yahoo.com&body=Hello!";
    window.setTimeout(function() { location.href = "https://mail.google.com/" }, 0);
}