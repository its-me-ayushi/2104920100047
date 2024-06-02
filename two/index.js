import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const registerWithCompanies = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/test/register", {
      companyName: "firstCompany",
      clientID: "e38a4907-0d5c-4625-bf5c-97ddd18a0ceb",
      clientSecret: "kTdulifUsbHoApEf",
      ownerName: "Vivek",
      ownerEmail: "creatorvivek842@gmail.com",
      rollNo: "2104920100120",
    });
    return response.data;
  } catch (error) {
    console.error("Error registering with companies:", error);
    throw error;
  }
};

const login = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/test/auth", {
      companyName: "firstCompany",
      clientID: "fa6d6fd7-a316-4276-95e5-6cb6bf93f12e",
      clientSecret: "TQdAYOGJhwTCAyBT",
      ownerName: "Vivek",
      rollNo: "2104920100120",
      ownerEmail: "creatorvivek842@gmail.com",
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

const fetchProducts = async (token) => {
  try {
    const request = axios.get(
      http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=10&maxPrice=1000000,
      {
        headers: {
          Authorization: Bearer ${token},
        },
      }
    );

    const response = await request;
    const products = response.data;
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

app.get("/", async (req, res) => {
  try {
    const loginData = await login();
    // res.send(loginData);
    // res.send(loginData.access_token);
    const token = loginData.access_token;

    const products = await fetchProducts(token);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(Server is running on http://localhost:${port});
});