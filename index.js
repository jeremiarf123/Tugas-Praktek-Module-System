import Table from "./table.js";

const table = new Table({
    columns: ["Name", "Email"],
    data: [
        ["Jeremia Arfianto", "jeremiarfnto@gmail.com"],
        ["Jubaedah Sarutobi", "jubaedahgemink23@gmail.com"]
    ]
  });
  
const app = document.getElementById("app");
table.render(app);

