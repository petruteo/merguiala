import React from 'react';


const DashboardPage = () => (
  <div className="content-container">
    <h1>Create custom message</h1>

    <form >
      {/* <legend>Title</legend> */}
      <div className="text-input">
        <input type="text" placeholder="Input 1" />
      </div>
      <div className="text-input">
        <input type="text" placeholder="Input 2" />
      </div>
      <div className="textarea">
        <textarea placeholder="Textarea"></textarea>
      </div>
      <button type="submit" className="button">Submit</button>
    </form>

  </div>
);

export default DashboardPage;
