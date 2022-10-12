//App dependencies

const app = require("./app.js");


//Configuration

require("dotenv").config();
const PORT = process.env.PORT

//Listen

app.listen(process.env.PORT, () => {
console.log(`listening to port ${PORT}`);
});