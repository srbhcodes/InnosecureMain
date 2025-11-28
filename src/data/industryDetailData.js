// Industry Detail Pages Data
// This file centralizes all content for industry detail pages

// Image paths (using public paths for better performance and caching)
const banking1 = '/img/industries/banking1.jpg';
const banking2 = '/img/industries/banking2.png';
const banking3 = '/img/industries/banking3.jpg';

const healthcare1 = '/img/industries/healthcare1.png';
const healthcare2 = '/img/industries/healthcare2.png';
const healthcare3 = '/img/industries/healthcare3.png';

const education1 = '/img/industries/education1.png';
const education2 = '/img/industries/education2.png';
const education3 = '/img/industries/education3.png';

const tech1 = '/img/industries/tech1.png';
const tech2 = '/img/industries/tech2.png';
const tech3 = '/img/industries/tech3.jpg';

const retail1 = '/img/industries/retail1.png';
const retail2 = '/img/industries/retail2.jpg';
const retail3 = '/img/industries/retail3.jpg';

const ins1 = '/img/industries/ins1.png';
const ins2 = '/img/industries/ins2.jpg';
const ins3 = '/img/industries/ins3.jpg';

const Aero1 = '/img/industries/Aero1.png';
const Aero2 = '/img/industries/Aero2.jpg';
const Aero3 = '/img/industries/Aero3.png';

const hospitality1 = '/img/industries/hospitality1.png';
const hospitality2 = '/img/industries/hospitality2.jpg';
const hospitality3 = '/img/industries/hospitality3.jpg';

const media1 = '/img/industries/media1.png';
const media2 = '/img/industries/media2.png';
const media3 = '/img/industries/media3.png';

const logistics1 = '/img/industries/logistics1.png';
const logistics2 = '/img/industries/logistics2.jpg';
const logistics3 = '/img/industries/logistics3.jpg';

const tour1 = '/img/industries/tour1.avif';
const tour2 = '/img/industries/tour2.webp';
const tour3 = '/img/industries/tour3.jpg';

// Industry data structure
export const industryData = {
  banking: {
    hero: {
      title: 'Transforming Banking with Digital Innovation',
      subtitle: 'Secure transactions, customer-centric financial solutions, and cutting-edge technology to revolutionize your banking operations'
    },
    sections: [
      {
        title: 'Digital Banking Platform',
        description: 'Revolutionizing the banking experience with our comprehensive digital platform that offers seamless online banking, mobile payments, and personalized financial management tools. Our solutions enable secure, convenient, and efficient banking operations for both retail and corporate clients.',
        image: banking1,
        imageAlt: 'Digital Banking Platform',
        reverse: false,
        alt: false
      },
      {
        title: 'Advanced Security Solutions',
        description: 'Implementing cutting-edge security measures including biometric authentication, AI-powered fraud detection, and blockchain-based transaction security. Our solutions ensure the highest level of protection for financial data and transactions while maintaining regulatory compliance.',
        image: banking2,
        imageAlt: 'Advanced Security Solutions',
        reverse: true,
        alt: true
      },
      {
        title: 'Financial Analytics',
        description: 'Leveraging big data and AI to provide actionable insights for risk management, customer behavior analysis, and investment strategies. Our analytics solutions help financial institutions make data-driven decisions and optimize their operations.',
        image: banking3,
        imageAlt: 'Financial Analytics',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Banking Operations?',
      description: "Let's discuss how our banking solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  healthcare: {
    hero: {
      title: 'Transforming Healthcare with Digital Solutions',
      subtitle: 'Telemedicine, advanced medical analytics, and patient-centric platforms to revolutionize healthcare delivery'
    },
    sections: [
      {
        title: 'Digital Health Platform',
        description: 'Creating comprehensive digital health environments that combine electronic health records, telemedicine capabilities, and patient engagement tools. Our platform enables healthcare providers to deliver better care while improving patient outcomes and operational efficiency.',
        image: healthcare1,
        imageAlt: 'Digital Health Platform',
        reverse: false,
        alt: false
      },
      {
        title: 'Telemedicine Solutions',
        description: 'Developing secure and reliable telemedicine platforms that connect patients with healthcare providers. Our solutions enable remote consultations, virtual visits, and remote patient monitoring, making healthcare more accessible and convenient.',
        image: healthcare2,
        imageAlt: 'Telemedicine Solutions',
        reverse: true,
        alt: true
      },
      {
        title: 'Medical Analytics',
        description: 'Implementing advanced analytics to improve patient care, optimize operations, and enhance decision-making. Our analytics solutions help healthcare providers identify trends, predict outcomes, and deliver more personalized care through data-driven insights.',
        image: healthcare3,
        imageAlt: 'Medical Analytics',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Healthcare Operations?',
      description: "Let's discuss how our healthcare solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  education: {
    hero: {
      title: 'Revolutionizing Education with Digital Learning',
      subtitle: 'Interactive content, personalized learning experiences, and cutting-edge platforms to transform educational outcomes'
    },
    sections: [
      {
        title: 'Digital Learning Platform',
        description: 'Creating comprehensive digital learning environments that combine interactive content, real-time collaboration tools, and personalized learning paths. Our platform enables educators to deliver engaging lessons and students to learn at their own pace with adaptive content and assessments.',
        image: education1,
        imageAlt: 'Digital Learning Platform',
        reverse: false,
        alt: false
      },
      {
        title: 'Virtual Classroom Solutions',
        description: 'Developing immersive virtual classroom experiences with real-time video conferencing, interactive whiteboards, and collaborative tools. Our solutions enable seamless remote learning while maintaining engagement and interaction between students and educators.',
        image: education2,
        imageAlt: 'Virtual Classroom Solutions',
        reverse: true,
        alt: true
      },
      {
        title: 'Learning Analytics',
        description: 'Implementing advanced analytics to track student progress, identify learning patterns, and provide personalized recommendations. Our analytics solutions help educators optimize teaching strategies and support student success through data-driven insights.',
        image: education3,
        imageAlt: 'Learning Analytics',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Education Operations?',
      description: "Let's discuss how our education solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  'high-tech': {
    hero: {
      title: 'Pioneering the Future with Next-Gen Technology',
      subtitle: 'Quantum computing, advanced robotics, and AI systems to push the boundaries of innovation'
    },
    sections: [
      {
        title: 'Quantum Computing Solutions',
        description: 'Developing cutting-edge quantum computing systems that solve complex problems beyond classical computing capabilities. Our solutions enable breakthroughs in cryptography, optimization, and scientific research, opening new frontiers in computational power.',
        image: tech1,
        imageAlt: 'Quantum Computing Solutions',
        reverse: false,
        alt: false
      },
      {
        title: 'Advanced Robotics',
        description: 'Creating next-generation robotic systems with advanced AI and machine learning capabilities. Our solutions include autonomous robots, collaborative robotics, and intelligent automation systems that transform industries and enhance human capabilities.',
        image: tech2,
        imageAlt: 'Advanced Robotics',
        reverse: true,
        alt: true
      },
      {
        title: 'Next-Generation AI Systems',
        description: 'Developing advanced AI systems that push the boundaries of machine intelligence. Our solutions include neural network architectures, deep learning frameworks, and cognitive computing systems that enable breakthroughs in natural language processing, computer vision, and predictive analytics.',
        image: tech3,
        imageAlt: 'Next-Generation AI Systems',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your High Tech Operations?',
      description: "Let's discuss how our high tech solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  retail: {
    hero: {
      title: 'Transforming Retail with Omnichannel Solutions',
      subtitle: 'Smart inventory management, personalized shopping experiences, and seamless omnichannel platforms to elevate retail operations'
    },
    sections: [
      {
        title: 'Omnichannel Platform',
        description: 'Creating seamless shopping experiences across online and offline channels. Our platform integrates e-commerce, mobile apps, and physical stores to provide customers with consistent, personalized shopping journeys.',
        image: retail1,
        imageAlt: 'Digital Retail Platform',
        reverse: false,
        alt: false
      },
      {
        title: 'Smart Inventory Management',
        description: 'Implementing advanced inventory management systems that optimize stock levels and reduce operational costs. Our solutions provide real-time inventory tracking, automated replenishment, and predictive analytics for better stock management.',
        image: retail2,
        imageAlt: 'Smart Inventory Management',
        reverse: true,
        alt: true
      },
      {
        title: 'Personalized Shopping',
        description: 'Developing AI-powered personalization engines that deliver tailored product recommendations and promotions. Our solutions enhance customer engagement and increase sales through personalized shopping experiences.',
        image: retail3,
        imageAlt: 'Personalized Shopping',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Retail Operations?',
      description: "Let's discuss how our retail solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  insurance: {
    hero: {
      title: 'Modernizing Insurance with Digital Innovation',
      subtitle: 'Digital platforms, advanced risk analytics, and automated claims processing to transform insurance operations'
    },
    sections: [
      {
        title: 'Digital Insurance Platform',
        description: 'Creating comprehensive digital insurance solutions that streamline policy management, claims processing, and customer service. Our platform enables insurers to deliver personalized products and seamless experiences to their customers.',
        image: ins1,
        imageAlt: 'Digital Insurance Platform',
        reverse: false,
        alt: false
      },
      {
        title: 'Risk Analytics Solutions',
        description: 'Implementing advanced analytics to assess risks, predict claims, and optimize pricing strategies. Our solutions help insurers make data-driven decisions and improve underwriting accuracy through AI-powered risk assessment.',
        image: ins2,
        imageAlt: 'Risk Analytics Solutions',
        reverse: true,
        alt: true
      },
      {
        title: 'Claims Automation',
        description: 'Developing automated claims processing systems that reduce processing time and improve accuracy. Our solutions leverage AI and machine learning to streamline claims assessment, fraud detection, and settlement processes.',
        image: ins3,
        imageAlt: 'Claims Automation',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Insurance Operations?',
      description: "Let's discuss how our insurance solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  aerospace: {
    hero: {
      title: 'Pioneering the Future of Aerospace',
      subtitle: 'Advanced propulsion, hypersonic flight, and next-generation aircraft design to revolutionize aerospace technology'
    },
    sections: [
      {
        title: 'Advanced Propulsion Systems',
        description: 'Developing revolutionary propulsion technologies including scramjet engines, hybrid-electric systems, and advanced turbofan designs. Our innovations in propulsion are setting new standards for fuel efficiency, reduced emissions, and enhanced performance in both commercial and military aircraft.',
        image: Aero1,
        imageAlt: 'Advanced Propulsion Systems',
        reverse: false,
        alt: false
      },
      {
        title: 'Next-Generation Aerospace Materials',
        description: 'Pioneering the development of advanced aerospace materials including carbon fiber composites, titanium alloys, and heat-resistant ceramics. Our material innovations enable lighter, stronger, and more durable aircraft structures while maintaining optimal thermal and mechanical properties for extreme aerospace environments.',
        image: Aero2,
        imageAlt: 'Next-Generation Aerospace Materials',
        reverse: true,
        alt: true
      },
      {
        title: 'Autonomous Flight Systems',
        description: 'Leading the development of autonomous flight technologies and advanced avionics systems. Our solutions integrate AI-powered flight control systems, real-time data analytics, and advanced sensor networks to enhance flight safety, optimize navigation, and enable next-generation unmanned aerial systems.',
        image: Aero3,
        imageAlt: 'Autonomous Flight Systems',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Aerospace Operations?',
      description: "Let's discuss how our aerospace solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  automotive: {
    hero: {
      title: 'Driving Innovation in Automotive Technology',
      subtitle: 'Advanced mobility solutions, smart vehicle systems, and cutting-edge technology to transform the automotive industry'
    },
    sections: [
      {
        title: 'Electric Vehicle Technology',
        description: 'Pioneering the future of electric mobility with cutting-edge battery technology, charging infrastructure, and power management systems. Our solutions are driving the transition to sustainable transportation with innovative EV platforms and energy-efficient powertrains.',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=800&fit=crop&auto=format',
        imageAlt: 'Electric Vehicle Solutions',
        reverse: false,
        alt: false
      },
      {
        title: 'Connected Vehicle Systems',
        description: 'Developing advanced connected vehicle technologies that enable seamless communication between vehicles, infrastructure, and cloud systems. Our solutions enhance safety, optimize traffic flow, and deliver personalized in-vehicle experiences through cutting-edge telematics and IoT integration.',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&auto=format',
        imageAlt: 'Connected Vehicle Systems',
        reverse: true,
        alt: true
      },
      {
        title: 'Autonomous Driving',
        description: 'Leading the development of autonomous driving systems with advanced AI, sensor fusion, and real-time decision-making capabilities. Our solutions are setting new standards for vehicle safety and automation, enabling the next generation of self-driving vehicles.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format',
        imageAlt: 'Autonomous Driving',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Automotive Operations?',
      description: "Let's discuss how our automotive solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  hospitality: {
    hero: {
      title: 'Transforming Hospitality with Smart Solutions',
      subtitle: 'Smart hotel management, exceptional guest experiences, and digital booking platforms to elevate your hospitality business'
    },
    sections: [
      {
        title: 'Smart Hotel Management',
        description: 'Implementing comprehensive hotel management systems that streamline operations, optimize resources, and enhance guest satisfaction. Our solutions integrate property management, staff scheduling, and inventory control for efficient hotel operations.',
        image: hospitality1,
        imageAlt: 'Smart Hotel Management',
        reverse: false,
        alt: false
      },
      {
        title: 'Guest Experience Solutions',
        description: 'Creating personalized guest experiences through digital concierge services, mobile check-in/out, and smart room controls. Our solutions enhance guest satisfaction while reducing operational costs and improving service efficiency.',
        image: hospitality2,
        imageAlt: 'Guest Experience Solutions',
        reverse: true,
        alt: true
      },
      {
        title: 'Digital Booking Platform',
        description: 'Developing advanced booking and reservation systems that optimize occupancy rates and revenue management. Our platforms provide seamless booking experiences, dynamic pricing capabilities, and integrated payment solutions.',
        image: hospitality3,
        imageAlt: 'Digital Booking Platform',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Hospitality Operations?',
      description: "Let's discuss how our hospitality solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  media: {
    hero: {
      title: 'Transforming Media with Next-Gen Technology',
      subtitle: 'Virtual production, AI content creation, and immersive entertainment experiences to revolutionize media production'
    },
    sections: [
      {
        title: 'Virtual Production Technology',
        description: 'Implementing cutting-edge virtual production solutions that revolutionize content creation. Our technologies enable real-time rendering, virtual sets, and motion capture systems that transform how films, TV shows, and digital content are produced.',
        image: media1,
        imageAlt: 'Virtual Production Technology',
        reverse: false,
        alt: false
      },
      {
        title: 'AI Content Creation',
        description: 'Developing AI-powered tools for content generation and enhancement. Our solutions include automated video editing, AI-assisted script writing, and intelligent content personalization that streamline production workflows and enhance creative possibilities.',
        image: media2,
        imageAlt: 'AI Content Creation',
        reverse: true,
        alt: true
      },
      {
        title: 'Immersive Entertainment',
        description: 'Creating next-generation entertainment experiences through augmented and virtual reality. Our solutions deliver interactive storytelling, 360-degree video experiences, and immersive gaming environments that engage audiences in new and exciting ways.',
        image: media3,
        imageAlt: 'Immersive Entertainment',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Media Operations?',
      description: "Let's discuss how our media solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  logistics: {
    hero: {
      title: 'Transforming Logistics with Smart Solutions',
      subtitle: 'Autonomous delivery systems, smart warehousing, and real-time supply chain analytics to optimize logistics operations'
    },
    sections: [
      {
        title: 'Autonomous Delivery Systems',
        description: 'Implementing cutting-edge autonomous delivery solutions including drones, self-driving vehicles, and robotic delivery systems. Our technologies enhance delivery efficiency, reduce operational costs, and provide last-mile delivery solutions for urban and remote areas.',
        image: logistics1,
        imageAlt: 'Autonomous Delivery Systems',
        reverse: false,
        alt: false
      },
      {
        title: 'Smart Warehousing Solutions',
        description: 'Developing intelligent warehouse management systems that optimize inventory control and order fulfillment. Our solutions incorporate robotics, IoT sensors, and AI-powered analytics to streamline warehouse operations and improve inventory accuracy.',
        image: logistics2,
        imageAlt: 'Smart Warehousing Solutions',
        reverse: true,
        alt: true
      },
      {
        title: 'Supply Chain Analytics',
        description: 'Creating advanced analytics platforms that provide real-time visibility into supply chain operations. Our solutions enable predictive analytics, route optimization, and demand forecasting to improve efficiency and reduce operational costs.',
        image: logistics3,
        imageAlt: 'Supply Chain Analytics',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Logistics Operations?',
      description: "Let's discuss how our logistics solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  },
  'tour-travel': {
    hero: {
      title: 'Transforming Travel with Smart Solutions',
      subtitle: 'Virtual tourism, AI trip planning, and smart destination management to revolutionize the travel experience'
    },
    sections: [
      {
        title: 'Virtual Tourism Experiences',
        description: 'Creating immersive virtual travel experiences through VR and AR technologies. Our solutions enable travelers to explore destinations virtually, preview accommodations, and experience cultural attractions before booking, enhancing trip planning and decision-making.',
        image: tour1,
        imageAlt: 'Travel Solutions',
        reverse: false,
        alt: false
      },
      {
        title: 'AI Travel Planning',
        description: 'Developing intelligent travel planning assistants that create personalized itineraries. Our AI solutions analyze traveler preferences, suggest optimal routes, and provide real-time recommendations for activities, dining, and accommodations based on individual interests.',
        image: tour2,
        imageAlt: 'AI Travel Planning',
        reverse: true,
        alt: true
      },
      {
        title: 'Smart Destination Management',
        description: 'Implementing smart tourism solutions that optimize destination management. Our technologies include crowd monitoring systems, real-time visitor analytics, and digital wayfinding tools that enhance visitor experiences while supporting sustainable tourism practices.',
        image: tour3,
        imageAlt: 'Smart Destination Management',
        reverse: false,
        alt: false
      }
    ],
    cta: {
      title: 'Ready to Transform Your Travel Operations?',
      description: "Let's discuss how our travel solutions can drive innovation in your organization.",
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  }
};

// Helper function to get industry data by key
export const getIndustryData = (industryKey) => {
  return industryData[industryKey] || null;
};

