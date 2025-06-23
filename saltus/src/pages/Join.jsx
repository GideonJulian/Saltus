import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Turnstile from "react-turnstile"; // Import Cloudflare Turnstile component

const JoinForm = () => {
  const [form, setForm] = useState({
    organization: "",
    email: "",
    fullname: "",
    question: "",
  });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const allFilled = form.organization && form.email && form.fullname && turnstileToken;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { ...form, token: turnstileToken };

    try {
      const response = await fetch(
        "https://waitlist-one-liard.vercel.app/join-waitlist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        navigate("/successModal");
        setForm({ fullname: "", organization: "", email: "", question: "" });
        setTurnstileToken("");
      } else {
        alert("Error submitting form. Please try again.");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFB] h-screen flex items-center justify-center w-full md:p-2 p-3">
      <div className="bg-white rounded-lg shadow-lg shadow-[#0C0C0D0D] w-full md:w-3/6 px-4 py-7 md:px-7 md:py-7">
        <h1 className="text-primary text-[24px] mb-3">SALTUS.</h1>
        <button className="mt-5 flex items-center gap-2" onClick={() => navigate("/")}> 
          <i className="bi bi-arrow-left"></i>
          <h1 className="text-[#7F8695] text-[13px]">BACK TO HOMEPAGE</h1>
        </button>
        <h1 className="font-[800] text-[22px] md:text-[32px] text-[#1F3D60] w-[320px] md:w-[500px]">
          Join the Future of Work
        </h1>
        <p className="text-[#7F8695] font[400] text-[14px] md:text-[15px] w-[332px] md:w-[490px]">
         Align your teams, boost visibility across the org, and keep everyone focused on what really matters
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label className="mb-3 font-[500] text-[14px]">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="fullname"
              value={form.fullname}
              onChange={(e) => setForm({ ...form, fullname: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input"
            />
          </div>
          <div className="mt-5">
            <label className="mb-3 font-[500] text-[14px]">Organization</label>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={(e) => setForm({ ...form, organization: e.target.value })}
              placeholder="Enter your organization name"
              className="w-full px-4 py-3 rounded-lg border border-input"
            />
          </div>
          <div className="mt-5">
            <label className="mb-3 font-[500] text-[14px]">Work Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-input"
            />
          </div>
          <div className="mt-5">
            <label className="mb-3 font-[500] text-[14px]">
              What is your biggest challenge that this can help solve? (Optional)
            </label>
            <input
              type="text"
              name="question"
              value={form.question}
              onChange={(e) => setForm({ ...form, question: e.target.value })}
              placeholder="Please drop an answer"
              className="w-full px-4 py-3 rounded-lg border border-input"
            />
          </div>

          {/* Change 2 */}
          <div className="mt-5">
            <Turnstile
              sitekey="0x4AAAAAABCS788VqsK0CGfl"
              onVerify={(token) => setTurnstileToken(token)}
            />
          </div>
          <div className="mt-5">
          {/* end of change 2 */}
            <button
              id="submitBtn"
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
              className="text-center w-full px-4 py-5 rounded-md text-white font-[600px] text-[16px] shadow-sm"
            >
              {loading ? "Processing..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
