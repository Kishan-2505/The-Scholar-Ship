const Product = require('../models/product');


const products = [
    new Product({
        product_id: 001,
        title: "The Secret",
        description: "The Secret is a best-selling 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the law of attraction, which claims that thoughts can change a person's life directly. The book has sold 30 million copies worldwide and has been translated into 50 languages.",
        price: 550.00,
        image: "/images/book5.jpg",
        author: "Rhonda Byrne",
        language: "English",
        modal_no: 0,
        category: "mainPage"

    }),new Product({
        product_id: 002,
        title: "Word Power Made Easy",
        description: "Word Power Made Easy is a comprehensive vocabulary‑building system created by legendary grammarian Norman Lewis that provides a simple, step‑by‑step method to increase your knowledge and mastery of the English language.",
        price: 255.00,
        image: "/images/book6.jpg",
        author: "Norman Lewis",
        language: "English",
        modal_no: 1,
        category: "mainPage"

    }),new Product({
        product_id: 003,
        title: "The Power of Your Subconscious Mind",
        description: "Your subconscious mind is the cache of your memoir, beliefs, life experiences and life traumas. The information heaped in our subconscious influences our behavior to a great deal.",
        price: 450.00,
        image: "/images/book8.jpg",
        author: "Josheph Murphy",
        language: "English",
        modal_no: 2,
        category: "mainPage"

    }), new Product({
        product_id: 004,
        title: "Think and Grow Rich",
        description: "Think and Grow Rich condenses them, providing the reader with 13 principles in the form of a 'Philosophy of Achievement'. The book asserts that desire, faith, and persistence can propel one to great heights if one can suppress negative thoughts and focus on long-term goals. ... Thoughts are things. Desire.",
        price: 299.00,
        image: "/images/book7.jpg",
        author: "napoleon hill",
        language: "English",
        modal_no: 3,
        category: "mainPage"

    }),new Product({
        product_id: 101,
        title: "The Ritual",
        description: "The Ritual. Four old university friends reunite for a hiking trip in the Scandinavian wilderness of the Arctic Circle. ... Frustrated and tired they take a shortcut that turns their hike into a nightmare that could cost them their lives.",
        price: 500.00,
        image: "../images/novels/n1.jpg",
        author: "Adam Nevill",
        language: "English",
        modal_no: 4,
        category: "novel"

    }),new Product({
        product_id: 102,
        title: "Black Hearts",
        description: "'Black Hearts' is a brilliant description of combat as seen through the eyes of Bravo Company in the darkest days of the Iraq War. It serves as a case study for the negative impacts of poor leadership in today's heavy combat on young and strung-out soldiers.",
        price: 250.00,
        image: "../images/novels/n2.jpg",
        author: "Jenna Wood",
        language: "English",
        modal_no: 5,
        category: "novel"

    }),new Product({
        product_id: 103,
        title: "Stephen King",
        description: "This is a horror novel by American writer Stephen King. It was published in 1996 at the same time as its 'mirror' novel, The Regulators, itself published under King's Richard Bachman pseudonym. It was made into a TV film starring Ron Perlman, Tom Skerritt and Steven Weber in 2006.",
        price: 275.00,
        image: "../images/novels/n3.jpg",
        author: "Stephen wood",
        language: "English",
        modal_no: 6,
        category: "novel"

    }), new Product({
        product_id: 104,
        title: "ARTEMIS-One-Zero-Five ",
        description: "Artemis One-Zero-Five: A horror/science-fiction novel ",
        price: 275.00,
        image: "../images/novels/n4.jpg",
        author: " Christopher Henderson",
        language: "English",
        modal_no: 7,
        category: "novel"

    }), new Product({
        product_id: 105,
        title: "The Bear and the Nightingale",
        description: "The Bear and the Nightingale tells the story of Pytor Vladimirovich and his family. When his wife Marina dies during child birth, he is left a young new daughter Vasya, who his wife before her death hoped would be gifted with the magical birth right held by her bloodline.",
        price: 199.00,
        image: "../images/novels/n5.jpg",
        author: " Katherine Arden",
        language: "English",
        modal_no: 8,
        category: "novel"

    }),  new Product({
        product_id: 106,
        title: "Over The Rainbow",
        description: "A magical journey OVER THE RAINBOW When all the world is a hopeless jumble and the raindrops tumble all around, Heaven opens a magic lane.",
        price: 299.00,
        image: "../images/novels/n6.jpg",
        author: "Durek",
        language: "English",
        modal_no: 9,
        category: "novel"

    }),new Product({
        product_id: 107,
        title: "Cold Hearted Rake",
        description: "Cold-hearted Rake, Devon, inherits an earldom and has to take on the responsibility of a title, with all it entails, being in debt. The widow of the late earl, Kathleen, doesn't want Devon to interfere and to leave her and her three sisters-in-law alone.",
        price: 359.00,
        image: "../images/novels/n7.jpg",
        author: "Lisa Kleypas",
        language: "English",
        modal_no: 10,
        category: "novel"

    }),new Product({
        product_id: 108,
        title: "The Great Indian Novel",
        description: "The Great Indian Novel is a satirical novel by Shashi Tharoor, first published by Viking Press in 1989. It is a fictional work that takes the story of the Mahabharata, the Indian epic, and recasts and resets it in the context of the Indian Independence Movement.",
        price: 250.00,
        image: "../images/novels/n8.jpg",
        author: "Shashi Tharoor",
        language: "English",
        modal_no: 11,
        category: "novel"

    }), new Product({
        product_id: 109,
        title: "Love Story",
        description: "Love Story is romantic and funny, yet tragic. It is the tale of two college students whose love enables them to overcome the adversities they encounter in life: Oliver Barrett IV, a Harvard jock and heir to the Barrett fortune and legacy, and Jennifer Cavilleri.",
        price: 200.00,
        image: "../images/novels/n9.jpg",
        author: "Napoleon Hill",
        language: "English",
        modal_no: 12,
        category: "novel"

    }),new Product({
        product_id: 110,
        title: "Harry Potter and The HALF-BLOOD PRINCE",
        description: "Set during Harry Potter's sixth year at Hogwarts, the novel explores the past of Harry's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.",
        price: 500.00,
        image: "../images/novels/n11.jpg",
        author: "J. K. Rowling",
        language: "English",
        modal_no: 13,
        category: "novel"

    }),
    
    new Product({
        product_id: 201,
        title: "The Ethical Engineer",
        description: "The Ethical Engineer explores ethical issues that arise in engineering practice, from technology transfer to privacy protection to whistle-blowing. Presenting key ethics concepts and real-life examples of engineering work, Robert McGinn illuminates the ethical dimension of engineering practice and helps students and professionals determine engineers’ context-specific ethical responsibilities.",
        price: 549.00,
        image: "../images/engineering/e1.jpg",
        author: " Robert Mcgin",
        language: "English",
        modal_no: 14,
        category: "engineering"

    }), new Product({
        product_id: 202,
        title: "Standard Handbook for Civil Engineers",
        description: "The Standard Handbook is a comprehensive single volume book. This book is divided into sections covering the entire civil engineering. In first few chapters it deals with specifications etc. It also describes various construction materials.",
        price: 790.00,
        image: "../images/engineering/e2.jpg",
        author: "Frederick Merritt",
        language: "English",
        modal_no: 15,
        category: "engineering"

    }), new Product({
        product_id: 203,
        title: "Vibration Engineering",
        description: "Covers the basics of vibration analysis and the design of machines, mechanical systems and structures, providing extensive coverage of classical subjects, such as single and multiple degree-of-freedom and continuous systems.",
        price: 695.00,
        image: "../images/engineering/e3.jpg",
        author: "D.N. Naresh",
        language: "English",
        modal_no: 16,
        category: "engineering"

    }), new Product({
        product_id: 204,
        title: "Civil Engineering Project Management",
        description: "Civil Engineer Project Manager Reponsibilities and Duties. Manage all communication with clients for various multiple projects and provide engineering and technical support to clients. ... Supervise efficient working of all engineering staff evaluate all work and provide required training to manage all projects.",
        price: 600.00,
        image: "../images/engineering/e4.jpg",
        author: "Alan Towert",
        language: "English",
        modal_no: 17,
        category: "engineering"

    }), new Product({
        product_id: 205,
        title: "Engineering Mathematics",
        description: "Basics of Engineering Mathematics",
        price: 489.00,
        image: "../images/engineering/e5.jpg",
        author: " Anthony Croft, James Flint",
        language: "English",
        modal_no: 18,
        category: "engineering"

    }), new Product({
        product_id: 206,
        title: "Mechanis of Materials",
        description: "This book provides a comprehensive reference for the studies of mechanical properties of materials over multiple length and time scales. The topics include nanomechanics, micromechanics, continuum mechanics, mechanical property measurements, and materials design",
        price: 900.00,
        image: "../images/engineering/e6.jpg",
        author: "Dr. Arun Kumar Jain",
        language: "English",
        modal_no: 19,
        category: "engineering"

    }), new Product({
        product_id: 207,
        title: "Journal of Mechanical Engineerin",
        description: "Journal of Mechanical Engineering. The Strojniški vestnik – Journal of Mechanical Engineering publishes theoretical and practice oriented papers, dealing with problems of modern technology (power and process engineering.",
        price: 678.00,
        image: "../images/engineering/e7.jpg",
        author: "Stonjnicky Casopis",
        language: "English",
        modal_no: 20,
        category: "engineering"

    }), new Product({
        product_id: 208,
        title: "Mechanical Engineering Science",
        description: "Mechanical Engineering Science provides an introduction to the basic science and mechanics required by mechanical engineering students in their studies; it links in with and complements the authors' companion volume Applied Mechanics.",
        price: 489.00,
        image: "../images/engineering/e8.jpg",
        author: " Hannah and Hillier",
        language: "English",
        modal_no: 21,
        category: "engineering"

    }), new Product({
        product_id: 209,
        title: "Cyber Security Engineering",
        description: "Cyber Security Engineering guides you through risk analysis, planning to manage secure software development, building organizational models, identifying required and missing competencies, and defining and structuring metrics.",
        price: 450.00,
        image: "../images/engineering/e9.jpg",
        author: "Nancy R. Mead, Carol C. Woody",
        language: "English",
        modal_no: 22,
        category: "engineering"

    }),

    new Product({
        product_id: 210,
        title: "Data-Driven Science and Engineering",
        description: "Data-driven discovery is revolutionizing the modeling, prediction, and control of complex systems. This textbook brings together machine learning, engineering mathematics, and mathematical physics to integrate modeling and control of dynamical systems with modern methods in data science.",
        price: 599.00,
        image: "../images/engineering/e10.jpg",
        author: "Steven L. Brunton",
        language: "English",
        modal_no: 23,
        category: "engineering"

    }),new Product({
        product_id: 211,
        title: "Security Engineering",
        description: "This book created the discipline of security engineering Spammers, virus writers, phishermen, money launderers, and spies now trade busily with each other in a lively online criminal economy — and as they specialize, they get better.",
        price: 999.00,
        image: "../images/engineering/e11.jpg",
        author: "Ross Anderson",
        language: "English",
        modal_no: 24,
        category: "engineering"

    }),new Product({
        product_id: 212,
        title: "Electrical Engineering",
        description: "The Basics of electrical Engineering",
        price: 800.00,
        image: "../images/engineering/e12.jpg",
        author: "Rajeev Manglik",
        language: "English",
        modal_no: 25,
        category: "engineering"

    }), new Product({
        product_id: 213,
        title: "Practical Electronics For Inventors",
        description: "Written by a pair of experienced engineers and dedicated hobbyists, Practical Electronics for Inventors, Fourth Edition, lays out the essentials and provides step-by-step instructions, schematics, and illustrations.",
        price: 2000.00,
        image: "../images/engineering/e13.jpg",
        author: "Simon Manik",
        language: "English",
        modal_no: 26,
        category: "engineering"

    }),new Product({
        product_id: 214,
        title: "Practical Electrical Engineering",
        description: "Buy this book.It is written from an engineering perspective, with special emphasis on circuit functionality and applications. Reliance on higher-level mathematics and physics, or theoretical proofs has been intentionally limited in order to prioritize the practical aspects of electrical engineering.",
        price: 1500.00,
        image: "../images/engineering/e14.jpg",
        author: "Sergey N. Makaow, Stephen J. Bitar",
        language: "English",
        modal_no: 27,
        category: "engineering"

    }),


    new Product({
        product_id: 301,
        title: "An Introduction to Indian Art",
        description: "This book covers the History of Arts in India as it introduces the students to the world of ancient Indian arts. It gives detailed insights of the Indus Valley Civilization and the artwork and sculptures that have been excavated from the historical sites.",
        price: 200.00,
        image: "../images/arts/a1.jpg",
        language: "English",
        modal_no: 28,
        category: "arts"

    }),new Product({
        product_id: 302,
        title: "Leonardo Da Vinci",
        description: " In this book he shows how Leonardo's genius was based on skills we can improve in ourselves, such as passionate curiosity, careful observation, and an imagination so playful that it flirted with fantasy. He produced the two most famous paintings in history, The Last Supper and the Mona Lisa.",
        price: 300.00,
        image: "../images/arts/a2.jpg",
        author: "Walter Isaacson",
        language: "English",
        modal_no: 29,
        category: "arts"

    }),new Product({
        product_id: 303,
        title: "Histroy of Indain Art",
        description: "This book is useful for students of Art Diploma, BFA, and PG studies and to all those art history lovers. It covers the topics from Prehistoric Period, Vedic Period to Art in the Modern Era.",
        price: 250.00,
        image: "../images/arts/a3.jpg",
        author: "Anil Rao Sandhya Ketkar",
        language: "English",
        modal_no: 30,
        category: "arts"

    }),new Product({
        product_id: 304,
        title: "The Art of Thinking Clearly",
        description: "The Art of Thinking Clearly is a book by Rolf Dobelli that aims to help us make better decisions in life. However, rather than trying to introduce new behaviours, it wants us to recognise and then cut out some common errors of judgement we fall prey to on a regular basis.",
        price: 1500.00,
        image: "../images/arts/a4.jpg",
        author: "Rolf Dobelli",
        language: "English",
        modal_no: 31,
        category: "arts"

    }),



    new Product({
        product_id: 401,
        title: "Contemporary Implant Dentistry",
        description: "Misch gives you expert advice and guidance on the various surgical approaches to placing implants in the revision of his best-selling classic. ... Surgical procedure chapters are of benefit to the implant surgeon and are critical to the restoring dentist who wants to better understand and appreciate surgical concepts",
        price: 1000.00,
        image: "../images/medical/m1.jpg",
        author: "Carel E. Misch",
        language: "English",
        modal_no: 32,
        category: "medical"

    }),new Product({
        product_id: 402,
        title: "Public Health Dentistry",
        description: "Jaypee Brothers Medical Publishers A Textbook Of Public Health Dentistry 1st Edition by MARYA  ",
        price: 1550.00,
        image: "../images/medical/m2.jpg",
        author: "CM Marya",
        language: "English",
        modal_no: 33,
        category: "medical"

    }), new Product({
        product_id: 403,
        title: "Waxing for Dental Students",
        description: "When dental students are first taught how to wax teeth, they need clear instructions with logical steps and plenty of illustrations. ... The author covers the basics of wax instrumentation and addition, but the bulk of the book details the steps for waxing incisors, canines, premolars, and molars.",
        price: 700.00,
        image: "../images/medical/m3.jpg",
        author: "Rowide Abdalla",
        language: "English",
        modal_no: 34,
        category: "medical"

    }), new Product({
        product_id: 404,
        title: "Clinical Medicine for Dental Students",
        description: "Alagappan's Clinical Medicine for Dental Students is the latest edition of this comprehensive student resource. Updated epidemiological data and new flowcharts and illustrations bring the book firmly up to date. Divided into 55 chapters across nine sections, the first section covers general medical assessment, providing a sample assessment chart at the end of the section.",
        price: 850.00,
        image: "../images/medical/m4.jpg",
        author: "Dr. S N Chagh",
        language: "English",
        modal_no: 35,
        category: "medical"

    }), new Product({
        product_id: 405,
        title: "Clinical Problem Solving in Dentistry",
        description: "Containing over 350 high-quality photographs, line artworks and tables, Clinical Problem Solving in Dentistry is written in an easy-to read 'how to' style and contains a large number of real life clinical cases carefully presented to maximise learning outcomes for the reader.",
        price: 940.00,
        image: "../images/medical/m5.jpg",
        author: " Edward W. Odell",
        language: "English",
        modal_no: 36,
        category: "medical"

    }), new Product({
        product_id: 406,
        title: "Ayurveda and Modern Medicine",
        description: "Ayurveda treatment starts with an internal purification process, followed by a special diet, herbal remedies, massage therapy, yoga, and meditation. The concepts of universal interconnectedness, the body's constitution (prakriti), and life forces (doshas) are the primary basis of ayurvedic medicine.",
        price: 990.00,
        image: "../images/medical/m6.jpg",
        author: "Dr. R. D. Lele",
        language: "English",
        modal_no: 37,
        category: "medical"

    }), new Product({
        product_id: 407,
        title: "Physiology for Ayurveda",
        description: "'Śarīra Vicaya' is the Ayurvedic term that represents both Anatomy and Physiology. 'Vicaya' means the special or detailed knowledge. As per Caraka, the detailed knowledge of normal human body is helpful to understand the factors influencing health and therefore such knowledge is widely appreciated by experts.",
        price: 1500.00,
        image: "../images/medical/m7.jpg",
        author: " Dr. A K Jain ",
        language: "English",
        modal_no: 38,
        category: "medical"

    }), new Product({
        product_id: 408,
        title: "Ayurveda Encyclopedia",
        description: "The Ayurveda Encyclopedia is an important reference volume for all students of Ayurveda and Yoga, almost a complete course in Ayurveda in itself. Swami Sada Shiva Tirtha has done a monumental work in putting together so much material in such a concise and clear manner for the modern reader.",
        price: 1999.00,
        image: "../images/medical/m8.jpg",
        author: "Sada Shiva Tirtha",
        language: "English",
        modal_no: 39,
        category: "medical"

    }), new Product({
        product_id: 409,
        title: "Annals of Ayurvedic Medicine",
        description: "Annals of Ayurvedic Medicine is a quarterly peer reviewed journal by Society of Ayurvedic Physicians of India. This is included in UGC -CARE list of Journals list under Science category for consideration of its publications for various career opportunities and promotion schemes under the mandate of UGC",
        price: 1090.00,
        image: "../images/medical/m9.jpg",
        author: "",
        language: "English",
        modal_no: 40,
        category: "medical"

    }), new Product({
        product_id: 410,
        title: "Journal of Medical Psychology",
        description: "The Journal of Medical Psychology publishes articles (original research, brief reports, and reviews) from all aspects of medical psychology. This involves research on clinical psychology, neuropsychology, behavioral medicine, biological psychology, and neuroscience.",
        price: 875.00,
        image: "../images/medical/m10.jpg",
        author: " Mason, Oliver",
        language: "English",
        modal_no: 41,
        category: "medical"

    }),new Product({
        product_id: 411,
        title: "Psychology for Medicine & Healthcare",
        description: "Each person is a unique mix of thoughts, emotions, personality, behaviour patterns, and their own personal history and experiences. Having a thorough understanding of the psychological aspects of medicine and health has become ever more important to ensure that patients receive excellent care and treatment",
        price: 500.00,
        image: "../images/medical/m11.jpg",
        author: " Mason, Oliver",
        language: "English",
        modal_no: 42,
        category: "medical"
    }),

    new Product({
        product_id: 501,
        title: "Jurisdiction and Powers of the Courts",
        description: "Law Relating to Jurisdiction and Powers of the Courts , Subject Index , Detailed",
        price: 600.00,
        image: "../images/law/l1.jpg",
        author: "Bhargava",
        language: "English",
        modal_no: 43,
        category: "law"

    }),new Product({
        product_id: 502,
        title: "Law Relating To Family Courts",
        description: "n this commentary sufficient care has been taken to see that therelevant decisions concerned with this subject are placed atappropriate places.",
        price: 1000.00,
        image: "../images/law/l2.jpg",
        author: "Justice P.S Narayana",
        language: "English",
        modal_no: 44,
        category: "law"

    }),new Product({
        product_id: 503,
        title: "Prohibition of Benami Transactions",
        description: "It tries to compare the powers of the authorities under the benami transactions (prohibition) Amendment Act, 2016 and the income-tax Act, 1961 and gives the similarities and variations under both the legislations in respect of powers of various authorities.",
        price: 565.00,
        image: "../images/law/l3.jpg",
        author: "Radhakrishna Sreepada",
        language: "English",
        modal_no: 45,
        category: "law"
        
    }),new Product({
        product_id: 504,
        title: "Introduction to Business Law",
        description: "The bestselling textbook in this subject area, Introduction to Business Law introduces students to the core legal areas relevant to the world of business and work. ... At the end of each chapter students can practise applying their knowledge and legal skills by answering sample essay and problem questions.",
        price: 789.00,
        image: "../images/law/l4.jpg",
        author: "Lucy Jones",
        language: "English",
        modal_no: 46,
        category: "law"

    }),new Product({
        product_id: 505,
        title: "The Law of Domestic Relations in the united states ",
        description: "Includes citations to statutes and case law from all states, indicating the similarities and differences among them so you can cite opinions from neighboring states.",
        price: 400.00,
        image: "../images/law/l5.jpg",
        author: " Homer Clark",
        language: "English",
        modal_no: 47,
        category: "law"

    }),new Product({
        product_id: 506,
        title: "The Labour Constitution",
        description: "It constructs a framework for analysing labour laws, labour markets, and institutions, to allow scholars to critique the current policy climate and, in light of the ongoing expansion of the global labour market, assess the impact of the narrowing .",
        price: 390.00,
        image: "../images/law/l6.jpg",
        author: "Ruth Dukes",
        language: "English",
        modal_no: 48,
        category: "law"

    }),new Product({
        product_id: 507,
        title: "Criminal Manual",
        description: "Criminal Manual (Cr. P.C, I.P.C. & Evidence) is a handbook that comprises of Code of Criminal Procedure, 1973 as amended by The Criminal Law (Amendment) Act, 2013 (13 of 2013). ... It includes guide to criminal pleadings.",
        price: 558.00,
        image: "../images/law/l7.jpg",
        author: "Justice M.R. Mallok",
        language: "English",
        modal_no: 49,
        category: "law"

    }),new Product({
        product_id: 508,
        title: "Constitution of India",
        description: "The Constitution of India consists of seven chapters, an introduction and a conclusion. It traces the development of ideas and concepts in the making of the Constitution.",
        price: 990.00,
        image: "../images/law/l8.jpg",
        author: "Durga Das Basu",
        language: "English",
        modal_no: 50,
        category: "law"
    }),


    new Product({
        product_id: 601,
        title: "Universal Rules For Capitalism",
        description: "A provocative account of capitalism's rise to global dominance and, as different models of capitalism vie for world leadership, a look into what the future may hold. We are all capitalists now. For the first time in human history, the globe is dominated by one economic system.",
        price: 500.00,
        image: "../images/business/b1.jpg",
        author: "Timothy Perry",
        language: "English",
        modal_no: 51,
        category: "business"

    }), new Product({
        product_id: 602,
        title: "Business Advice",
        description: "Basic idea about business",
        price: 430.00,
        image: "../images/business/b2.jpg",
        author: " Kathy Mcguire",
        language: "English",
        modal_no: 52,
        category: "business"
    
    }), new Product({
        product_id: 603,
        title: "Success is Not Measured By Money",
        description: "",
        price: 345.00,
        image: "../images/business/b3.jpg",
        author: "Vicky Cardenas",
        language: "English",
        modal_no: 53,
        category: "business"

    }), new Product({
        product_id: 604,
        title: "Quantity is Everybody's Business",
        description: "",
        price: 240.00,
        image: "../images/business/b4.jpg",
        author: "Joan E. Gebhardt",
        language: "English",
        modal_no: 54,
        category: "business"

    }), new Product({
        product_id: 605,
        title: "Zero to One",
        description: "Peter Thiel has built multiple breakthrough companies, and Zero to One shows how. Zero to One is the first book any working or aspiring entrepreneur must read—period.Zero to One is an important handbook to relentless improvement for big companies and beginning entrepreneurs alike",
        price: 435.00,
        image: "../images/business/b5.jpg",
        author: "Peter Thiel",
        language: "English",
        modal_no: 55,
        category: "business"

    }), new Product({
        product_id: 606,
        title: "Set For Life ",
        description: "By layering philosophy with practical knowledge, Set for Life gives young professionals the confidence they need to conquer their financial goals early in life. Building wealth is always possible, even while working full-time, earning a median income, and making up for a negative net worth.",
        price: 780.00,
        image: "../images/business/b6.jpg",
        author: " Scott Trench",
        language: "English",
        modal_no: 56,
        category: "business"

    }), new Product({
        product_id: 607,
        title: "The horizon of Managment ",
        description: "",
        price: 567.00,
        image: "../images/business/b7.jpg",
        author: "Gregory Garrion",
        language: "English",
        modal_no: 57,
        category: "business"

    }), new Product({
        product_id: 608,
        title: "15 Invaluable Laws Of Growth",
        description: "he 15 Invaluable Laws of Growth: Live Them and Reach Their Full Potential by John Maxwell. EP Main Takeaway: Growth should be intentional and aligned with your passion and purpose. If not, you run the risk of being busy without meaning.",
        price: 890.00,
        image: "../images/business/b8.jpg",
        author: "John C. Maxwell",
        language: "English",
        modal_no: 58,
        category: "business"
    })
 
];
module.exports = products;


