AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Marketing Intern",
    cardImage: "assets/images/experience-page/permatabank.jpeg",
    place: "PermataBank",
    time: "(July 2022 - present)",
    desp: "<li>Request and monitoring Key Visual for Publications such as Typo and Brand Positioning.</li> <li>Request and Monitoring Landing Page.</li> <li>Bring the most referrals to PermataME as Campus Ambassador.</li>",
  },
  {
    title: "Marketing",
    cardImage: "assets/images/experience-page/mushroomallowlogo.jpg",
    place: "Mushroomallow Studio",
    time: "(July 2022 - present)",
    desp: "<li>Award winning studio games such as Indie Rise Winner 2022 (New Challenger) and part of Indigo Game Startup Incubation Batch 5.</li><li> Manage Social Media especially Instagram by creating content and gain followers from 0 to 100+.</li>",
  },
  {
    title: "Marketing Intern",
    cardImage: "assets/images/experience-page/kalibrrlogo2.png",
    place: "Kalibrr",
    time: "(February - July 2022)",
    desp: "<li>Trusted to lead the Tik Tok growth to from 100+ viewers to more than 100K+ viewers.</li><li>Managing Social Media campaign on #Ngabuburrit events on Ramadan day with various speakers from Consulting, FMCG, and more. Reach to more than 10K viewers.</li><li>Initiate Career Intensive Program and Virtual Experience as Event Activation and Experience. Finished a series of 7 free webinars called Kalibrr Belajarr (Kalibrr learrning) about Management Trainees. We got 9,975 unique applications, three happy clients as speakers, and +/- 15k total session participants. The team also launched a Telegram support group named KaliFam - Freshgrads and now we have 3,1K participants. We evaluated the impact we made and on average participants scored 4.8/5 </li><li>Reduce the risk of spam comment on YouTube Live Streaming. Initiate Social Media Competition with reach of more than 100,000 viewers</li>",
  },
  {
    title: "Business Development & Marketing Intern",
    cardImage: "assets/images/experience-page/bitlabslogo.jpeg",
    place: "Bitlabs",
    time: "(February - November 2022)",
    desp: "<li>Connected end-to-end partnership with Mentor for Prakerja self-paced learning, an Intensive Career Accelerator program, and UMKM. Assess and manage content planning for Bitlab's official Instagram account.</li>",
  },
  {
    title: "Marketing Intern for Nestle Pure Life",
    cardImage: "assets/images/experience-page/akashalogo.jpg",
    place: "Akasha Wira International",
    time: "(October 2021 - January 2022)",
    desp: "<li>Connected end-to-end partnership with Mentor for Prakerja self-paced learning, an Intensive Career Accelerator program, and UMKM. Assess and manage content planning for Bitlab's official Instagram account.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Organization Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "ASEAN-Australia Strategic Youth Partnership",
    cardImage: "assets/images/experience-page/aasyplogo.png",
    description:
      "Chief Marketing Officer 2021/2022 - Raise the website reach to 83,7% with average session time to 2 minutes",
  },
  {
    title: "ASEAN Youth Interfaith Camp",
    cardImage: "assets/images/experience-page/kemenporalogo.jpeg",
    description:
      "Delegate (2021), Committee (2022), Help ASEAN participants to create and implement a social project with Website",
  },
  {
    title: "Global Waste Cleaning Network",
    cardImage: "assets/images/experience-page/gwcnlogo.jpeg",
    description:
      "Senior Membership Officer (2020) via United Nations Volunteer, reachout to Organization to being a GWCN member",
  },
  {
    title: "WateryNation",
    cardImage: "assets/images/experience-page/waterynationlogo.webp",
    description:
      "Founder (2020-present), Top 30 in IDEATHONESIA 2021, TEMALI Incubation, Ruang Merdeka Inspirasi, Top 20 Growth Stage Jakbee Social Innovation Awards, Catalyst Changemaker Lab",
  },
  {
    title: "Indie Games Group Indonesia",
    cardImage: "assets/images/experience-page/iggilogo.jpeg",
    description:
      "Organizer (2022), Helping with GameJam+ Event",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Work Gallery

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "PermataBank",
    subtitle: "Marketing Intern",
    image: "assets/images/experience-page/permatabankmap.jpeg",
    desp: "Top referrals Campus Ambassador.",
  },
  {
    title: "Bitlabs",
    subtitle: "Business Development & Marketing Intern",
    image: "assets/images/experience-page/bitlabsgathering.jpeg",
    desp: "My first Gathering with Bitlabs team.",
  },
  {
    title: "Akasha Wira International",
    subtitle: "Marketing Intern",
    image: "assets/images/experience-page/akashafoto.jpeg",
    desp: "My last day in Akasha, I was helping Nestle Pure Life campaign.",
  },
  {
    title: "Ikatan Pranata Humas Indonesia",
    subtitle: "Content Creator Intern",
    image: "assets/images/experience-page/iprahumascert.png",
    desp: "Create caption for publications.",
  },
  {
    title: "Kalibrr",
    subtitle: "Marketing Intern",
    image: "assets/images/experience-page/kalibrrteam.png",
    desp: "Kalibrr is super blessed to have Arfi as part of our Marketing team. Arfiana is full of energy, ideas, and initiatives. She can complete her work quickly with very high work results. Arfiana also has a very good working attitude and is always friendly and polite to all colleagues Its a pleasure to know and work with such a bright young talent. We wish you all success in your future endeavors! -Permata Indwita",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
