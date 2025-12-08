# ORO24 React Assessment – Test Task

A responsive React web application built for the ORO24 assessment.  
Includes Login UI, Dashboard with Categories, Services listing, and Service Details (Bonus).

---

## 🚀 Live Demo  
https://test-task-oro-24.vercel.app/

## 📦 GitHub Repo  
https://github.com/Egreeb/Test_Task_ORO24

---

## 📌 Features Completed
- ✔ Fully responsive UI (mobile → large screens)
- ✔ Login Screen (UI completed)
- ✔ Dashboard – Fetch & display categories
- ✔ Services – Fetch services by category with pagination
- ✔ Service Details – Full detailed view (Bonus)
- ✔ Smooth 3-step data flow: **Categories → Services → Details**
- ✔ Deployed on Vercel

---

## 🔌 APIs Integrated
- **Get Categories:** `GET /Services/GetServiceMaster`
- **Get Services:** `POST /Services/GetServices`
- **Get Service Details:** `POST /Services/GetServiceDetails`

---

## ❗ Login API Issue
The provided login API (`/customertoken/withoutOTP`) is **not returning any valid response**, even in Postman with correct header `X-App-Id: KYCTY`.  
Once a working endpoint is shared, I will integrate the login logic immediately.  
UI is fully completed with temporary navigation.

---

## 📂 Project Structure (Short)
src/
├── components/
│ ├── Dashboard.jsx
│ ├── Services.jsx
│ ├── ServiceDetails.jsx
│ ├── login.jsx
├── App.jsx
├── MainLayout.jsx
vercel.json

## ⚙️ Run Locally
npm install
npm run dev


---

👤 Developer

Gajendra Dube
📞 +971 547241907
📧 gajjudube4@gmail.com

