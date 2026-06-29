import { useState } from "react";
import { Globe, ChevronDown, Calendar } from "lucide-react";
import CommonBtn from "../components/common_btn";
export default function AboutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    startDate: "",
    resumeLink: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };
  return (
    <section>
      {/* section 1 text and image */}
      <div className="min-h-screen border-b border-gray-300">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:px-20 lg:py-30">
          {/* Left: Image */}
          <div className="h-[60vh] md:h-screen w-full">
            <img
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1200&auto=format&fit=crop"
              alt="Phones on display stands in an electronics store"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="flex items-center flex-col justify-center lg:px-20">
            <p className="text-gray-800 text-lg leading-8 mb-8">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click "Edit Text" or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I'm a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="text-gray-800 text-lg leading-8">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
      </div>

      {/* section 2 form section */}
      <div className="min-h-screen bg-white relative">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Careers
            </h1>
            <p className="text-lg text-gray-600">
              Check out our job postings &amp; opportunities waiting for you
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* First Name */}
            <div>
              <label className="block text-gray-900 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange("firstName")}
                className="w-full border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent transition-colors"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-900 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange("lastName")}
                className="w-full border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-900 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                className="w-full border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-900 mb-2">Phone</label>
              <div className="flex items-center border-b border-gray-300 focus-within:border-gray-900 transition-colors">
                <button
                  type="button"
                  className="flex items-center gap-1 pr-3 py-2 text-gray-700"
                >
                  <Globe className="w-4 h-4" strokeWidth={1.5} />
                  <ChevronDown className="w-3 h-3" strokeWidth={1.5} />
                </button>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  className="flex-1 border-0 focus:ring-0 outline-none px-0 py-2 bg-transparent"
                />
              </div>
            </div>

            {/* Position You Apply for */}
            <div>
              <label className="block text-gray-900 mb-2">
                Position You Apply for
              </label>
              <div className="relative border-b border-gray-300 focus-within:border-gray-900 transition-colors">
                <select
                  value={formData.position}
                  onChange={handleChange("position")}
                  className="w-full appearance-none border-0 focus:ring-0 outline-none px-0 py-2 bg-transparent text-gray-900"
                >
                  <option value=""></option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="fullstack">Full Stack Developer</option>
                  <option value="designer">Product Designer</option>
                </select>
                <ChevronDown
                  className="w-4 h-4 text-gray-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Available Start Date */}
            <div>
              <label className="block text-gray-900 mb-2">
                Available Start Date <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 focus-within:border-gray-900 transition-colors py-2">
                <Calendar className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange("startDate")}
                  className="flex-1 border-0 focus:ring-0 outline-none px-0 py-0 bg-transparent text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Link to Resume + Submit row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-10 items-end">
            <div>
              <label className="block text-gray-900 mb-2">Link to Resume</label>
              <input
                type="url"
                value={formData.resumeLink}
                onChange={handleChange("resumeLink")}
                className="w-full border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 outline-none px-0 py-2 bg-transparent transition-colors"
              />
            </div>

            <div className="flex justify-end">
              <CommonBtn onClick={handleSubmit} text="submit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
