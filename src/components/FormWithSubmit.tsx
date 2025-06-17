import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FormDataType {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

const FormWithSubmit: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitted(false);
    setError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      contactNumber: Number(formData.contactNumber),
      message: formData.message,
    };

    // Making api request
    try {
      const response = await fetch(
        "https:/jsonplaceholder.typicode.com/posts",
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
      console.log("API call success", data);

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("API error", error);
        setError(error.message || `Something went wrong`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="John@doe.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            placeholder="9898939898"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? `Submitting` : submitted ? "Submitted" : "Send"}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default FormWithSubmit;
