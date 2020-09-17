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

// form validation start 

function validateName(inputElement, errorMessage) {
    if (inputElement.value.length < 3 || inputElement.value === "") {
        if (!document.querySelector('[rel="' + inputElement.id + '"]')) {
            inputElement.style.border = "3px solid red";
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
let gStart = 0;
let gEnd = 0;

function plusSlides(n) {
    slideIndex += n;
    showSlides("mySlides");
}

function currentSlide(n) {
    slideIndex = gStart + n - 1;
    showSlides("mySlides");
}

function showSlides(containerClass) {

    let i;
    let slides = document.getElementsByClassName(containerClass);
    let dots = document.getElementsByClassName("dot");

    if (slideIndex > gEnd) { slideIndex = gStart }
    if (slideIndex < gStart) { slideIndex = gEnd }

    console.log("displaying after adjustments", slideIndex);

    for (i = gStart - 1; i < gEnd; i++) {
        console.log(i);
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[(slideIndex - 1) % 5].className += " active";

    const headline = document.getElementById("noGallery");
    headline.style.display = "none";
}

function showGalleryRange(start, end) {
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    gStart = start;
    gEnd = end;
    console.log(gStart, gEnd);

    // Make sure the slides container is visible
    const gallery = document.getElementById("carouselContainerId");
    gallery.style.display = "initial";
    const dot = document.getElementById("dots");
    dot.style.display = "initial";

    slideIndex = gStart;
    showSlides("mySlides");
}

function closeTheGallery() {
    const gallery = document.getElementById("carouselContainerId");
    gallery.style.display = "none";
    const dots = document.getElementById("dots");
    dots.style.display = "none";
}

function noGallery() {

    document.getElementById("cooking").addEventListener('click', ev => {
        ev.preventDefault();

        const gallery = document.getElementById("noGallery");
        gallery.style.display = "initial";

    })

    document.getElementById("music").addEventListener('click', ev => {
        ev.preventDefault();

        const gallery = document.getElementById("noGallery");
        gallery.style.display = "initial";

    })
}
// end carousel



emailjs.init("user_LWn4xxk8SKobQTJ6NlWRs"); //please encrypted user id for malicious attacks

//set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]


document.getElementById('submitBtn').addEventListener('click', () => {
    var templateParams = {
        to_name: 'mihaela.iliescu1708@yahoo.com',
        from_name: 'mihaela.wawa@gmail.com',
        message_html: document.getElementById('message').value,
        senderEmail: document.getElementById('email').value,
        name: document.getElementById('fname').value + " " + document.getElementById('lname').value,
        number: document.getElementById('phoneN').value
    };

    emailjs.send('gmail', 'mycv', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });


    alert("Hello! I received your message and I'll contact you soon. Thank you!");
    document.getElementById("myForm").reset()
})