const testimonialsContainer =document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.userImage')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name:'Iestyn Jones',
        position: 'Athlete',
        photo:'',
        text: "Efficient, intuitive, and organized. My go-to for staying productive!",
    },
    {
        name:'Emily Edwards',
        position: 'HR',
        photo:'',
        text: "User-friendly interface, excellent features. Simplifies my tasks effortlessly.",
    },
    {
        name:'Ioan Jones',
        position: 'Production Manager',
        text: "Seamless experience, responsive design. A must-have for task management efficiency.",
    },
]

let idx = 1

function updateTestimonial() {
    console.log(testimonials[1])

}

updateTestimonial()