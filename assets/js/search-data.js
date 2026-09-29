// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Demo publication records — replace these entries with your own BibTeX file when ready.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Demo research projects in computer vision, generative modeling, and 3D perception.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Research updates and milestones.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "DEMO CV placeholder — replace the PDF and the entries below with your current academic CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-demo-update-developing-a-3d-vision-project-concept-around-sparse-view-visual-understanding",
          title: 'Demo update: developing a 3D vision project concept around sparse-view visual understanding.',
          description: "",
          section: "News",},{id: "news-demo-update-outlining-a-generative-models-project-for-controllable-visual-world-synthesis",
          title: 'Demo update: outlining a generative-models project for controllable visual world synthesis.',
          description: "",
          section: "News",},{id: "news-demo-update-prototyping-a-video-and-motion-research-direction-with-an-example-project-video-workflow",
          title: 'Demo update: prototyping a video-and-motion research direction with an example project video workflow....',
          description: "",
          section: "News",},{id: "news-demo-update-launched-a-research-portfolio-focused-on-computer-vision-generative-models-video-amp-amp-motion-and-3d-vision",
          title: 'Demo update: launched a research portfolio focused on computer vision, generative models, video...',
          description: "",
          section: "News",},{id: "projects-generative-models-for-structured-visual-worlds",
          title: 'Generative Models for Structured Visual Worlds',
          description: "Demo project on controllable image generation guided by scene-level structure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/generative-models/";
            },},{id: "projects-video-amp-motion-understanding-in-the-wild",
          title: 'Video &amp;amp; Motion Understanding in the Wild',
          description: "Demo project on temporally coherent visual representations for dynamic scenes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/video-motion/";
            },},{id: "projects-3d-vision-from-sparse-observations",
          title: '3D Vision from Sparse Observations',
          description: "Demo project on learning geometry-aware representations from partial visual evidence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vision-3d/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%65%70%6C%61%63%65-%6D%65@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/replace-github-username", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/replace-linkedin-username", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=REPLACE_WITH_SCHOLAR_ID", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
