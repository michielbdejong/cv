const exp = {
  ripple: {
    company: 'Ripple',
    project: 'Interledger',
    jobTitle: 'Software Engineer',
    href: 'https://ripple.com',
    logo: 'https://pbs.twimg.com/profile_images/879392946730094592/IwNebNtK_400x400.jpg',
    description: 'Helped define and implement the Interledger protocol for the Internet of Value. We had many detailed discussions about the protocol specs and I took up product and release management of the research team\'s flagship product, ILP-KIT (NodeJS).',
    start: 'Feb 2017',
    finish: 'Nov 2018',
  },
  ledgerloops: {
    company: 'LedgerLoops',
    start: 'Oct 2016',
    finish: 'present',
    href: 'https://ledgerloops.com',
    logo: 'https://pbs.twimg.com/profile_images/792930018171039744/niPr0qoi_400x400.jpg',
    description: 'LedgerLoops is an alternative to money, based around a novel concept: cryptographically triggered IOUs. The website (ledgerloops.com) introduces the "Whispering Merchants" problem as an abstraction of trade flows in the real world. It explains how LedgerLoops is a more decentralized solution than money, requiring everybody only to trust their immediate economic neighbors. The whitepaper defines the LedgerLoops protocol, and an implementation in Node.js is currently in the making.',
  },
  mozilla: {
    company: 'Mozilla',
    project: 'Firefox OS',
    jobTitle: 'Software Engineer',
    start: 'Aug 2015',
    finish: 'Jul 2016',
    href: 'https://mozilla.org',
    logo: 'https://pbs.twimg.com/profile_images/3316021015/01faa970c0f601e38972a0e4866b026b_400x400.png',
    description: 'Data sync for Firefox OS. Our agile team implemented a server in Python (Pyramid framework), and a client in JavaScript. The goal was to synchronize bookmarks, photos, contacts, etc. in a decentralized way.',
  },
  indiehosters: {
    company: 'IndieHosters',
    jobTitle: 'Co-Founder',
    start: 'Oct 2014',
    finish: 'Jun 2015',
    href: 'https://indie.host',
    logo: 'https://pbs.twimg.com/profile_images/523115805332885505/BpfLeuTl_400x400.png',
    description: 'Docker-based hosting for end-users, with the aim to help decentralize the web. Our two-man project made it onto the frontpage of Wired.com.',
  },
  tosdr: {
    company: 'Terms of Service; Didn\'t Read',
    start: 'Aug 2011',
    finish: 'present',
    jobTitle: 'Tech Lead',
    href: 'https://tosdr.org',
    logo: 'https://pbs.twimg.com/profile_images/2518509425/3c5pvqhpk231uv8sd2uj_400x400.png',
    description: 'Rating the terms of service we all agree to by checking a box when signing up for a web service, but which hardly anybody ever reads. I was interviewed about ToS;DR on National Public Radio (NPR) in the US and our project was featured in quality newspapers like Frankfurter Algemeine (DE) and Le Monde (FR).',
  },
  unhosted: {
    start: 'Sep 2010',
    finish: 'Sep 2014',
    company: 'Unhosted',
    project: 'remoteStorage',
    jobTitle: 'Founder and Lead',
    href: 'https://unhosted.org',
    logo: 'https://pbs.twimg.com/profile_images/1571295852/unhosted-logo_400x400.png',
    description: 'Wrote the "Unhosted Web Apps" book, led the remoteStorage Internet Draft at IETF, and the remotestorage.js library. Highly visible in the web tech community, and awarded several funding grants.',
  },
  tuenti: {
    company: 'Tuenti',
    start: 'Apr 2009',
    finish: 'Feb 2011',
    jobTitle: 'Scalability Engineer',
    href: 'https://tuenti.com',
    logo: 'https://pbs.twimg.com/profile_images/2387391401/18wscys89og8zaez4rx2_400x400.png',
    description: 'Lead of the "backend for core" agile team, using advanced scalability techniques to make the tuenti.com website reliable and fast on its 1000 servers. While leading the images team, I was responsible for a self-healing Distributed Hash Table containing over a billion photos. We wrote most code in PHP.',
  },
  kibitech: {
    company: 'Kibitech',
    start: 'Oct 2008',
    finish: 'Apr 2009',
    href: 'http://www.kibitechnologies.com/about-us.html',
    logo: 'http://www.kibitech.com/images/yootheme/logo.svg',
    jobTitle: 'Software Team Leader',
    description:  'I was the director of the C++ development department, and in charge of a team of eight engineers. My work consisted of the development of a system of TV2.0 in dedicated hardware. Our in-house viewer was the world\'s best at streaming video with SVG animations.',
  },
  bytech: {
    company: 'By TechDesign',
    start: 'Apr 2007',
    finish: 'Sep 2008',
    href: 'http://www.by.com.es',
    logo: 'https://www.by.com.es/wp-content/themes/by/images-web/by-logo-home.svg',
    jobTitle: 'Bank Security',
    description: 'Person in charge of all in-house software development, related to physical security in banks (time-delayed safes, access control, ATMs, fingerprint readers, license plate scanners). Using embedded microprocessors and developing algorithms that work in real time with hardware. We developed mostly in C#.',
  },
  teva: {
    company: 'TEVA, S.A.',
    start: 'Nov 2005',
    finish: 'Apr 2007',
    href: 'http://www.grupoteva.com',
    logo: 'http://teva.grupoteva.com/assets/teva/img/teva.png',
    jobTitle: 'Director of R&amp;D',
    description: 'Responsible for the development and production of all high tech products (traffic cameras, license plate readers, etc.). I mainly wrote in C/C++.'
  },
  hostway: {
    company: 'Hostway Ltd.',
    start: 'Nov 2002',
    finish: 'Nov 2005',
    href: 'https://hostway.com',
    logo: 'https://hostway.com/wp-content/uploads/Hostway-HomeButton-3.png',
    jobTitle: 'Senior Sys Admin',
    description: 'Engineer and senior architect of Web servers and server clusters. Promoted main engineer in linux, and one of the 3 main engineers in Windows. I was responsible to maintain 200 linux servers and 100 virtual private servers, that contain 5,000 Web sites and support the email for 10,000 companies. All automation was done entirely with Python scripts.',
  },
  cwi: {
    start: '1999',
    finish: '2001',
    company: 'CWI Institute (Amsterdam)',
    description: 'PhD research (A.I.)',
  },
  leiden: {
    start: '1994',
    finish: '1998',
    company: 'Leiden University',
    description: 'MSc degree (Computer Science)',
  },
  oxford: {
    start: '1998',
    finish: '1999',
    company: 'Oxford University (Oxford, England)',
    description:  'R&D engineer',
    // description: 'Software Engineer. Low-level programming in Windows, DirectX, high-performance timing and graphics. Working on two scientific projects.',
  },
  twente: {
    start: '1993',
    finish: '1994',
    company: 'Twente University',
    description: 'Electronic Engineering',
  },
};

const humanLang = 'I speak Dutch, English, Spanish, German, French, some Indonesian, and a little bit of sign language.';
// const humanLang = [ {
//   name: 'Dutch',
//   flag: 'https://flags.fmcdn.net/data/flags/w580/nl.png',
// }, {
//   name: 'English',
//   flag: 'https://flags.fmcdn.net/data/flags/w580/gb.png',
// }, {
//   name: 'Spanish', 
//   flag: 'https://flags.fmcdn.net/data/flags/w580/es.png',
// }, {
//   name: 'German', 
//   flag: 'https://flags.fmcdn.net/data/flags/w580/de.png',
// }, {
//   name: 'French',
//   flag: 'https://flags.fmcdn.net/data/flags/w580/fr.png',
// }, {
//   name: 'Indonesian',
//   flag: 'https://flags.fmcdn.net/data/flags/w580/id.png',
// } ];

const progLang = 'Over the past 25 years, my favourite programming language has slowly shifted across Pascal/Delphi, C/C++/C#, Java, PHP, Ruby, JavaScript, and Go.';

const hobbies = 'In my spare time, I love playing Chopin on the piano, squash with friends, or hide-and-seek with my one-year-old son!';
const details = {
  fullName: 'Michiel Bertus de Jong',
  born: '21/07/1975, The Netherlands',
  website: 'https://michielbdejong.com',
  email: 'michiel@unhosted.org',
};

const vueData = {
  protocols: {
    blurb: 'Deep understanding of internet technology and FinTech. Critical thinker. Many years of experience developing decentralized, peer-to-peer and scalable solutions to complex problems.',
    sections: [
      {
        section: 'Decentralized Protocol Design',
        exps: [ exp.ripple, exp.unhosted, exp.ledgerloops ],
      }, {
        section: 'Rethinking the Internet',
        exps: [ exp.mozilla, exp.indiehosters, exp.tosdr ],
      }, {
        section: 'Academic (CS/AI)',
        exps: [ exp.cwi, exp.oxford, exp.leiden ],
      }, {
        section: 'Other',
        exps: [ exp.tuenti, exp.kibitech, exp.bytech, exp.teva, exp.hostway ],
      }
    ],
    details,
    humanLang,
    progLang,
    hobbies,
  },
  cloud: {
    blurb: 'Deep understanding of internet technology and FinTech. Critical thinker. Many years of experience developing decentralized, peer-to-peer and scalable solutions to complex problems.',
    sections: [
      {
        section: 'Decentralized Internet',
        exps: [ exp.unhosted, exp.mozilla, exp.tosdr, exp.indiehosters ],
      }, {
        section: 'PHP Development',
        exps: [ exp.tuenti, exp.hostway ],
      }, {
        section: 'Academic',
        exps: [ exp.cwi, exp.oxford, exp.leiden ],
      }, {
        section: 'Other',
        exps: [ exp.ripple, exp.ledgerloops, exp.kibitech, exp.bytech, exp.teva, ],
      }
    ],
    details,
    humanLang,
    progLang,
    hobbies,
  },
  backend: {
    blurb: 'Deep understanding of internet technology and FinTech. Critical thinker. Many years of experience developing decentralized, peer-to-peer and scalable solutions to complex problems.',
    sections: [
      {
        section: 'Scalability',
        exps: [ exp.tuenti, exp.indiehosters, exp.kibitech, exp.bytech, exp.teva, exp.hostway ],
      }, {
        section: 'Open Source',
        exps: [ exp.ripple, exp.mozilla, exp.unhosted, exp.ledgerloops, exp.tosdr ],
      }, {
        section: 'Computer Science and Artificial Intelligence',
        exps: [ exp.cwi, exp.oxford, exp.leiden ],
      }
    ],
    details,
    humanLang,
    progLang,
    hobbies,
  },
  development: {
    blurb: 'Deep understanding of internet technology and FinTech. Critical thinker. Many years of experience developing decentralized, peer-to-peer and scalable solutions to complex problems.',
    sections: [
      {
        section: 'Software Development, Internet Technology, Open Source',
        exps: [ exp.ripple, exp.mozilla, exp.unhosted, exp.ledgerloops, exp.indiehosters, exp.tosdr, exp.tuenti, exp.kibitech, exp.bytech, exp.teva, exp.hostway ],
      }, {
        section: 'Academic, Computer Science and Artificial Intelligence',
        exps: [ exp.cwi, exp.oxford, exp.leiden ],
      }
    ],
    details,
    humanLang,
    progLang,
    hobbies,
  },
};

const hashParts = window.location.hash.split('=');
let focusName = 'protocols';
if (hashParts[0]=='#focus') {
  focusName = hashParts[1];
} else {
  window.location = '#focus=protocols';
}

const app = new Vue({
  el: '#cv',
  data: vueData[focusName],
});
