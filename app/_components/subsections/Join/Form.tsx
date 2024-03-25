import React, { useState } from 'react'
import Input from '../../Input'
import FooterButton from '../Footer/FooterButton';

function Form() {

  const [projectName, setProjectName] = useState("");
  const [contact, setContact] = useState("");
  // const [msg, setMsg] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSendEmail = () => {
    console.log("projectName", projectName);
    console.log("contact", contact);
    alert("To be implemented");
    setDisabled(true);
  };

  return (
    <div className="w-full flex flex-col gap-4 -mt-4">
      <div className="w-full" style={{ minWidth: '250px' }}> 
        <Input
          label={"name of your project"}
          placeholder={"based..."}
          onChange={setProjectName}
        />
      </div>
      <div className="w-full" style={{ minWidth: '250px' }}>
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
  )
}

export default Form