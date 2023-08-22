const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name:'Iestyn Jones',
        position: 'Athlete',
        photo:'assets/images/iest-home.jpg',
        text: "Efficient, intuitive, and organized. My go-to for staying productive!",
    },
    {
        name:'Emily Edwards',
        position: 'HR',
        photo:'assets/images/emily.jpg',
        text: "User-friendly interface, excellent features. Simplifies my tasks effortlessly.",
    },
    {
        name:'Ioan Jones',
        position: 'Production Manager',
        photo: 'assets/images/ioan.jpg',
        text: "Seamless experience, responsive design. A must-have for task management efficiency.",
    },
];

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1){
        idx = 0;

    }

}

setInterval(updateTestimonial, 10000);