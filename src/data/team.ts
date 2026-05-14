import { IMAGES } from './assets';

export interface TeamMember {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  image: string;
  linkedin: string;
  honorText: string;
  honorTextEn: string;
  category: 'core' | 'advisor';
}

export const teamMembers: TeamMember[] = [
  {
    id: "ninad-chavan",
    name: "निनाद निशिकांत चव्हाण",
    nameEn: "Ninad Nishikant Chavan",
    role: "क्रिएटिव्ह आर्किटेक्ट",
    roleEn: "The Creative Architect",
    image: IMAGES.team.ninad,
    linkedin: "https://www.linkedin.com/in/ninadchavan28/",
    honorText: "स्वराज्यरत्न चळवळीच्या उभारणीत आणि व्यवस्थापनात निनाद चव्हाण यांचे योगदान अमूल्य आहे. त्यांच्या नेतृत्वात संस्थेने अनेक ऐतिहासिक उपक्रम यशस्वीपणे राबवले आहेत.",
    honorTextEn: "Ninad Chavan's contribution to the building and management of the SwarajyaRatna movement is invaluable. Under his leadership, the organization has successfully implemented many historical initiatives.",
    category: 'core'
  },
  {
    id: "sahil-bhame",
    name: "साहिल विजय भामे",
    nameEn: "Sahil Vijay Bhame",
    role: "हिस्टोरिकल एंथुझियास्ट",
    roleEn: "The Historical Enthusiast",
    image: IMAGES.team.sahil,
    linkedin: "#",
    honorText: "साहिल भामे यांच्या कलात्मक दृष्टीकोनामुळे स्वराज्यरत्नचे सादरीकरण अधिक प्रभावी झाले आहे. त्यांच्या कलेतून छत्रपती शिवरायांचा इतिहास जिवंत होतो.",
    honorTextEn: "Sahil Bhame's artistic vision has made SwarajyaRatna's presentation more effective. Chhatrapati Shivaji's history comes alive through his art.",
    category: 'core'
  },
  {
    id: "hrishikesh-tambe",
    name: "हृषीकेश जयंतीलाल तांबे",
    nameEn: "Hrishikesh Jayantilal Tambe",
    role: "व्हिजनरी लीडर",
    roleEn: "The Visionary Leader",
    image: IMAGES.team.tambe,
    linkedin: "#",
    honorText: "ऋषिकेश तांबे यांनी स्वराज्यरत्नच्या विविध कार्यक्रमांचे नियोजन आणि अंमलबजावणी अत्यंत शिस्तबद्ध पद्धतीने केली आहे.",
    honorTextEn: "Hrishikesh Tambe has planned and implemented various SwarajyaRatna programs in a very disciplined manner.",
    category: 'core'
  },
  {
    id: "dhaval-thaware",
    name: "धवल नरेश ठवरे",
    nameEn: "Dhaval Naresh Thaware",
    role: "स्ट्रॅटेजिक प्लॅनर",
    roleEn: "The Strategic Planner",
    image: IMAGES.team.dhaval,
    linkedin: "#",
    honorText: "धवल ठवरे यांनी स्वराज्यरत्नच्या तंत्रज्ञान आणि डिजिटल प्रसारात महत्त्वाची भूमिका बजावली आहे.",
    honorTextEn: "Dhaval Thaware has played a key role in SwarajyaRatna's technological and digital dissemination.",
    category: 'core'
  },
  {
    id: "prathamesh-shivpuje",
    name: "प्रथमेश विलास शिवपूजे",
    nameEn: "Prathamesh Vilas Shivpuje",
    role: "कम्युनिटी बिल्डर",
    roleEn: "The Community Builder",
    image: IMAGES.team.shivpuje,
    linkedin: "#",
    honorText: "प्रथमेश शिवपूजे यांनी स्वराज्यरत्नच्या सामाजिक उपक्रमांचे प्रभावीपणे समन्वय साधला आहे.",
    honorTextEn: "Prathamesh Shivpuje has effectively coordinated SwarajyaRatna's social initiatives.",
    category: 'core'
  },
  {
    id: "tejas-chikane",
    name: "तेजस नवनाथ चिकणे",
    nameEn: "Tejas Navnath Chikane",
    role: "टेक विझार्ड",
    roleEn: "The Tech Wizard",
    image: IMAGES.team.chikane,
    linkedin: "#",
    honorText: "तेजस चिकाणे यांनी आपल्या अभिनयाद्वारे स्वराज्यरत्नचा वारसा जनमानसात पोहोचवला आहे.",
    honorTextEn: "Tejas Chikane has conveyed SwarajyaRatna's heritage to the people through his acting.",
    category: 'core'
  },
  {
    id: "sarthak-mali",
    name: "सार्थक सुरेश माळी",
    nameEn: "Sarthak Suresh Mali",
    role: "फायनान्शिअल स्ट्रॅटेजिस्ट",
    roleEn: "The Financial Strategist",
    image: IMAGES.team.sarthak,
    linkedin: "#",
    honorText: "सार्थक माळी यांनी शिवकालीन इतिहासाचे सखोल संशोधन करून स्वराज्यरत्नच्या साहित्यात भर घातली आहे.",
    honorTextEn: "Sarthak Mali has enriched SwarajyaRatna's literature by conducting in-depth research of the Shivaji era.",
    category: 'core'
  },
  {
    id: "abhijeet-auti",
    name: "अभिजित औटी",
    nameEn: "Abhijeet Auti",
    role: "मुख्य मार्गदर्शक (प्राचार्य, TCOER)",
    roleEn: "Chief Guide (Principal, TCOER)",
    image: IMAGES.team.auti,
    linkedin: "#",
    honorText: "अभिजित औटी सर टीसीओईआरचे प्राचार्य आहेत आणि त्यांनी स्वराज्यरत्नच्या सुरुवातीपासून विविध मार्गांनी मोठी मदत केली आहे. त्यांचे मार्गदर्शन संस्थेच्या प्रगतीसाठी अत्यंत मोलाचे आहे.",
    honorTextEn: "Abhijeet Auti Sir is the Principal at TCOER and has helped SwarajyaRatna in various ways since its inception. His guidance is invaluable for the progress of the organization.",
    category: 'advisor'
  },
  {
    id: "jj-dhule",
    name: "जे. जे. धुळे सर",
    nameEn: "J. J. Dhule Sir",
    role: "मुख्य मार्गदर्शक",
    roleEn: "Main Guide & Supporter",
    image: IMAGES.team.dhule,
    linkedin: "#",
    honorText: "जे. जे. धुळे सरांचे मार्गदर्शन स्वराज्यरत्नच्या प्रगतीत अत्यंत मोलाचे आहे.",
    honorTextEn: "J. J. Dhule Sir's guidance is invaluable in the progress of SwarajyaRatna.",
    category: 'advisor'
  },
  {
    id: "rutvik-kulkarni",
    name: "ऋत्विक कुलकर्णी",
    nameEn: "Rutvik Kulkarni",
    role: "इतिहास सल्लागार",
    roleEn: "History Advisor",
    image: IMAGES.team.rutvik,
    linkedin: "#",
    honorText: "ऋत्विक कुलकर्णी यांनी ऐतिहासिक तथ्यांच्या अचूकतेसाठी मोलाचे सहकार्य केले आहे.",
    honorTextEn: "Rutvik Kulkarni has provided valuable co-operation for the accuracy of historical facts.",
    category: 'advisor'
  }
];
