console.log("app")
var navbarArr=[
    {
        id:"0",
        title:"Home",
        link:"index.html"
    },
    {
        id:"1",
        title:"By the Numbers",
        link:"stats.html"
    },
    {
        id:"2",
        title:"Existing measures",
        link:"measure.html"
    },
    {
        id:"3",
        title:"Why",
        link:"why.html"
    },
    {
        id:"4",
        title:"In the Press",
        link:"news.html"
    },
    // {
    //     id:"5",
    //     title:"About",
    //     link:"about.html"
    // }
]

var causesCardsArr=[
    {
        id:"cause311",
        title:"Lack of Exercise",
        text:"When we consume large amount of calories without burning them off through physical activities, the surplus energy will be stored in body as fat which causes obesity.",
        link:"causeex.html",
        img:"./picsrc/lackofexercise.jpg",
        btn:"click"
    },
    {
        id:"cause312",
        title:"Lack of Sleep",
        text:"Sleep deprivation alters the production of hormones that regulate your appetite. You will feel hungry more often when you lack sleep and hence consume more calories.",
        link:"https://www.sleepfoundation.org/physical-health/obesity-and-sleep#:~:text=Sleep%20loss%20creates%20a%20hormone,creates%20increased%20feelings%20of%20hunger.",
        img:'./picsrc/lackofsleeppic.jpg',
        btn:"click"
    },
    {
        id:"cause313",
        title:"Unhealthy Diet",
        text:"When people indulge themselves in fast foods which are fat in sugar, fats, and salt, this leads them directly to increasing weight.",
        link:"https://www.cdc.gov/chronicdisease/resources/publications/factsheets/nutrition.htm",
        img:"./picsrc/unhealthydietpic.jpg",
        btn:"click"
    }
]

var solutionsCardsArr=[
    {
        id:"411",
        title:"Drink more water",
        text:"Sufficient water intake helps to detox our body as it increases metabolism.",
        link:"https://www.insider.com/drinking-water-to-lose-weight#:~:text=Drinking%20water%20helps%20you%20lose,liters%20of%20water%20per%20day.",
        
    },
    {
        id:"412",
        title:"Get good quality sleep",
        text:"When you sleep enough, your organs have enough time to process the toxins in your body. ",
        link:"https://www.sleepfoundation.org/physical-health/weight-loss-and-sleep#:~:text=Getting%20adequate%2C%20quality%20sleep%20is,17%20and%20encourage%20overeating18.",
    },
    {
        id:"413",
        title:"Do more physical exercises",
        text:"Adequate amount of exercise can burn off the excess calories in your body.",
        link:"https://www.sch-culvercity.com/news/how-to-burn-more-calories-than-youre-eating/#:~:text=One%20theory%20is%20that%20the,about%20one%20pound%20per%20week.",
    },
    {
        id:"414",
        title:"Students' solutions",
        text:"Some brief introduction for the solutions we designed to counter obesity.",
        link:"sol.html"
    }
]

var BytheNumbersArr=[
    {
        id:"111",
        title:"Obesity Rate in Singapore",
        text:"In Singapore, a developed metropolitan, around 30% of Singaporean are obese. The rate is constantly rising each year due to the increasing connectivity of the public transport and changing lifestyle. ",
        link:"https://www.moh.gov.sg/news-highlights/details/obesity-trend-and-programmes#:~:text=1%20Based%20on%20the%202017,to%2074%20years%20was%206.9%25."
    },
    {
        id:"112",
        title:"Government Expenditure",
        text:"One may think that obesity is merely a one-man fight but in reality, it affects the country as a whole. In 2016 alone, obesity itself cost Singapore 2.77 billion dollars and this naturally wavered or economy. This is about one third of the total healthcare spending of the government that same year.",
        link:"https://sph.nus.edu.sg/2017/06/singapore-incurs-third-highest-obesity-costs-in-the-region/"
    },
    {
        id:"113",
        title:"Graph",
        text:"A graph that shows Singapore obesity rate",
        link:"https://data.worldobesity.org/country/singapore-192/#data_overview"
    }
]
var existingmeasuresArr=[
    {
        id:"121",
        title:"Healthy Meals in Schools Programme",
        text:"The Healthy Meals in Schools Programme (HMSP) promotes healthy eating. The Ministry of Health and Ministry of Education collaborate to regulate canteen stalls to sell low sugar, fat, and salt foods and beverages to reduce childhood obesity.",
        link:"https://www.hpb.gov.sg/schools/school-programmes/healthy-meals-in-schools-programme"
    },
    {
        id:"122",
        title:"Trim and Fit Programme",
        text:"This programme is implemented among primary, secondary, and pre-university schools in Singapore aims to reduce obesity  among students. It uses multidisciplinary approach that makes obese students to get more physical exercises.",
        link:"https://en.wikipedia.org/wiki/Trim_and_Fit#:~:text=The%20Trim%20and%20Fit%20(TAF,intense%20physical%20exercise%20and%20activities."
    },
    {
        id:"123",
        title:"Sugar Ban",
        text:"Singapore bans all types of advertisements for sugar-sweetened beverages with high level of sugar.",
        link:"https://www.straitstimes.com/singapore/health/high-sugar-drinks-to-carry-unhealthy-label-on-pack-advertisements-banned-next-year"
    }
]
var whyArr=[
    {
        id:"131",
        title:"Type 2 Diabetes",
        text:"Type 2 diabetes affects many major organs, including your heart, blood vessels, nerves, eyes and kidneys.A lot of potential complications and comorbidities might happen such as sleep apnea, heart and blood vessel disease and kidney diease.",
        link:"https://vitagene.com/blog/does-obesity-cause-type-2-diabetes/"
    },
    {
        id:"132",
        title:"Heart Disease",
        text:"Obesity can lead to fatty material accumulate in your arteries. In the end, if the arteries are damged and clogged, it can cause heart attack.",
        link:"https://www.pennmedicine.org/updates/blogs/metabolic-and-bariatric-surgery-blog/2019/march/obesity-and-heart-disease"
    },
    {
        id:"133",
        title:"Hypertension",
        text:"Excess weight gain, especially when associated with increased visceral adiposity, is a major cause of hypertension, accounting for 65% to 75% of the risk for human primary (essential) hypertension.",
        link:"https://www.healthgrades.com/right-care/weight-control-and-obesity/the-obesity-and-high-blood-pressure-connection#:~:text=When%20you're%20overweight%20or,your%20blood%20pressure%20to%20rise."
    }
]
var inthepressArr=[
    {
        id:"141",
        title:"The problem with obesity still persists in Singapore.",
        text:"Obesity among Singaporeans remains a problem despite headways made in war on diabetes: Ong Ye Kung",
        link:"https://www.todayonline.com/singapore/obesity-among-singaporeans-remains-problem-despite-headways-made-war-diabetes-ong-ye-kung"
    },
    {
        id:"142",
        title:"How COVID pandemic worsen the situation",
        text:"Rise in cases of overweight kids in Singapore during Covid-19 pandemic",
        link:"https://www.straitstimes.com/life/rise-in-cases-of-overweight-kids-in-singapore-during-the-pandemic"
    },
    {
        id:"143",
        title:"The obesity rate is constantly growing over the decade.",
        text:"Obesity rate rises to highest level since 2010; MOH urges public to exercise and adopt healthier diet",
        link:"https://www.channelnewsasia.com/singapore/obesity-rate-rises-highest-level-2010-moh-urges-public-exercise-and-adopt-healthier-diet-2322321#:~:text=Among%20its%20findings%2C%20the%20survey,data%20on%20obesity%20was%20collected."
    },
    {
        id:"144",
        title:"Know more about other countries' obesity rate",
        text:"Obesity Rates by Country 2021",
        link:"https://worldpopulationreview.com/country-rankings/obesity-rates-by-country"
    }
]
var about
var studentsolArr=[
    {
        id:"4141",
        title:"'Eat Your Greens'Application",
        text:"This application allows users to get Auto-generated nutritional plan with support of registered dietitian nutritionists. It also creates a supportive healthy-eating community for participants. A 365 days checklist is provided for the users to allow them to self-check whether they are eating healthily or not.",
        img:"./picsrc/greenspic.jpg"
    },
    {
        id:"4142",
        title:"VR Motivator",
        text:"this product is to motivate adolescents to find the will to start or continue staying committed to exercise by making exercise more entertaining through games and helping them find sports partner; they have the option of exercising within their own comfort space, especially if they are self-conscious of being in public areas.",
        img:"./picsrc/VRpic.jpg"
    },
    {
        id:"4143",
        title:"Healthival",
        text:"The objective of Healthival is to get more exposure for healthier food choices and encourage Singaporeans to consume healthier choices.",
        img:"./picsrc/carnivalpic.jpg"
    }
]
var causeexArr=[
    {
        id:"3111",
        title:'lack of motivation to stay committed to exercise',
        text:'We conducted a survey among our peers to find out the reason why they lack exercise. To out surprise, the majority said that they are bored by exercise and hence lack the motivation to stay committed. It is understandable because imagine yourself just starting to exercise, you have to do the same moves over and over again, only to see little visible improvement. Just by giving it a thought can already make you feel worn out, not to mention how many thousands repetitions more you need to do to obtain greater progress.',
        img:'https://picsum.photos/40/40',
        link:'https://docs.google.com/forms/d/1HWfePjScuuI7YrVBl0roN7NgOq7TSfoP2qIFA5yh2cA/edit?chromeless=1#responses',
        btn:'more'
    }
]
var mapLinkArr = [
    {
        link: "https://maps.google.com/maps?q=singapore%20Dosirak&t=&z=13&ie=UTF8&iwloc=&output=embed",
        title: "Dosirak",
        id: "map-1"
    },
    {
        link: "https://maps.google.com/maps?q=singapore%20Aloha%20Poke&t=&z=13&ie=UTF8&iwloc=&output=embed",
        title: "Aloha Poke",
        id: "map-2"
    },
    {
        link: "https://maps.google.com/maps?q=singapore%20Healthy%20soba%20IKI&t=&z=13&ie=UTF8&iwloc=&output=embed",
        title: "Healthy soba IKI",
        id: "map-3"
    },
    {
        link: "https://maps.google.com/maps?q=singapore%20Lean%20Bento&t=&z=13&ie=UTF8&iwloc=&output=embed",
        title: "Lean Bento",
        id: "map-4"
    },
    {
        link: "https://maps.google.com/maps?q=singapore%20Mahota&t=&z=13&ie=UTF8&iwloc=&output=embed",
        title: "Mahota",
        id: "map-5"
    }
]