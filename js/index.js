const rowElem = document.querySelector(".service-row");
const partnerElem = document.querySelector(".partner-row");
const testimonialElem = document.querySelector(".testimonial-row");

let services = [
  {
    count: 1,
    title: "Composite & Timber Decks",
    icon: "./images/icon/hammer-1.png",
    description:
      "We provide a design, supply and install experience for your outdoor entertaining space. From our on-site initial consultation and sample display and discussion, through to the finished handover.",
  },
  {
    count: 2,
    title: "External Cladding & Facades",
    icon: "./images/icon/trowel.png",
    description:
      "New build, extension or renovation - We specialise in making the outside of your home stand out from the crowd. Covering all types of cladding including James Hardie, Weathertex and many others. We have the facade for you.",
  },
  {
    count: 3,
    title: `Kitchen, Bathroom & Laundry Renovations`,
    icon: './images/icon/renovation.png',
    description:
      "Whether you’re looking to renovate, extend or complete major changes to your existing home - MBG has you covered from start to finish, providing guidance and an in depth explanation.",
  },
  {
    count: 4,
    title: "Insulated & Standard Pergolas",
    icon: "./images/icon/architecture.png",
    description:
      "Whether you’re looking at a timeless Timber feature or a modern, no maintenance alternative - We have the solution and the design to suit your dream.",
  },
  {
    count: 3,
    title: "Commericial Decking Services",
    icon: "./images/icon/hammer.png",
    description:
      "General carpentry works and jobs across both new and existing homes, internal and external. Frame stage through Fixout.",
  }
];

const partners = [
  {
      image: './images/our-partners/strong.png',
      title: 'Simpson Strong-Tie',
  },
  {
      image: './images/our-partners/ekodeck.png',
      title: 'ECKODECK',
  },
  {
      image: './images/our-partners/tayco.png',
      title: 'TAYCO ALUMINIUM',
  },
  {
      image: './images/our-partners/clickdeck.png',
      title: 'CLICKDECK',
  },
  {
      image: './images/our-partners/safestyle.png',
      title: 'SafeStyle',
  },
  {
      image: './images/our-partners/N01.png',
      title: 'NO1 ROOFING & BUILDING SUPPLIES',
  },
  {
      image: './images/our-partners/premier.png',
      title: 'Premier Tapes & Packaging',
  },
  {
      image: './images/our-partners/Mitre_Logo.png',
      title: 'TRADIFY',
  },
]

const testimonials = [
  {
      reviewername: 'Volkan Kaya',
      position: 'Ponds, NSW',
      review: 'Team has done an excellent job to finish our incomplete decking project. They attacked the job and completed in amazingly 3 days. No time wasted for material shortages and very good clean-up at the end. Besides they created multiple values for us along the way.'
  },
  {
      reviewername: 'Belinda Byway',
      position: 'Ruse, NSW',
      review: 'Highly recommend Nathan and his team. Nathan listened to what I wanted for my new car port and they went above and beyond and did a superb job. Thank you again Nathan im absolutely stoked with the result.'
  },
  {
      reviewername: 'Bev Bush',
      position: 'Camden, NSW',
      review: 'Absolute dream to deal with, on time and extremely professional. Nathan and his team are expert craftsmen.'
  },
  {
      reviewername: 'Amanda',
      position: 'Carnes Hill, NSW',
      review: 'We asked these guys for a composite deck and pergola for our newly built house. They have created an amazing outdoor space that we love and will make memories in for many years to come. Nathan’s knowledge of products and recommendations for those that would give us the look we were after was the reason they won our quote.'
  },
  {
      reviewername: 'Peter',
      position: 'Ruse, NSW',
      review: "From the very start, Nathan from Monumental Building came in with a welcoming and positive energy. I received several quotes that were extremely overpriced and put doubt in my mind I would be able to achieve what I was after with the budget I had but luckily I was able to meet someone like Nathan. As this was the first time I've ever done any sort of renovation work, Nathan was kind enough to provide me with as much help and advice he could offer. He went above and beyond to help me achieve the goals I was after and did a fantastic carpentry job. His level of craftsmen and professionalism cannot be measured. I highly recommend anyone to use Nathan for all their renovation works."
  }
]

function main() {
  services.map((service, index) => {
    console.log(service.icon)
    rowElem.innerHTML += `
    <div class="col-lg-4 col-md-6" key=${index}>
        <div class="mt-icon-box-wraper m-b30">
            <div class="relative icon-count-2 bg-gray p-a30 p-tb50">
                <span class="icon-count-number">${service.count}</span>
                <div class="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                    <span class="icon-cell"><img src="${service.icon}"
                            alt=""></span>
                </div>
                <div class="icon-content">
                    <h4 class="mt-tilte m-b25">${service.title}</h4>
                    <p>${service.description}</p>
                    <a href="services.html" class="site-button-link"
                        data-hover="Read More">Read More <i
                            class="fa fa-angle-right arrow-animation"></i></a>
                </div>
            </div>
        </div>
    </div>
    `;
  });
  testimonials.map((review, index) => {
    testimonialElem.innerHTML += `
    <div class="item" key=${index}>
        <div class="testimonial-2 m-a30 hover-animation-1">
            <div class=" block-shadow bg-white p-a30">
                <div class="testimonial-detail clearfix">
                    <h4 class="testimonial-name m-b5">${review.reviewername} -</h4>
                    <span class="testimonial-position">${review.position}</span>
                </div>
                <div class="testimonial-text">
                    <span class="fa fa-quote-right"></span>
                    <p> ${review.review}</p>
                </div>
            </div>
        </div>
    </div>
    `
  })
  partners.map((partner, index) => {
    partnerElem.innerHTML += `
    <div class="col-lg-4 col-md-6" key=${index}>
        <div class="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
            <div class="mt-post-media mt-img-overlay7">
                <a href=""><img src=${partner.image} alt=""></a>
            </div>
            <div class="mt-post-info p-a30">
                <div class="post-overlay-position">
                    <div class="mt-post-title ">
                        <h4 class="post-title m-b0">${partner.title}</h4>
                    </div>
                    <div class="readmore-line">
                        <span><a href="blog-grid.html" class="site-button-link"
                                data-hover="Read More">Read More <i
                                    class="fa fa-angle-right arrow-animation"></i></a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>`
  })
  
}

main();
