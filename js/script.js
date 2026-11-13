
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* =========================================
   NETFLIX — THE DARSHIKA COLLECTION
   ========================================= */

const episodes = {
  story: {
    kicker: "NETFLIX ORIGINAL · THE FIRST CHAPTER",
    title: "It Started With A Selfie.",
    meta: "6 DECEMBER 2024 · FIRST SEMESTER · OUR STORY",
    subtitle: "A random photograph. An unexpected friendship.",
    image: "assets/images/first-selfie.jpg",
    for: "For the girl standing on the extreme left, and the boy taking the selfie, who had no idea what this friendship would become.",
    paragraphs: [
      "December 6, 2024.",
      "First semester almost over tha. A normal college day, normal friends, normal photographs. And then there was this picture.",
      "The boy taking the selfie and the girl standing on the extreme left probably had absolutely no idea what was coming next.",
      "We didn't know we'd become such good friends. We didn't know there would be assignments, food exchanges, random conversations, endless gossip and so many memories.",
      "We didn't know that someday we'd look back at this photograph and smile.",
      "But here we are, Bhondu. From strangers in the first semester to this little friendship of ours. And honestly, I'm really glad this happened.",
      "Tere aane se pehle theek thaa, Ab murjhaya jaise koi phool ho. Banke musibat peeche padi hai (do not take it serious justttt joking devi ji"
    ],
    imageAfterText: {
      src: "assets/images/first-selfie.jpg",
      alt: "Our first selfie from December 6, 2024"
    },
    music: "Locha-E-Ulfat",
    audio: "assets/audio/locha-e-ulfat.mp3",
    audioLabel: "Play our beginning soundtrack (Puura Suuna)"
  },

  hurt: {
    kicker: "EPISODE 01 · A LITTLE REMINDER",
    title: "Not Everyone Deserves Your Energy.",
    meta: "COMFORT · SELF-WORTH · YOU MATTER",
    subtitle: "Hey Bhondu, read this slowly. You deserve kindness, especially from yourself.",
    image: "assets/images/yellow-outfit.png",
    for: "For the days when someone's words or actions make you question your own worth.",
    paragraphs: [
      "Hey Bhondu,",
      "I know sometimes people disappoint you. Sometimes the people you expect the most from are the ones who end up hurting you.",
      "But listen, someone's inability to treat you right doesn't mean you're difficult to love or that you aren't enough.",
      "You don't have to keep explaining your worth to people. You deserve the same care, effort and respect that you give others.",
      "Please don't let one bad experience change the beautiful person you are. You can be upset, you can take your time, and you can choose distance when you need it.",
      "And remember: you don't have to earn basic kindness. You already deserve it."
    ],
    video: "7nt7c6PB9fQ",
    videoLabel: "A little reminder for you"
  },

  friends: {
    kicker: "EPISODE 02 · FRIENDSHIP ORIGINAL",
    title: "Hey, Look Around. You've Got Us.",
    meta: "FRIENDSHIP · MEMORIES · YOUR PEOPLE",
    subtitle: "Okay, first of all, BHONDU! Who told you that you don't have good friends?",
    image: "assets/images/blue-dress-flowers.jpeg",
    for: "For the moments when you feel like nobody really gets you or genuinely shows up.",
    paragraphs: [
      "Okay, first of all, BHONDU! Who told you that you don't have good friends?",
      "Remember that there are people who genuinely enjoy your existence. People who want to hear your random stories, your stupid jokes, your problems and even your unnecessary drama.",
      "And hey, remember 6 December 2024?",
      "Ek random selfie thi. Kisi ko nahi pata tha ki aage kya hone wala hai. I certainly didn't know that the girl standing on the left would become someone whose little things I'd remember and whose happiness would matter this much to me.",
      "You don't need a hundred people. Sometimes a few genuine ones are enough. Look for the people who make you feel safe, heard and accepted.",
      "And I'm really glad we became friends. So whenever you forget, come back to this episode. Okay?"
    ],
    video: "24CEKsbIFao",
    videoStart: 21,
    videoLabel: "A reminder of good friendship"
  },

  tough: {
    kicker: "EPISODE 03 · SELF-CARE SPECIAL",
    title: "Soft Days Are Allowed.",
    meta: "SELF-CARE · REST · NO PRESSURE",
    subtitle: "You don't have to be strong every single day.",
    image: "assets/images/maroon-saree.jpeg",
    for: "For the uncomfortable, exhausting days when your body and mind both need a little extra care.",
    paragraphs: [
      "Hey Darshika,",
      "Some days are just uncomfortable. Some days your body doesn't cooperate, your mood is all over the place and even the smallest things feel exhausting.",
      "And during those days, please don't feel guilty about slowing down.",
      "Rest when you need to. Eat something nice, drink water, get comfortable and give yourself some time. You don't have to pretend that everything is fine.",
      "If you need help, ask for it. If you need company, reach out to someone you trust. You deserve care without having to explain or justify how difficult a day feels.",
      "No productivity targets today, okay? Just take care of yourself. One little thing at a time."
    ],
    video: "Gu-O6Tjdjbs",
    videoStart: 161,
    videoLabel: "A little company for a difficult day"
  },

  alone: {
    kicker: "EPISODE 04 · A NOTE FROM YOUR FAVOURITE ULLU",
    title: "You're Not As Alone As You Think.",
    meta: "COMFORT · FRIENDSHIP · ALWAYS HERE",
    subtitle: "Oi, Bhondu! You don't need a perfect reason to reach out.",
    image: "assets/images/hero-red-portrait.png",
    for: "For the quiet nights, the overthinking, and the moments when you have a lot to say but don't know where to begin.",
    paragraphs: [
      "Oi, Bhondu!",
      "Kabhi kabhi na, everything feels a little too much.",
      "You might be surrounded by people and still feel alone. You might have a hundred things to say but no idea whom to tell.",
      "But whenever that happens, remember this: you can always text me. Chahe random baat karni ho, rant karna ho, gossip karni ho, ya bas bina kisi reason ke baat karni ho.",
      "You don't need a perfect reason to reach out. And please, never think that you're bothering someone by sharing what you're going through.",
      "Your feelings matter. You matter. And I'm really glad I get to call you my friend.",
      "Happy birthday, Bhondu. Here's to more random conversations, more memories and many more chapters."
    ],
    music: "Kabhi Kabhi Aditi",
    audio: "assets/audio/kabhi-kabhi-aditi.mp3",
    audioLabel: "Play your little mood-lifter"
  },

  about: {
    kicker: "ABOUT THIS COLLECTION",
    title: "A Little Corner Of The Internet.",
    meta: "MADE ESPECIALLY FOR DARSHIKA · 13 NOVEMBER 2026",
    subtitle: "Not a streaming service. Just a tiny collection of things I wanted you to have.",
    image: "assets/images/hero-red-portrait.png",
    for: "A birthday gift, a friendship archive, and a reminder you can revisit whenever you want.",
    paragraphs: [
      "This collection has a little bit of everything: the day we first took a picture together, the memories that followed, a few videos, two songs and some words I hope you read whenever you need them.",
      "You can open any episode in any order. There is no watch schedule, no pressure and definitely no subscription.",
      "Just press play whenever you need a reminder that you are cared for.",
      "Happy birthday, Darshika. ♡"
    ]
  },

  note: {
    kicker: "THE FINAL EPISODE · BIRTHDAY SPECIAL",
    title: "Happy Birthday, Bhondu. ♡",
    meta: "13 NOVEMBER 2026 · MADE WITH LOVE",
    subtitle: "One last thing I wanted you to know.",
    image: "assets/images/hero-red-portrait.png",
    for: "To one of the people who made college feel a little more memorable.",
    paragraphs: [
      "Oye Bhondu!!",
      "I know I'm not always the best at putting things into words, but I really wanted to make something that you could keep.",
      "From that first-semester photograph to all the little conversations, food exchanges, assignment scenes, random jokes and memories in between — I'm genuinely grateful for this friendship.",
      "I hope this new year of your life brings you peace, good people, unexpected happiness, lots of laughter and all the things you've been wishing for.",
      "Never feel like you have to become someone else to be loved or appreciated. The person you already are is worth celebrating.",
      "Keep smiling, keep being your chaotic self, and please keep sending me the random updates.",
      "Happy birthday, Darshika. I'm rooting for you. Always.",
      "— Your favourite ullu, Ayush ♡"
    ]
  }
};


/* =========================================
   DOM ELEMENTS
   ========================================= */

const modal = $("#detailModal");
const videoWrap = $("#videoWrap");
const videoFrame = $("#videoFrame");
const modalActions = $("#modalActions");
const toast = $("#toast");


/* =========================================
   TOAST NOTIFICATION
   ========================================= */

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================================
   HTML ESCAPE
   ========================================= */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}


/* =========================================
   OPEN EPISODE
   ========================================= */

function openEpisode(key) {
  const item = episodes[key];

  if (!item || !modal) return;

  $("#modalKicker").textContent = item.kicker;
  $("#modalTitle").textContent = item.title;
  $("#modalMeta").textContent = item.meta;
  $("#modalSubtitle").textContent = item.subtitle;
  $("#modalFor").textContent = item.for;

  $("#modalHero").style.backgroundImage =
    `url("${item.image}")`;

  $("#modalLetter").innerHTML = item.paragraphs
    .map((paragraph, index) => {
      const signature =
        index === item.paragraphs.length - 1 &&
        paragraph.startsWith("—");

      return `<p${signature ? ' class="signature"' : ""}>${escapeHTML(paragraph)}</p>`;
    })
    .join("") +
    (item.imageAfterText
      ? `<figure class="letter-image"><img src="${escapeHTML(item.imageAfterText.src)}" alt="${escapeHTML(item.imageAfterText.alt)}"></figure>`
      : "");

  videoFrame.src = "";
  videoWrap.hidden = true;
  modalActions.innerHTML = "";

  /* VIDEO BUTTON */

  if (item.video) {
    const videoButton = document.createElement("button");

    videoButton.className = "btn btn-light";
    videoButton.innerHTML =
      '<span class="play-triangle"></span> Play episode video';

    videoButton.addEventListener("click", () => {
      videoWrap.hidden = false;

      $("#videoLabel").textContent =
        item.videoLabel || item.title;

      videoFrame.src =
        `https://www.youtube-nocookie.com/embed/${item.video}?autoplay=1&rel=0${item.videoStart ? `&start=${item.videoStart}` : ""}`;

      videoWrap.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });

    modalActions.append(videoButton);
  }

  /* AUDIO BUTTON */

  if (item.audio) {
    const audioButton = document.createElement("button");

    audioButton.className = "btn btn-muted";
    audioButton.innerHTML =
      "♫ " + escapeHTML(item.audioLabel);

    audioButton.addEventListener("click", () => {
      const audio = new Audio(item.audio);

      audio.play()
        .then(() => {
          showToast("Now playing: " + item.music + " ♡");
        })
        .catch(() => {
          showToast(
            "Add the MP3 file in assets/audio to play this track."
          );
        });
    });

    modalActions.append(audioButton);
  }

  /* DEFAULT BUTTON */

  if (!item.video && !item.audio) {
    const closeButton = document.createElement("button");

    closeButton.className = "btn btn-light";
    closeButton.textContent = "Back to the collection";
    closeButton.addEventListener("click", closeModal);

    modalActions.append(closeButton);
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}


/* =========================================
   CLOSE EPISODE
   ========================================= */

function closeModal() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  if (videoFrame) videoFrame.src = "";

  document.body.classList.remove("modal-open");
}


/* =========================================
   EPISODE CLICK EVENTS
   ========================================= */

$$("[data-open]").forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.open === "gallery") {
      openGallery();
    } else {
      openEpisode(button.dataset.open);
    }
  });
});

$("#modalClose")?.addEventListener("click", closeModal);

modal?.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});


/* =========================================
   PHOTO LIGHTBOX
   ========================================= */

const lightbox = $("#lightbox");
const galleryOverlay = $("#galleryOverlay");
const galleryGrid = $("#galleryGrid");
let galleryOpener = null;
let lightboxOpener = null;

function openGallery() {
  if (!galleryOverlay || !galleryGrid) return;

  galleryOpener = document.activeElement;
  galleryGrid.replaceChildren();

  $$(".memory-row [data-photo]").forEach((card, index) => {
    const image = $("img", card);
    const caption = $(".memory-overlay b", card);
    const tile = document.createElement("button");
    const thumbnail = document.createElement("img");
    const label = document.createElement("span");

    tile.className = "gallery-tile";
    tile.type = "button";
    tile.dataset.photo = card.dataset.photo;
    tile.style.setProperty("--gallery-index", index);

    thumbnail.src = new URL(
      `assets/images/${card.dataset.photo}`,
      document.baseURI
    ).href;
    thumbnail.alt = image?.alt || "Darshika memory";
    thumbnail.loading = "lazy";

    label.textContent = caption?.textContent || thumbnail.alt;
    tile.append(thumbnail, label);
    galleryGrid.append(tile);
  });

  const memoryCount = galleryGrid.children.length;
  [
    {
      filename: "first-selfie.jpg",
      alt: "Our first group selfie",
      caption: "THE BEGINNING"
    },
    {
      filename: "first-day-group.jpg",
      alt: "Our first semester group photo",
      caption: "FIRST SEMESTER"
    }
  ].forEach((photo, index) => {
    const tile = document.createElement("button");
    const thumbnail = document.createElement("img");
    const label = document.createElement("span");

    tile.className = "gallery-tile";
    tile.type = "button";
    tile.dataset.photo = photo.filename;
    tile.style.setProperty(
      "--gallery-index",
      memoryCount + index
    );

    thumbnail.src = new URL(
      `assets/images/${photo.filename}`,
      document.baseURI
    ).href;
    thumbnail.alt = photo.alt;
    thumbnail.loading = "lazy";

    label.textContent = photo.caption;
    tile.append(thumbnail, label);
    galleryGrid.append(tile);
  });

  galleryOverlay.classList.add("open");
  galleryOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("#galleryClose").focus();
}

function closeGallery() {
  if (!galleryOverlay) return;

  galleryOverlay.classList.remove("open");
  galleryOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  galleryOpener?.focus();
  galleryOpener = null;
}

function openLightbox(filename, alt = "Darshika memory") {
  if (!lightbox) return;

  lightboxOpener = document.activeElement;
  const image = $("#lightboxImage");
  image.src = new URL(`assets/images/${filename}`, document.baseURI).href;
  image.alt = alt;

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxOpener?.focus();
  lightboxOpener = null;
}

$$("[data-photo]").forEach(button => {
  button.addEventListener("click", () => {
    openLightbox(button.dataset.photo);
  });
});

$("#lightboxClose")?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});

galleryGrid?.addEventListener("click", event => {
  const tile = event.target.closest("[data-photo]");

  if (!tile) return;

  const image = $("img", tile);
  openLightbox(tile.dataset.photo, image.alt);
});

$("#galleryClose")?.addEventListener("click", closeGallery);

galleryOverlay?.addEventListener("click", event => {
  if (event.target === galleryOverlay) closeGallery();
});


/* =========================================
   KEYBOARD CONTROLS
   ========================================= */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (lightbox?.classList.contains("open")) {
      closeLightbox();
    } else if (galleryOverlay?.classList.contains("open")) {
      closeGallery();
    } else {
      closeModal();
    }
  }
});


/* =========================================
   PROFILE BUTTON
   ========================================= */

$("#profileButton")?.addEventListener("click", () => {
  openEpisode("note");
});


/* =========================================
   NAVBAR SCROLL EFFECT
   ========================================= */

window.addEventListener("scroll", () => {
  $("#topbar")?.classList.toggle(
    "scrolled",
    window.scrollY > 30
  );
});


/* =========================================
   SEARCH FUNCTIONALITY
   ========================================= */

$("#searchToggle")?.addEventListener("click", () => {
  const searchBox = $("#searchBox");

  searchBox.classList.toggle("open");

  if (searchBox.classList.contains("open")) {
    $("#searchInput").focus();
  }
});

$("#searchInput")?.addEventListener("input", event => {
  const query = event.target.value.toLowerCase().trim();

  const cards = [
    ...$$(".poster-card"),
    ...$$(".comfort-card")
  ];

  cards.forEach(card => {
    card.hidden =
      !card.innerText.toLowerCase().includes(query);
  });

  const visibleCards = cards.filter(card => !card.hidden);

  if (query && visibleCards.length === 0) {
    showToast("No titles found. Try another search.");
  }
});


/* =========================================
   SMOOTH INTERNAL NAVIGATION
   ========================================= */

$$('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================================
   INTRO SCREEN
   ========================================= */

window.addEventListener("load", () => {
  const intro = $("#introScreen");

  if (intro) {
    window.setTimeout(() => {
      intro.classList.add("hide");
    }, 1350);
  }
});


/* =========================================
   END OF NETFLIX SCRIPT
   ========================================= */
/* =========================================
   DARSHIKA HERO CINEMATIC SLIDESHOW
   ========================================= */

const heroSection = document.querySelector("#hero");

if (heroSection) {

    const heroImages = [
        "assets/images/hero-red-portrait.png",
        "assets/images/blue-dress-flowers.jpeg",
        "assets/images/maroon-saree.jpeg",
        "assets/images/yellow-outfit.png",
        "assets/images/green-outfit.png",
        "assets/images/first-day-group.jpg"
    ].map(path => new URL(path, document.baseURI).href);

    let currentHeroImage = 0;

    // Preload images for smoother transitions
    heroImages.forEach(src => {
        const image = new Image();
        image.src = src;
    });

    // First image
    heroSection.style.setProperty(
        "--hero-image",
        `url("${heroImages[0]}")`
    );

    function changeHeroImage() {

        heroSection.classList.add("changing");

        setTimeout(() => {

            currentHeroImage =
                (currentHeroImage + 1) % heroImages.length;

            heroSection.style.setProperty(
                "--hero-image",
                `url("${heroImages[currentHeroImage]}")`
            );

            heroSection.classList.remove("changing");

        }, 800);
    }

    // Change every 4.5 seconds
    setInterval(changeHeroImage, 4500);
}