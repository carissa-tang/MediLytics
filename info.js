var meningitis = {name: 'Meningitis', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var brainCancer = {name: 'Brain and Central Nervous System Cancer', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var cervicalCancer = {name: 'Cervical Cancer', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var colonCancer = {name: 'Colon and Rectal Cancer', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var encephalitis = {name: 'Encephalitis', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var kidneyCancer = {name: 'Kidney Cancer', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var asthma = {name: 'Asthma', description: '<b>Description: </b>Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath.<br>', symptoms: '', resources: '<b>Resources: </b><a href="https://www.mayoclinic.org/diseases-conditions/asthma/doctors-departments/ddc-20369662" target="_blank">https://www.mayoclinic.org/diseases-conditions/asthma/doctors-departments/ddc-20369662</a>'};
var liverCancer = {name: 'Liver Cancer', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var ovarianCancer = {name: 'Ovarian Cancer', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var anxiety = {name: 'Anxiety Disorders', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var sti = {name: 'Sexually-Transmitted Infections (excluding HIV)', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var testicularCancer = {name: 'Testicular Cancer', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var thyroidCancer = {name: 'Thyroid Cancer', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};
var hiv = {name: 'HIV/AIDS', description: '<b>Description:</b><br>', symptoms: '<b>Symptoms:</b><br>', resources: '<b>Additional Resources:</b><br>'};

var conditions = [meningitis, brainCancer, cervicalCancer, colonCancer, encephalitis, kidneyCancer, asthma, liverCancer, ovarianCancer, anxiety, sti, testicularCancer, thyroidCancer, hiv];

function loadConditionTitle() {
  var conditionName = document.getElementById("condition-title");
  conditionName.innerHTML = localStorage.getItem("conditionName");

  conditions.forEach(condition => {
    if (conditionName.innerHTML === condition.name) {
      document.getElementById("description").innerHTML = condition.description;
      document.getElementById("symptoms").innerHTML = condition.symptoms;
      document.getElementById("resources").innerHTML = condition.resources;
    }
  });
}