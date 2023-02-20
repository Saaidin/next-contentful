import React, { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    // You can add your own logic to submit the form data to your desired endpoint here.
  }

  return (
    <div className="sm:container max-w-[400px] mx-auto">
      <div className="text-4xl font-bold py-6">Contact Form</div>
      <div>
        We'd love to hear from you! Whether you have a question about ordering,
        want to provide feedback on recent orders, or just want to say hello,
        we're here to help. You can reach us through our contact form or by
        phone. Our friendly customer service team is available Monday through
        Friday from 9am to 5pm EST. Thanks for choosing Pizza Stores!
      </div>
      <form
        className="bg-white p-6 rounded-lg shadow-xl sm:w-6/12 h-[75%] mb-[170px] mt-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full p-3 bg-gray-200 rounded-lg"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-3 bg-gray-200 rounded-lg"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full p-3 bg-gray-200 rounded-lg"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
