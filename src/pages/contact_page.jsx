import { useState } from "react";
import NewsLetterForm from "../components/news_letter_form";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };
  return (
    <section className="lg:pb-20 lg:px-10">
      <div className="text-center lg:py-20 lg:text-5xl font-semibold border-b border-gray-300">
        Get In Touch
      </div>

      {/* contact form */}
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Opening Hours
            </h2>
            <div className="space-y-4 mb-20">
              <p className="text-gray-800">Mon - Fri: 8am - 8pm</p>
              <p className="text-gray-800">Saturday: 9am - 7pm</p>
              <p className="text-gray-800">Sunday: 9am - 8pm</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Store Location
            </h2>
            <div className="space-y-4">
              <p className="text-gray-800">500 Terry Francine Street</p>
              <p className="text-gray-800">San Francisco, CA 94158</p>
              <p className="text-blue-700">info@mysite.com</p>
              <p className="text-blue-700">123-456-7890</p>
            </div>
          </div>

          {/* Right column: form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              We're here to help!
            </h2>
            <p className="text-gray-700 mb-10">
              Fill out the form with any query on your mind and we'll get back
              to you as soon as possible
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              <div>
                <label className="block text-gray-900 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                  className="w-full border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange("lastName")}
                  className="w-full border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={handleChange("subject")}
                  className="w-full border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent transition-colors"
                />
              </div>
            </div>

            <div className="mt-10">
              <textarea
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={handleChange("message")}
                rows={4}
                className="w-full border-0 border-b border-gray-400 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent resize-none transition-colors placeholder-gray-500"
              />
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-12 py-3 rounded-full transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* newsletter form */}
      <NewsLetterForm />
    </section>
  );
}
