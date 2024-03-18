import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

app.get("/", (req, res) => {
  res.send("Server is running");
});

const temp = {
  is_success: true,
  user_id: "jyoti_31072004",
  email: "jyoti0707.be21@chitkara.edu.in",
  roll_number: "2110990707",
  odd_numbers: [],
  even_numbers: [],
  alphabets: [],
};

app.post("/bfhl", (req, res) => {
  try {
    const {data} = req.body;
    const response = structuredClone(temp);

    data.forEach((ele) => {
      if (ele[0] >= "0" && ele[0] <= "9") {
        ele = parseInt(ele); 
        console.log(ele);

        if (ele % 2 === 0) {
          response.even_numbers.push(ele);
        } else {
          response.odd_numbers.push(ele);
        }
      } else {
        response.alphabets.push(ele.toUpperCase());
      }
    });

    res.json(response);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
