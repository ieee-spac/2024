export const Contact = () => {
  return (
    <div className="px-3 md:px-8 max-w-3xl mx-auto space-y-10 overflow-none my-20">
      <h3 className="text-primary text-5xl sm:text-6xl font-bold">Contact</h3>

      {/* Browser Container*/}
      <div className="mockup-browser border border-base-300 transition-all duration-700 hover:shadow-[0_0px_15px_rgba(0,202,255,0.5)]">
        {/* Browser Toolbar */}
        <div className="mockup-browser-toolbar">
          <p className="input border border-base-300">Get in touch :)</p>
        </div>

        {/* Form Container */}
        <form
          action=""
          className="space-y-5 w-full flex flex-col justify-center items-center px-4 py-16 border-t border-base-300"
        >
          {/* Full Name */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-base">Full Name</span>
            </div>
            <input
              type="text"
              placeholder="Your Full Name"
              className="input input-bordered focus:input-secondary"
            />
          </label>

          {/* E-Mail Address */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-base">E-Mail Address</span>
            </div>
            <input
              type="email"
              placeholder="Your E-mail Address"
              className="input input-bordered focus:input-secondary"
            />
          </label>

          {/* Subject */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-base">Subject</span>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered focus:input-secondary"
            />
          </label>

          {/* Message */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-base">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered focus:input-secondary text-base min-h-56"
              placeholder="Your Message"
            ></textarea>
          </label>

          {/* Submit Button */}
          <button className="btn btn-outline btn-accent btn-wide text-base md:text-lg uppercase">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
