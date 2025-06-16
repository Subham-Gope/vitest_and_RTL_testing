import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface ContactFromData {
  name: string;
  email: string;
  age: string;
  contactNo: string;
  message: string;
}

const SubmitForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFromData>({
    name: "",
    email: "",
    age: "",
    contactNo: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //   change handling
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   Handle submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError(null);

    // creating the payload
    const payload = {
      contact: {
        name: formData.name,
        email: formData.email,
        age: Number(formData.age),
        contactNo: formData.contactNo,
        message: formData.message,
      },
    };

    // Making the api post request

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      console.log("API success", data);

      setSubmitted(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error("API error", error);
        setError(error.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }

    ///////////////////////////////////////////////////////////
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        {/* ////////////////////////////////////////////////////////////// */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////// */}

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Johndoe@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* ///////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////// */}
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            placeholder="25"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        {/* /////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////// */}

        <div>
          <label htmlFor="contactNo">Contact Number:</label>
          <input
            type="number"
            id="contactNo"
            name="contact-no"
            placeholder="6007844497"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////// */}

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="message...."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* ////////////////////////////////////////////////////////////////// */}

        {/* Submit Button*/}
        <button type="submit">
          {loading ? "Submitting" : submitted ? "Submitted" : "Send"}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};
export default SubmitForm;
