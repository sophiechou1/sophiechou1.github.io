/* script.js - Sophie Chou */

// function to open email and email me
window.onload = function() {
    // don't show if not on home page
    if (window.location.href.includes('home.html')) {
        // create new button element
        var button = document.createElement('a');
        // email link
        button.href = 'mailto:schou2@nd.edu';
        // bootstrap button
        button.className = 'btn custom-button mx-2';
        button.innerText = 'Email Me!';

        // place button on home page
        var container = document.querySelector('.container.text-center.my-4');

        // append button to container
        container.appendChild(button);
    }
}

// open resume in new tab if button is clicked
document.getElementById("viewResumeBtn").addEventListener("click", function() { 
    window.open("/assets/Sophie Chou - Resume.pdf", "_blank");
});
