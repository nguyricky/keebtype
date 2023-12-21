import  Express  from "express";
import morgan from "morgan";
import api from "./api/index.js";


const app = Express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));


app.use("/", api);

app.use("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
    }
);


app.use("*", (err, req, res, next) => {
    res.status(500).json({ message: err.message });
    }
);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    }
);
