export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>

      <div id="1stparagraph">
        <h2>Lab 1</h2>
        <h3>
          Name: Haoyang (Hendrick) Chen
          <br />
          Section: CS5610 2024 Fall
        </h3>
        <h4>This is a sample paragraph done by Hendrick Chen.</h4>
        <p>
          This is a paragraph. We often separate a long set of sentences with
          vertical spaces to make the text easier to read. Browsers ignore
          vertical white spaces and render all the text as one single set of
          sentences. To force the browser to add vertical spacing, wrap the
          paragraphs you want to separate with the paragraph tag.
        </p>
        <p>
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p>
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p>
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      <div id="Lists">
        <h4>Misc Info</h4>
        <h5>My Recipe:</h5>
        <p>How to make crab rangoon:</p>
        <ol>
          <li>Knead the dough.</li>
          <li>Add mixed ingredients.</li>
          <li>Seal the dumplings.</li>
          <li>Heat the pot.</li>
          <li>Pour substantial oil into the pot.</li>
          <li>Deep fry the dumplings until crispy and golden.</li>
          <li>Dry the dumplings.</li>
          <li>Serve and enjoy!</li>
        </ol>

        <h5>My Favorite Books</h5>
        <ul>
          <li>Heart of Europe</li>
          <li>The Sleepwalkers</li>
          <li>The Iron Kingdom</li>
          <li>The Habsburgs: A New History</li>
          <li>Albion's Seed</li>
        </ul>
      </div>

      <div id="wd-tables">
        <h4>My Assets</h4>
        <table style={{ border: "1px solid black", width: "100%" }}>
          <thead>
            <tr>
              <th>Assets</th>
              <th>Website</th>
              <th>Amount</th>
              <th>Net Growth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BTCUSD</td>
              <td>Binance</td>
              <td>$13,728</td>
              <td>157.36%</td>
            </tr>
            <tr>
              <td>ETHUSD</td>
              <td>Coinbase</td>
              <td>$4,675</td>
              <td>30.23%</td>
            </tr>
            <tr>
              <td>SOLUSD</td>
              <td>Coinbase</td>
              <td>$57,283</td>
              <td>615.72%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>279.77%</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Please Login to the Website:</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input id="wd-text-fields-username" placeholder="e.g., jdoe" />
          <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" id="wd-text-fields-password" />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" placeholder="John" />
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" id="wd-text-fields-last-name" placeholder="Doe" />

          <h5>Text boxes</h5>
          <label>Biography:</label>
          <br />
          <textarea id="wd-textarea" cols={30} rows={10}>
            Please edit your biography.
          </textarea>
          <h5 id="wd-buttons">Press the Button</h5>
          <button id="wd-all-good" type="button">
            Hit me!
          </button>
          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">Comedy</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">Drama</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-scifi" />
          <label htmlFor="wd-radio-scifi">Science Fiction</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">Fantasy</label>
          <br />
          <br />
          <label>Favorite colors:</label>
          <br />
          <input type="radio" name="radio-colors" id="wd-radio-yellow" />
          <label htmlFor="wd-radio-yellow">Yellow</label>
          <br />
          <input type="radio" name="radio-colors" id="wd-radio-red" />
          <label htmlFor="wd-radio-red">Red</label>
          <br />
          <input type="radio" name="radio-colors" id="wd-radio-blue" />
          <label htmlFor="wd-radio-blue">Blue</label>
          <br />
          <input type="radio" name="radio-colors" id="wd-radio-green" />
          <label htmlFor="wd-radio-green">Green</label>

          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
          <h4 id="wd-dropdowns">Dropdowns</h4>
          <h5>Select one</h5>
          <label htmlFor="wd-select-one-genre">Favorite movie genre: </label>
          <br />
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>
          <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre">Favorite all movie genres: </label>
          <br />
          <select multiple={true} id="wd-select-many-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>
          <h4>Other HTML field types</h4>
          <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
          <input type="number" id="wd-text-fields-salary-start" placeholder="1000" min="50000" max="1000000" />
          <br />
          <label htmlFor="wd-text-fields-rating">Rating: </label>
          <input type="range" id="wd-text-fields-rating" max="5" />
          <br />
          <label htmlFor="wd-text-fields-email">Email: </label>
          <input type="email" placeholder="jdoe@somewhere.com" id="wd-text-fields-email" />
          <br />
          <label htmlFor="wd-text-fields-dob">Date of birth: </label>
          <input type="date" min="2000-01-15" max="2000-01-27" id="wd-text-fields-dob" value="2000-01-21" />
          <br />
        </form>
      </div>

      <div id="wd-anchors">
        <h3>Link to My Websites</h3>
        <a href="https://hc-kanbas-react-web-app.netlify.app/">My Kanbas App Home Page</a>
        <br />
        <a href="https://github.com/hrc2023/kanbas-react-web-app">GitHub Repo</a>
      </div>

    </div>
  );
}
