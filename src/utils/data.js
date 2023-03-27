//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin
} from 'react-icons/fi'

// navigation
export const navigation = [
    {
        name: 'home',
        href: 'home'
    },
    {
        name: 'about',
        href: 'about'
    },
    {
        name: 'portfolio',
        href: 'portfolio'
    },
    {
        name: 'services',
        href: 'services'
    },
    {
        name: 'testimonials',
        href: 'testimonials'
    },
    {
        name: 'contact',
        href: 'contact'
    }
]

// social
export const social = [
    {
        icon: <FiYoutube />,
        href: ''
    },
    {
        icon: <FiInstagram />,
        href: ''
    },
    {
        icon: <FiGithub />,
        href: ''
    },
    {
        icon: <FiDribbble />,
        href: ''
    }
]

// companies
export const brands = [
    {
        img: '/img/brands/freelancer.png',
        href: ''
    },
    {
        img: '/img/brands/upwork.png',
        href: ''
    },
    {
        img: '/img/brands/fiverr.png',
        href: ''
    },
    {
        img: '/img/brands/behance.png',
        href: ''
    },
    {
        img: '/img/brands/dribbble.png',
        href: ''
    }
]

// projects
export const projectsData = [
    {
        id: '1',
        image: '/img/projects/p1.webp',
        name: 'project name 1',
        category: 'UI/UX design'
    },
    {
        id: '2',
        image: '/img/projects/p2.webp',
        name: 'project name 2',
        category: 'web development'
    },
    {
        id: '3',
        image: '/img/projects/p3.webp',
        name: 'project name 3',
        category: 'UI/UX design'
    },
    {
        id: '4',
        image: '/img/projects/p4.webp',
        name: 'project name 4',
        category: 'branding'
    },
    {
        id: '5',
        image: '/img/projects/p5.webp',
        name: 'project name 5',
        category: 'web development'
    },
    {
        id: '6',
        image: '/img/projects/p6.webp',
        name: 'project name 6',
        category: 'web development'
    }
]

// projects
export const projectsNav = [
    {
        name: 'all'
    },
    {
        name: 'UI/UX Design'
    },
    {
        name: 'web development'
    },
    {
        name: 'branding'
    }
]

// skill
export const skills = [
    {
        image: '/img/skills/html5.png'
    },
    {
        image: '/img/skills/css3.png'
    },
    {
        image: '/img/skills/js.png'
    },
    {
        image: '/img/skills/reactjs.png'
    },
    {
        image: '/img/skills/nextjs.png'
    },
    {
        image: '/img/skills/nodejs.png'
    },
    {
        image: '/img/skills/git.png'
    },
    {
        image: '/img/skills/figma.png'
    }
]

// services
export const services = [
    {
        icon: <FiLayout />,
        name: 'Web Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.'
    },
    {
        icon: <FiSettings />,
        name: 'Web Development',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.'
    },
    {
        icon: <FiPenTool />,
        name: 'Branding',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.'
    },
    {
        icon: <FiTag />,
        name: 'SEO',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.'
    }
]

// testimonials
export const testimonials = [
    {
        authorImg: '/img/testimonials/testimonial-1.webp',
        authorText:
            'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google'
    },
    {
        authorImg: '/img/testimonials/testimonial-2.webp',
        authorText:
            'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google'
    },
    {
        authorImg: '/img/testimonials/testimonial-3.webp',
        authorText:
            'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
        authorName: 'Olivia Doe',
        authorPosition: 'Head of Design, Google'
    }
]

// contact
export const contact = [
    {
        icon: <FiMail />,
        title: 'Have a question?',
        subtitle: 'I am here to help you.',
        description: 'Email me at hello@youremail.com'
    },
    {
        icon: <FiMapPin />,
        title: 'Current Location',
        subtitle: 'Bucharest, Romania',
        description: 'Serving clients worldwide'
    }
]
