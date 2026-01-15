import planets from "./planets";
import films from "./films";
import people from "./people";
import app from "./app";

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT || port}`);
});

app.get("/people", (req, res) => {
    res.status(200).send(people);
});

app.get("/films", (req, res) => {
    res.status(200).send(films);
});