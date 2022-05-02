import { Route, Routes } from "react-router-dom";
import "./App.css";
import AvailableSlotsPatients from "./components/availableSlotsPatients/AvailableSlotsPatients";
import About from "./components/landingPage/about/About";
import Contact from "./components/landingPage/contact/Contact";
import Header from "./container/header/Header";
import DoctorProfile from "./components/profile/DoctorProfile";
import PatientProfile from "./components/profile/PatientProfile";
import PatientVideoChat from "./components/videoMeeting/PatientVideoChat";
import VideoChatMeeting from "./components/videoMeeting/VideoChatMeeting";
import AppointmentViewForPatients from "./components/appointmentViewForPatients/AppointmentViewForPatients";
import AppointmentViewForDoctors from "./components/appointmentViewForDoctors/AppointmentViewForDoctors";
import DoctorsList from "./components/profile/DoctorsList/DoctorsList";
import CreateSlotViewDoctor from "./components/createSlotsViewDoctor/CreateSlotsViewDoctor";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctorslist" element={<DoctorsList />} />
        <Route path="/updatedoctor" element={<DoctorProfile />} />
        <Route path="/updatepatient" element={<PatientProfile />} />
        <Route path="/availableSlotsPatients" element={<AvailableSlotsPatients />} />
        <Route path="/video" element={<PatientVideoChat />} />
        <Route path="/vid" element={<VideoChatMeeting />} />
        <Route path="/appointmentViewForPatients" element={<AppointmentViewForPatients />} />
        <Route path="/appointmentViewForDoctors" element={<AppointmentViewForDoctors />} />
        <Route path="/createSlotViewDoctor" element={<CreateSlotViewDoctor />} />
      </Routes>
    </>
  );
}

export default App;
