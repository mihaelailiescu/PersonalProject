function goToContactMe() {
    var contact = document.getElementById("contactMe");
    contact.scrollIntoView();
}


function scroll(hrefId, containerId) {
    let href = document.getElementById(hrefId);
    href.addEventListener('click', ev => {
        ev.preventDefault();

        let container = document.getElementById(containerId);
        let rect = container.getBoundingClientRect();
        document.documentElement.scrollTo(rect.left, rect.top);
    })
}


scroll("about", "aboutContainer");
scroll("studies", "studiesContainer");
scroll("skills", "skillsContainer");
scroll("portofolio", "portofolioContainer");
scroll("hobbies", "hobbiesContainer");
scroll("contact", "contactMe");
scroll("upAbout", "containerHeader");
scroll("upSkills", "containerHeader");
scroll("upStudies", "containerHeader");
scroll("upPortofolio", "containerHeader");
scroll("upContact", "containerHeader");
scroll("upHobbies", "containerHeader");


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

var scroll = new SmoothScroll('a[href*="#"]');