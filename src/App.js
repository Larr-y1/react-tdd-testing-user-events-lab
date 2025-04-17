import React, { useState } from "react";

function App() {
  // Newsletter form state
  const [newsletterData, setNewsletterData] = useState({
    name: "",
    email: "",
    interests: []
  });
  const [submitted, setSubmitted] = useState(false);

  const interestsOptions = ["Coding", "Music", "Sports"];

  // Handler for text input changes (name and email)
  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewsletterData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handler for checkbox changes
  function handleCheckboxChange(e) {
    const { value, checked } = e.target;
    setNewsletterData(prevData => {
      let updatedInterests = [...prevData.interests];
      if (checked) {
        updatedInterests.push(value);
      } else {
        updatedInterests = updatedInterests.filter(item => item !== value);
      }
      return { ...prevData, interests: updatedInterests };
    });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Portfolio Section */}
      <h1>Hi, I'm Larry</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      {/* Newsletter Signup Form Section */}
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Newsletter Signup</legend>
            <div>
              <label htmlFor="newsletter-name">Name:</label>
              <input
                id="newsletter-name"
                type="text"
                name="name"
                value={newsletterData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="newsletter-email">Enter your email address:</label>
              <input
                id="newsletter-email"
                type="text"
                name="email"
                value={newsletterData.email}
                onChange={handleInputChange}
              />
            </div>

            <fieldset>
              <legend>Select your interests:</legend>
              {interestsOptions.map(interest => (
                <div key={interest}>
                  <label htmlFor={`interest-${interest}`}>
                    <input
                      id={`interest-${interest}`}
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={newsletterData.interests.includes(interest)}
                      onChange={handleCheckboxChange}
                    />
                    {interest}
                  </label>
                </div>
              ))}
            </fieldset>

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      ) : (
        <section>
          <h2>
            Thank you, {newsletterData.name}! You have successfully signed up.
          </h2>
          {newsletterData.interests.length > 0 && (
            <p>Your interests: {newsletterData.interests.join(", ")}</p>
          )}
        </section>
      )}
    </main>
  );
}

export default App;

