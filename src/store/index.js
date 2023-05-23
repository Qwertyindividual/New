import { createStore } from "vuex";

export default createStore({
  state: {
    githubLink: 'https://github.com/Qwertyindividual',
    linkedinLink: 'https://www.linkedin.com/in/kauthar-brandt-6a3838219/',
    activeSection: 0,
    projects: [
      {
        id: 1,
        title: "Netflix Clone",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        description: "This project is a combination of HTML5 and CSS3. Built to understand the basics of html and css, in the beginning of the programme.",
        links: {
          github: "https://github.com/Qwertyindividual/Netflix.git",
          live: "https://dashing-biscuit-bf655d.netlify.app",
        },
        image: "https://i.postimg.cc/sgGwdNSZ/netflix.png",
        duration: "Duration: Small Activity/1 Day"
      },
      {
        id: 2,
        title: "E-commerce",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        bootstrap: "fa-brands fa-bootstrap fa-xl",
        javascript: "fa-brands fa-js fa-xl",
        description:
          "This project is a combination of HTML5, CSS3 and JavaScript. This was built to further develope out skills in html, css and javascript. The main task however was implementing a crud system using vanilla javascript. Thats the purpose of this project.",
        links: {
          github: "https://github.com/Qwertyindividual/JavascriptProject.git",
          live: "https://kautharjavascripteomp.netlify.app",
        },
        image: "https://i.postimg.cc/HWPwYtT0/ecommerce.png",
        duration: "Duration: 1 Week"
      },
      {
        id: 3,
        title: "Calculator/ JavaScript EOMP",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        bootstrap: "fa-brands fa-bootstrap fa-xl",
        javascript: "fa-brands fa-js fa-xl",
        description:
          "This project is a combination of HTML5,CSS3 and JavaScript. Buildt so one could further understand the basics of javascript and if there was any growth in regards to understanding javascript.",
        links: {
          github: "https://github.com/Qwertyindividual/Calculator.git",
          live: "https://kautharcalculator.netlify.app",
        },
        image: "https://i.postimg.cc/zDMhZXk0/calculator-pic.png",
        duration: "Duration: 1 Week"
      },
      {
        id: 4,
        title: "First Portfolio",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        bootstrap: "fa-brands fa-bootstrap fa-xl",
        description: "This project is a combination of HTML5 and CSS3. Built to present myself and ther skills i achieved in the first few weeks of attending the programme. ",
        links: {
          github:
            "https://github.com/Qwertyindividual/End-of-module-project.git",
          live: "https://kauthar.netlify.app",
        },
        image: "https://i.postimg.cc/fTQS8qCb/portfolio-pic.png",
        duration: "Duration: 1 Week"
      },
      {
        id: 5,
        title: "Flip Card",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        description: "This project is a combination of HTML5 and CSS3. This csrd was built as a suggestion from the lecturers to improve our skils in html and css. ",
        links: {
          github: "https://github.com/Qwertyindividual/FlipCard",
          live: "https://flip-card-23.netlify.app/",
        },
        image: "https://i.postimg.cc/pr1qdkzc/flipcard.png0",
        duration: "Duration: None/Personal Project"

      },
      {
        id: 6,
        title: "3D-Card",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        description: "This project is a combination of HTML5 and CSS3. This card was built as a suggestion from the lecturers to improve our skils in html and css. ",
        links: {
          github: "https://github.com/Qwertyindividual/3D-Card",
          live: "https://3d-card23.netlify.app/",
        },
        image: "https://i.postimg.cc/Hk7ddhXK/3d-flipcard.png",
        duration: "Duration: None/Personal Project"
      },
      {
        id: 7,
        title: "2nd Ecommerce Store/Node.js EOMP",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        javascript: "fa-brands fa-js fa-xl",
        vue: "fa-brands fa-vuejs fa-xl",
        node: "fa-brands fa-node-js fa-xl",
        mysql: "fa-solid fa-database fa-xl",
        bootstrap: "fa-brands fa-bootstrap fa-xl",
        description: "This project is a combination of HTML5, CSS3, JAVASCRIPT, VUE, NODE, MYSQL, and BOOTSTRAP. Buildt to primarily show our understanding of using node.js within a project. This was also a joint project/ dual project where one was tasked with the backend or frontend respectively.",
        links: {
          github: "https://github.com/Qwertyindividual/Used_Goods_Frontend",
          live: "https://usedgoodsstore-a2926.web.app/",
        },
        image: "https://i.postimg.cc/VNBYGc2S/node.png",
        duration: "Duration: 1 Week/Dual Project"
      },
      {
        id: 8,
        title: "2nd Portfolio/Vue EOMP",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        javascript: "fa-brands fa-js fa-xl",
        vue: "fa-brands fa-vuejs fa-xl",
        bootstrap: "fa-brands fa-bootstrap fa-xl",
        description: "This project is a combination of HTML5, CSS3, JAVASCRIPT, VUE,JS. Buildt to show our understanding of implementing vue.js for the first time while also building a representation of myself.",
        links: {
          github: "https://github.com/Qwertyindividual/Vue_Portfolio",
          live: "https://kauthar-vue-portfolio.web.app/#/",
        },
        image: "https://i.postimg.cc/sx1GCXRH/Vue-portfolio.png",
        duration: "Duration: 1 Week"
      },
      {
        id: 9,
        title: "3rd Ecommerce Website/Capstone Project",
        html: "fa-brands fa-html5 fa-xl",
        css: "fa-brands fa-css3-alt fa-xl",
        javascript: "fa-brands fa-js fa-xl",
        vue: "fa-brands fa-vuejs fa-xl",
        node: "fa-brands fa-node-js fa-xl",
        mysql: "fa-solid fa-database fa-xl",
        bootstrap: "fa-brands fa-bootstrap fa-xl",
        description: "This project is a combination of HTML5, CSS3, JAVASCRIPT, VUE.JS, NODE.JS, and MYSQL. This was the very last project i buildt while attending Life Choices Academy. This project displays all the skills we've learned over a 6 month learning journey. Aside from the languages listed in the above, I have implemeted a 3d tool called Spline into my Capstone Project.",
        links: {
          github: "https://github.com/Qwertyindividual/Artcade",
          live: "https://artcade-capstoneproject.web.app/",
        },
        image: "https://i.postimg.cc/502680j9/Artcade.png",
        duration: "Duration: 3 Weeks"
      },
      {
        id: 10,
        title: "1st Wordpress Eccommerce Website",
        wordpress: "fa-brands fa-wordpress fa-xl",
        description: "This project is a combination of wordpress using the woocommerce plugin. Buildt to show our understanding of wordpress in regards to using the right plugins and designs.",
        links: {
          live: "https://dev-bloom-avenue.pantheonsite.io/",
        },
        image: "https://i.postimg.cc/G3Jbbrpq/Word-Ecommerce.png",
        duration: "Duration: 3 Days"
      },

    ],
    testimonials: [
      {
        id: 1,
        name: "Aliyah du Toit",
        relation: "Colleague",
        testimonial:
          "In the 2 months I have worked with Kauthar, it is clear that she is  a very hard-working, compassionate person. She never hesitates to help others and once she is faced with an issue, she will work at it until it is solved.",
        links: {
          github: "https://github.com/aliyahdutoit",
          socials: "",
        },
        image: "https://i.postimg.cc/TPBKQ3y1/aliyah.jpg",
      },
      {
        id: 2,
        name: "Imraan Berksen",
        relation: "Colleague",
        testimonial:
          "Kauthar is really fun, interesting and full-hearted person. She's so friendly, honest and lovely to be around. She is shy at first but as you get to know her, she becomes more comfortable with you. She's also kind, caring and a good judge of character.",
        links: {
          github: "https://github.com/ImraanBernksen",
          socials: "",
        },
        image: "https://i.postimg.cc/LXLyXGtQ/imraan.jpg",
      },
      {
        id: 3,
        name: "Candice Amon",
        relation: "Course Leader",
        testimonial:
          "Kauthar loves to work on her own. Has the ability to engage very well. She has the willingness to push herself out of her comfort zone in order to grow in all aspects.",
        links: {
          github: "",
          socials: "",
        },
        image: "https://i.postimg.cc/pLN8qyz7/candiuce.jpg",
      },
      {
        id: 4,
        name: "Seaba Mafestire",
        relation: "Colleague",
        testimonial:
          "Kauthar is a free spirit who works hard to achieve her goals and puts her all in her work and a good team player.",
        links: {
          github: "seabaraven@gmail.com",
          socials: "seabaraven@gmail.com",
        },
        image: "https://i.postimg.cc/rmbN1TTN/seaba.jpg",
      },
      {
        id: 5,
        name: "Ryan Thomas",
        relation: "Lecturer",
        testimonial:
          "Kauthar is not only a great student, but also a good help amongst her peers.Her ability to assist her peers with various issues while handling her own is admirable and shows her strength while learning and her ability to take what she's learnt and use it to it's fullest potential. She also has a good sense of humor and a bubbly personality.",
        links: {
          github: "",
          socials: "",
        },
        image: "https://i.postimg.cc/tJK1SmZP/ryan.jpg",
      },
      {
        id: 6,
        name: "Keren Bruce",
        relation: "Colleague",
        testimonial:
          "Kauthar is a determined and energetic worker who strives to achieve her goals in the most efficient way possible . Her personality lights up any conversation she participates in and is surely a lovely presence to have in the workplace .",
        links: {
          github: "https://github.com/kerenkittybruce",
          socials: "https://www.instagram.com/kerenkittybruce/",
        },
        image: "https://i.postimg.cc/Xv0QF8nD/keren.jpg",
      },
      {
        id: 7,
        name: "",
        relation: "Colleague",
        testimonial:"Kauthar Brandt is a soft-spoken and delightful person to be around. Her wonderful personality is only amplified by her intelligence and creativity, which she skillfully utilizes to develop some of the most impressive websites among her peers. I highly recommend considering her for any development roles; she would be a valuable addition to your team",
         links: {
          github: "https://github.com/kerenkittybruce",
          socials: "https://www.instagram.com/kerenkittybruce/",
        },
        image: "https://i.postimg.cc/BZmMPSJm/DSC-3496.jpg",
      },
      {
        id: 8,
        name: "Konke Malindi",
        relation: "Colleague",
        testimonial: "Kauthar has a mind that knows what,why and how to solve problems. She understand people and how to cater to their need making her very useful in any company. She has a beautiful eye for design and although she's quiet, she's very easy to talk and has very good people skills. Having her in any company would be making an excellent choice.",
        links: {
          github: "https://github.com/kerenkittybruce",
          socials: "https://www.instagram.com/kerenkittybruce/",
        },
        image: "https://i.postimg.cc/RhWsVyJS/DSC-3528.jpg",
      }
    ],
    resume: [
      {
        faculty: "Life Choices Coding Academy",
        timeline: "Sep-2022 - Current",
        description:
          "Currently learning the skills to become a full-stack web developer by implementing html, css, bootstrap, javascript, etc... into projects. ",
        img: "https://i.postimg.cc/Gt9KN2ps/life-choices.png",
      },
      {
        faculty: "Mondale High School",
        timeline: "2016 - 2020",
        description:
          "Majored in Physical Sciences, Mathematics, Life Sciences, Geography and passed Matric in the year 2021 with a Bachelor Pass",
        img: "https://i.postimg.cc/tTvthjzR/mondale-high-school.png",
      },
    ],
    interests: [
      {
        id: 1,
        name: "Cooking"
      },
      {
        id: 2,
        name: "Experimenting"
      },
      {
        id: 3,
        name: "Reading"
      },
      { id: 4,
        name: "Sketching"
      },
      { id: 5,
        name: "Designing"
      }
    ],
    short: [
       {
        id: 1,
        goal: "Improve my code quality"
       },
       {
        id: 2,
        goal: "Finish my UX/UI google certificate"
       },
       {
        id: 3,
        goal: "Gain more work experience"
       },
       {
        id: 4,
        goal: "Partake in an Internship"
       }
    ],
    long: [
      {
        id: 1,
        goal: "Become a UX/UI Designer"
      },
      {
        id: 2,
        goal: "Become an Interactive Designer"
      }
    ]
  },
  mutations: {
    setActiveSection(state, index) {
      state.activeSection = index;
    },
    updateGitHubLink(state, newLink) {
      state.githubLink = newLink;
    },
    updateLinkedinLink(state, newLink) {
      state.linkedinLink = newLink;
    },
  },
  actions: {
    updateActiveSection({ commit }, index) {
      commit('setActiveSection', index);
    },
    updateGitHubLink({ commit }, newLink) {
      commit('updateGitHubLink', newLink);
    },
    updateLinkedinLink({ commit }, newLink) {
      commit('updateLinkedinLink', newLink);
    },
  },
  getters: {
    activeSection(state) {
      return state.sections[state.activeSection];
    },
    githubLink(state) {
      return state.githubLink;
    },
    linkedinLink(state) {
      return state.linkedinLink;
    },
    getProjectLinks: (state) => (id) => {
      const project = state.projects.find((project) => project.id === id);
      if (project && project.links) {
        return project.links;
      }
      return {};
    },
  },

  modules: {},
});
