import logo from "../assets/icons/SALTUS..png";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToWaitlist } from "../backend/firebase";
const JoinForm = () => {
  const [form, setForm] = useState({
    organization: "",
    email: "",
    fullname: "",
  });
  const allFilled = form.organization && form.email && form.fullname;
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setloading(true);

    try {
        await addToWaitlist(form);
        setMessage("✅ Successfully added to the waitlist!");
        console.log("Successfully added to the waitlist!");
        setForm({ fullname: "", organization: "", email: "" }); 
        navigate('/successModal')
    } catch (error) {
        setMessage("❌ Something went wrong, please try again");
        alert(error.message);
    }

    setloading(false);
};

  return (
    <div className="bg-[#F8FAFB] h-screen  flex items-center justify-center w-full md:p-2 p-3">
      <div className="bg-white rounded-lg shadow-lg shadow-[#0C0C0D0D] w-full md:w-3/6 px-4 py-7  md:px-7 md:py-7 ">
        <div>
          <div className="logo mb-3">
            <img src={logo} alt="" />
          </div>
        </div>
        <div>
          <button className="mt-5 flex items-center gap-2">
            <i class="bi bi-arrow-left"></i>
            <h1
              className="text-[#7F8695] text-[13px]"
              onClick={() => navigate("/")}
            >
              BACK TO HOMEPAGE
            </h1>
          </button>
        </div>
        <div>
          <h1 className="font-[800] text-[22px] md:text-[32px] text-[#1F3D60] w-[320px] md:w-[500px]">
            Join our Journey and get early access
          </h1>
        </div>
        <div>
          <p className="text-[#7F8695] font[400] text-[14px] md:text-[15px] w-[332px] md:w-[490px]">
            Join our extensive waitlist today to spark connection and get
            notified when we launch 🎉
          </p>
        </div>
        <form onSubmit={handleSubmit}>
  <div className="mt-5">
    <label className="mb-3 font-[500] text-[14px]">Fullname</label>
    <input
      type="text"
      placeholder="Enter your fullname"
      name="fullname"
      value={form.fullname}
      onChange={(e) => setForm({ ...form, fullname: e.target.value })}
      className="w-full px-4 py-3 rounded-lg placeholder:text-[#D8DEE8] placeholder:font-[400px] border border-input"
    />
  </div>
  <div className="mt-5">
    <label className="mb-3 font-[500] text-[14px]">Organization</label>
    <input
      type="text"
      name="organization"
      value={form.organization}
      onChange={(e) =>
        setForm({ ...form, organization: e.target.value })
      }
      placeholder="Enter your organization name"
      className="w-full px-4 py-3 rounded-lg placeholder:text-[#D8DEE8] placeholder:font-[400px] border border-input"
    />
  </div>
  <div className="mt-5">
    <label className="mb-3 font-[500] text-[14px]">Email Address</label>
    <input
      type="text"
      name="email"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
      placeholder="Enter your email address"
      className="w-full px-4 py-3 rounded-lg placeholder:text-[#D8DEE8] placeholder:font-[400px] border border-input"
    />
  </div>
  <div className="mt-5">
    <button
      style={{
        backgroundColor: !allFilled ? "#3C425714" : "#274C78",
        cursor: !allFilled ? "not-allowed" : "pointer",
        color: !allFilled ? "#A0A0A0" : "#FFF",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
      }}
      type="submit"
      disabled={!allFilled || loading}
      className="text-center w-full px-4 py-5 rounded-md text-white font-[600px] text-[16px] shadow-sm shadow-[#3C425714]"
    >
      {loading ? "Processing..." : "Join Waitlist"}
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default JoinForm;
