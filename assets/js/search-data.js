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
          description: "Selected research publications by Md Sakib Hossain Shovon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected research and applied AI projects.",
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
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Research moments, visual work, and media highlights.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A downloadable CV will be available here soon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-worked-as-a-trainee-machine-learning-engineer-on-the-government-edge-project-in-bangladesh-contributing-to-automatic-bangla-number-plate-recognition-for-smart-toll-collection",
          title: 'Worked as a Trainee Machine Learning Engineer on the Government EDGE Project in...',
          description: "",
          section: "News",},{id: "news-conducted-ai-and-machine-learning-research-projects-as-a-research-assistant-associated-with-qatar-university-qatar",
          title: 'Conducted AI and machine-learning research projects as a research assistant associated with Qatar...',
          description: "",
          section: "News",},{id: "news-began-a-research-collaboration-with-the-university-of-queensland-australia-involving-artificial-intelligence-and-machine-learning",
          title: 'Began a research collaboration with The University of Queensland, Australia, involving artificial intelligence...',
          description: "",
          section: "News",},{id: "news-co-founded-neurontreeai-a-nonprofit-initiative-for-ai-education-research-mentorship-collaboration-and-accessible-advanced-research-knowledge",
          title: 'Co-founded NeuronTreeAI, a nonprofit initiative for AI education, research mentorship, collaboration, and accessible...',
          description: "",
          section: "News",},{id: "news-started-the-m-s-program-in-artificial-intelligence-at-the-kim-jaechul-graduate-school-of-ai-kaist-and-joined-the-statistical-artificial-intelligence-lab-sail-as-a-graduate-researcher",
          title: 'Started the M.S. program in Artificial Intelligence at the Kim Jaechul Graduate School...',
          description: "",
          section: "News",},{id: "news-started-the-sdm-manufacturing-foundation-model-project-a-collaboration-involving-kaist-snu-postech-and-keti",
          title: 'Started the SDM Manufacturing Foundation Model Project, a collaboration involving KAIST, SNU, POSTECH,...',
          description: "",
          section: "News",},{id: "news-our-work-orthogonal-polynomial-approximation-for-matrix-log-normalization-in-global-covariance-pooling-was-accepted-at-bmvc-2026-in-collaboration-with-prof-pietro-liò-and-neurontreeai",
          title: 'Our work, Orthogonal Polynomial Approximation for Matrix Log Normalization in Global Covariance Pooling,...',
          description: "",
          section: "News",},{id: "news-submitted-a-research-work-to-aaai-2027-in-collaboration-with-sail-kaist-ai-the-kaist-visual-ai-group-and-neurontreeai",
          title: 'Submitted a research work to AAAI 2027 in collaboration with SAIL, KAIST AI,...',
          description: "",
          section: "News",},{id: "news-submitted-a-research-work-to-wacv-2027-in-collaboration-with-sail-kaist-ai-and-neurontreeai",
          title: 'Submitted a research work to WACV 2027 in collaboration with SAIL, KAIST AI,...',
          description: "",
          section: "News",},{id: "news-submitted-m-s-thesis-research-from-sail-kaist-ai-to-iclr-2027",
          title: 'Submitted M.S. thesis research from SAIL, KAIST AI to ICLR 2027.',
          description: "",
          section: "News",},{id: "projects-automatic-bangla-number-plate-recognition-for-smart-toll-collection",
          title: 'Automatic Bangla Number Plate Recognition for Smart Toll Collection',
          description: "An AI project for automatic Bangla vehicle number plate recognition in intelligent toll collection infrastructure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bangla-number-plate-recognition/";
            },},{id: "projects-sdm-manufacturing-foundation-model-project",
          title: 'SDM Manufacturing Foundation Model Project',
          description: "An ongoing, large-scale manufacturing foundation model initiative involving leading Korean research institutions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sdm-manufacturing-foundation-model/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6B%69%62@%6B%61%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Sakib-Hossain-Shovon", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/md-sakib-hossain-shovon-601738178", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9VM2SHYAAAAJ", "_blank");
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
