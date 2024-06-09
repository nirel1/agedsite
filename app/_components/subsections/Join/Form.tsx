import React, { useState } from "react";
import Input from "../../Input";
import FooterButton from "../Footer/FooterButton";
import { Resend } from "resend";

function Form() {
  const [projectName, setProjectName] = useState("");
  const [contact, setContact] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSendEmail = async () => {
    setDisabled(true); // Disable the button immediately to prevent multiple sends

    // Construct the email data
    const emailData = {
      from: "onboarding@resend.dev",
      to: ["contact@strobe.org"], // Adjust according to your needs
      subject: "Strobe Contact Inquiry",
      html: `<p>Hi! I have a project ${projectName}. Reach out to me at ${contact}</p>`,
    };

    try {
      const response = await fetch('../../api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Handle success here, e.g., showing a success message
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error here, e.g., showing an error message
    } finally {
      setDisabled(false); // Re-enable the button after the request is complete
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 -mt-4">
      <div className="w-full" style={{ minWidth: "250px" }}>
        <Input
          label={"name of your project"}
          placeholder={"based..."}
          onChange={setProjectName}
        />
      </div>
      <div className="w-full" style={{ minWidth: "250px" }}>
        <Input
          label={"best way to reach you (email, tg, phone)"}
          placeholder={"email..."}
          onChange={setContact}
        />
      </div>
      {/* <div className="w-full" style={{ minWidth: '200px' }}>
        <Input
          label={"Any notes you want to add (optional)"}
          placeholder={"notes here..."}
          onChange={setMsg}
        />
      </div> */}
      <br></br>
      <div className="w-full flex gap-4 justify-end text-xs items-center">
        <div>
          or reach out to{" "}
          <span className="underline text-blue-500 ">
            <a href="mailto:contact@strobe.org">contact@strobe.org</a>
          </span>
        </div>
        <FooterButton
          onClick={handleSendEmail}
          disabled={disabled}
          className="w-auto"
        >
          {disabled ? "shipped!" : "ship"}
        </FooterButton>
      </div>
    </div>
  );
}

export default Form;

