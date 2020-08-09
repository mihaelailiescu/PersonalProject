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

// form validation start 
function validateName(inputElement, errorMessage) {
    if (inputElement.value.length < 3 || inputElement.value === "") {
        if (!document.querySelector('[rel="' + inputElement.id + '"]')) {
            inputElement.style.border = "3px solid red"
            buildErrorMessage(inputElement, errorMessage);
        }
    } else {
        if (document.querySelector('[rel="' + inputElement.id + '"]')) {
            document.querySelector('[rel="' + inputElement.id + '"]').remove();
            inputElement.classList.remove("inputError");
        }
    }
}

function validateEmail(inputElement, errorMessage) {
    if (inputElement.value.length < 4 || inputElement.value === "") {
        if (!document.querySelector('[rel="' + inputElement.id + '"]')) {
            inputElement.style.border = "3px solid red"
            buildErrorMessage(inputElement, errorMessage);
        }
    } else {
        if (document.querySelector('[rel="' + inputElement.id + '"]')) {
            document.querySelector('[rel="' + inputElement.id + '"]').remove();
            inputElement.classList.remove("inputError");
        }
    }
}

// const validate = (email) => {
//     const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

//     return expression.test(String(email).toLowerCase())
// }

function validateMessage(inputElement, errorMessage) {
    if (inputElement.value.length < 15 || inputElement.value === "") {
        if (!document.querySelector('[rel="' + inputElement.id + '"]')) {
            inputElement.style.border = "3px solid red"
            buildErrorMessage(inputElement, errorMessage);
        }
    } else {
        if (document.querySelector('[rel="' + inputElement.id + '"]')) {
            document.querySelector('[rel="' + inputElement.id + '"]').remove();
            inputElement.classList.remove("inputError");
        }
    }
}

function buildErrorMessage(inputEl, errorMsg) {
    inputEl.classList.add("inputError");
    const errorMsgElement = document.createElement("span");
    errorMsgElement.setAttribute("rel", inputEl.id);
    errorMsgElement.classList.add("errorMsg");
    errorMsgElement.innerHTML = errorMsg;
    inputEl.after(errorMsgElement);
}

document.querySelector(".submitBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    validateName(firstName, "The first name is required!");
    validateName(lastName, "The last name is required!");
    validateEmail(email, "The email is required!");
    validateMessage(message, "The message is required!");

})

// form validation end

// start carousel 

let slideIndex = 1;
showSlides(slideIndex, "mySlides");
showSlides(slideIndex, "mySlidesFood");
showSlides(slideIndex, "mySlidesMovies");

function plusSlides(n) {
    showSlides(slideIndex += n, "mySlides");
    showSlides(slideIndex, "mySlidesFood");
    showSlides(slideIndex, "mySlidesMovies");
}

function currentSlide(n) {
    showSlides(slideIndex = n, "mySlides");
    showSlides(slideIndex, "mySlidesFood");
    showSlides(slideIndex, "mySlidesMovies");
}

function showSlides(n, containerClass) {
    let i;
    let slides = document.getElementsByClassName(containerClass);
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showGallery() {
    const gallery = document.getElementById("carouselContainerId");
    gallery.style.display = "initial";
    const dots = document.getElementById("dots");
    dots.style.display = "initial";
}

function showFoodGallery() {
    const galleryFood = document.getElementById("carouselFoodId");
    galleryFood.style.display = "initial";
    const dots = document.getElementById("dots");
    dots.style.display = "initial";
}

function showMoviesGallery() {
    const galleryMovies = document.getElementById("carouselMovieId");
    galleryMovies.style.display = "initial";
    const dots = document.getElementById("dots");
    dots.style.display = "initial";
}

function showMusicGallery() {
    const gallery = document.getElementById("musicContainer");
    gallery.style.display = "initial";
    const headline = document.getElementById("music");
    headline.style.display = "initial";
}

function closeTheGallery() {
    const gallery = document.getElementById("carouselContainerId");
    gallery.style.display = "none";
    const dots = document.getElementById("dots");
    dots.style.display = "none";
}

function closeFoodGallery() {
    const gallery = document.getElementById("carouselFoodId");
    gallery.style.display = "none";
    const dots = document.getElementById("dots");
    dots.style.display = "none";
}

function closeMoviesGallery() {
    const gallery = document.getElementById("carouselMovieId");
    gallery.style.display = "none";
    const dots = document.getElementById("dots");
    dots.style.display = "none";
}

function closeMusicGallery() {
    const gallery = document.getElementById("musicContainer");
    gallery.style.display = "none";
    // const headline = document.getElementById("music");
    // headline.style.display = "none";
}


// document.querySelector("exitMusic").addEventListener('click', function(event) {
//         event.preventDefault();
//         const gallery = document.getElementById("musicContainer");
//         gallery.style.display = "none";
//         const headline = document.getElementById("music");
//         headline.style.display = "none";
//     })
// end carousel