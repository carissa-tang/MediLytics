var tipsSection = document.getElementById("tips-section");

var dietBtn = document.getElementById("diet" );
var exerciseBtn = document.getElementById("exercise");
var sleepBtn = document.getElementById("sleep");

var p = document.getElementById("instructions"); 

sleepBtn.addEventListener("click", addSleepFacts);
dietBtn.addEventListener("click", addDietFacts);
exerciseBtn.addEventListener("click", addExerciseFacts);

// <a href=' ' target='_blank'> link </a>

function addSleepFacts() {
  p.style.color = "transparent";
  tipsSection.innerHTML = '<div class = "nonalign"> <dl class ="sleepfacts" id ="rcorners1"><dt>Keep a consistent sleep schedule.</dt><dd>- Get up at the same time every day, even on weekends or during vacations.</dd><dt>Make your bedroom quiet and relaxing.</dt><dd>- Keep the room at a comfortable, cool temperature.</dd><dt>If you don’t fall asleep after 20 minutes, get out of bed.</dt><dd>- Go do a quiet activity without a lot of light exposure. It is especially important to not get on electronics.</dd><p id="content"> Content Source: The <a href="https://sleepeducation.org/healthy-sleep/healthy-sleep-habits/" target="_blank"> American Academy of Sleep Medicine </a><p id="content"> <em> Reviewed by: Shelley Hershner, MD and Imran Shaikh, MD </em></dl> </div>'
};

function addDietFacts(){
  p.style.color = "transparent";
  tipsSection.innerHTML = '<div class = "nonalign"> <dl class ="dietfacts"id ="rcorners1"><dt>Healthy eating involves taking control of how much and what types of food you eat, as well as the beverages you drink.</dt><dd>- Try to replace foods high in sugar, salt, and unhealthy fats with fruits, vegetables, whole grains, low-fat protein foods, and fat-free or low-fat dairy foods.</dd> <dt>Many people consume larger portions than they need, especially when away from home.</dt><dd>- Packing your lunch may help you control your food and beverage portions and increases the chances that you will eat it because you made it.</dd><dt>Make changes slowly. Set a few realistic goals.</dt><dd>- Don’t expect to change your eating, drinking, or activity habits overnight. Changing too much too fast may hurt your chances of success.</dd><p id="content"> Content Source: The <a href="https://health.gov/our-work/physical-activity/current-guidelines/top-10-things-know" target="_blank">National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)</a>, part of the National Institutes of Health.<p id="content"> <em> Reviewed by: Griffin P. Rodgers, M.D., M.A.C.P. et al.</em></dl> </div>'
};

function addExerciseFacts(){
  p.style.color = "transparent";
  tipsSection.innerHTML = '<div class = "nonalign"> <dl class ="dietfacts"id ="rcorners1"><dt>Each day, youth ages 6 through 17 need at least 60 minutes of moderate-to-vigorous activity to attain the most health benefits from physical activity.</dt><dd>- Most activity can be aerobic, like walking, running, or anything that makes the heart beat faster.</dd> <dt>Any amount of physical activity has some health benefits. </dt><dd>- Americans can benefit from small amounts of moderate-to-vigorous physical activity throughout the day.</dd><dt>Physical activity has immediate and long-term health benefits.</dt><dd>- Immediate: it can reduce anxiety and blood pressure and improve quality of sleep and insulin sensitivity.</dd><dd>-Long-term: it can help improve cognition, bone health, fitness, and heart health as well as reduce the risk of depression.</dd><p id="content"> Content Source: The <a href="https://health.gov/our-work/physical-activity/current-guidelines/top-10-things-know" target="_blank"> Office of Disease Prevention and Health Promotion </a><p id="content"> <em> Reviewed by: Richard D. Olson, MD, MPH et al.</em></dl> </div>'
};