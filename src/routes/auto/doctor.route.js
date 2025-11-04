import { Router } from "express";

const router = Router();

const doctors = [
  { id: 1, name: "Dr. Sarah Lee", specialty: "Cardiology" },
  { id: 2, name: "Dr. Amir Khan", specialty: "Pediatrics" }
];

// GET all doctors
router.get("/", (req, res) => res.status(200).json(doctors));

// GET doctor by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const doctor = doctors.find(doc => doc.id === id);
  
  if (!doctor) {
    return res.status(404).json({ error: "Doctor not found" });
  }
  
  res.status(200).json(doctor);
});

// POST a new doctor
router.post("/", (req, res) => {
  const { name, specialty } = req.body;
  if (!name || !specialty) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const newDoctor = { id: doctors.length + 1, name, specialty };
  doctors.push(newDoctor);
  res.status(201).json(newDoctor);
});

export default router;
