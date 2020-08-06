function goToContactMe() {
    var contact = document.getElementById("contactMe");
    contact.scrollIntoView();
}

function scroll(elementClass, containerId) {
    let href = document.getElementsByClassName(elementClass);
    for (let i = 0; i < href.length; i++) {
        href[i].addEventListener('click', ev => {
            ev.preventDefault();
            let container = document.getElementById(containerId);
            let rect = container.getBoundingClientRect();
            document.documentElement.scrollTo(rect.left, rect.top);
        })
    }
}

scroll("aboutClass", "aboutContainer");
scroll("studiesClass", "studiesContainer");
scroll("skillsClass", "skillsContainer");
scroll("portofolioClass", "portofolioContainer");
scroll("hobbiesClass", "hobbiesContainer");
scroll("contactClass", "contactMe");
scroll("arrowImg", "home")


function downloadMyCV(downloadBtn) {
    let button = document.getElementById(downloadBtn);
    button.addEventListener('click', ev => {
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