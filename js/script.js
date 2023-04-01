const activity = document.getElementById("activity");
const sectionActivity = document.getElementById("sectionActivity");

const checkConection = () => {
  if (navigator.onLine) {
    activity.innerText = "Você está online :)";
    sectionActivity.style.backgroundColor = "#00ff886d";
  } else {
    activity.innerText = "Você está offline :(";
    sectionActivity.style.backgroundColor = "#d2335cad";
  }
};

window.addEventListener("online", checkConection);
window.addEventListener("offline", checkConection);

// const checkStatus = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return response.status >= 200 && response.status <= 300;
//   } catch (error) {
//     return false;
//   }
// };

// setInterval(async () => {
//   const status = await checkStatus();
//   activity.innerText = `Você está ${status ? "online :)" : "offline :("}`;
//   sectionActivity.style.backgroundColor = `${
//     status ? "#00ff886d" : "#d2335cad"
//   }`;
// }, 2000);
