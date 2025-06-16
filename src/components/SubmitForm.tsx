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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError(null);

    const payload = {
      contact: {
        name: formData.name,
        email: formData.email,
        age: Number(formData.age),
        contactNo: formData.contactNo,
        message: formData.message,
      },
    };

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
      setFormData({
        name: "",
        email: "",
        age: "",
        contactNo: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("API error", error);
        setError(error.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Age */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="25"
            value={formData.age}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Contact No */}
        <div>
          <label
            htmlFor="contactNo"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Number:
          </label>
          <input
            type="number"
            id="contactNo"
            name="contactNo"
            placeholder="6007844497"
            value={formData.contactNo}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : submitted ? "Submitted!" : "Send"}
        </button>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm text-center">Error: {error}</p>
        )}
      </form>
    </div>
  );
};

export default SubmitForm;
