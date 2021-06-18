// RANDOM FACT GENERATOR
function generateFact() {
  var facts = [
    "About 20 percent of kids between 12 and 19 years old have obesity. But small changes in your eating and physical activity habits may help you reach and stay a healthy weight.",
    "Getting too much sodium from your foods and drinks can raise your blood pressure, which is unhealthy for your heart and your body in general. Even though you’re a teen, it’s important to pay attention to your blood pressure and heart health now to prevent health problems as you get older.",
    "Added sugars, like those found in ice cream and baked desserts, as well as some beverages, have added sugars to make them taste sweet. These sugars add calories but not vitamins or fiber.",
    "Many teens need more of these nutrients: calcium, to build strong bones and teeth; vitamin D, to keep bones healthy; potassium, to help lower blood pressure; fiber, to help you stay regular and feel full; protein, to power you up and help you grow strong; iron, to help you grow.",
    "Many people consume larger portions than they need, especially when away from home. Ready-to-eat meals—from a restaurant, grocery store, or at school—may give you larger portions than your body needs to stay charged up.",
    "Just one super-sized, fast food meal may have more calories than you need in a whole day. And when people are served more food, they may eat or drink more—even if they don't need it. This habit may lead to weight gain.",
    "Advertisements, TV shows, the internet, and social media may affect your food and beverage choices and how you choose to spend your time. Many ads try to get you to consume high-fat foods and sugary drinks.",
    "Skipping meals might seem like an easy way to lose weight, but it actually may lead to weight gain if you eat more later to make up for it. Even if you’re really busy with school and activities, it’s important to try not to skip meals.",
    "Teens who eat breakfast may do better in school. By eating breakfast, you can increase your memory and stay focused during the school day."
  ];
  var i = Math.floor(Math.random() * facts.length);
  document.getElementById("inner-fact").innerHTML = facts[i];
}

// ANIMATED TITLE
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });