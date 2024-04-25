<div _ngcontent-ng-c1219956002="" class="markdown markdown-main-panel" dir="ltr"
    style="--animation-duration: 600ms; --fade-animation-function: linear;">
    <h2 data-sourcepos="3:1-3:53">Backend: Simple REST API with Express and Mongoose</h2>
    <p data-sourcepos="5:1-5:172">This section describes a simple REST API built with Express.js that allows users to
        upload photos, store their metadata with Mongoose, and perform CRUD operations on them.</p>
    <h3 data-sourcepos="7:1-7:17">Prerequisites</h3>
    <ul data-sourcepos="9:1-10:0">
        <li data-sourcepos="9:1-10:0">Node.js installed on your machine.</li>
    </ul>
    <h3 data-sourcepos="11:1-11:19">Getting Started</h3>
    <ol data-sourcepos="13:1-30:0">
        <li data-sourcepos="13:1-18:0">
            <p data-sourcepos="13:4-13:28"><strong>Install Dependencies:</strong></p>
            <code-block _nghost-ng-c987575795="" ng-version="0.0.0-PLACEHOLDER"><!----><!----><!----><!---->
                <div _ngcontent-ng-c987575795="" class="code-block ng-star-inserted">
                    <div _ngcontent-ng-c987575795=""
                        class="code-block-decoration header gmat-subtitle-1 ng-star-inserted"><span
                            _ngcontent-ng-c987575795="">Bash</span></div><!---->
                    <div _ngcontent-ng-c987575795="" class="code-block-internal-container">
                        <pre _ngcontent-ng-c987575795=""><code _ngcontent-ng-c987575795="" role="text" data-test-id="code-content" class="code-container" data-sourcepos="15:4-17:14">npm install</code></pre>
                    </div>
            </code-block>
        </li>
        <li data-sourcepos="19:1-26:0">
            <p data-sourcepos="19:4-19:24"><strong>Start the Server:</strong></p>
            <code-block _nghost-ng-c987575795="" ng-version="0.0.0-PLACEHOLDER"><!----><!----><!----><!---->
                <div _ngcontent-ng-c987575795="" class="code-block ng-star-inserted">
                    <div _ngcontent-ng-c987575795=""
                        class="code-block-decoration header gmat-subtitle-1 ng-star-inserted"><span
                            _ngcontent-ng-c987575795="">Bash</span></div><!---->
                    <div _ngcontent-ng-c987575795="" class="code-block-internal-container">
                        <pre _ngcontent-ng-c987575795=""><code _ngcontent-ng-c987575795="" role="text" data-test-id="code-content" class="code-container" data-sourcepos="21:4-23:12">npm start</code></pre>
                    </div>
            </code-block>
            <p data-sourcepos="25:4-25:59">This command executes the entry point file (<code>index.js</code>).</p>
        </li>
        <li data-sourcepos="27:1-30:0">
            <p data-sourcepos="27:4-27:30"><strong>Access the Application:</strong></p>
            <p data-sourcepos="29:4-29:243">Open your web browser and navigate to http://localhost:3001 (<strong>check
                    .env.example for setting environment variables including the port, if different</strong>).</p>
        </li>
    </ol>
    <h3 data-sourcepos="31:1-31:17">API Endpoints</h3>
    <h4 data-sourcepos="33:1-33:49">a. Public Routes (No Authorization Required)</h4>
    <ul data-sourcepos="35:1-38:0">
        <li data-sourcepos="35:1-35:78"><code>/register</code>: Register a new user. Request body:
            <code>{ name, email, password }</code>.</li>
        <li data-sourcepos="36:1-36:71"><code>/login</code>: Login an existing user. Request body:
            <code>{ name, password }</code>.</li>
        <li data-sourcepos="37:1-38:0"><code>/images</code>: Get all images available in the database.</li>
    </ul>
    <h4 data-sourcepos="39:1-39:49">b. Protected Routes (Authorization Required)</h4>
    <ul data-sourcepos="41:1-49:0">
        <li data-sourcepos="41:1-45:61"><code>/upload</code>: Upload a new photo.
            <ul data-sourcepos="42:5-45:61">
                <li data-sourcepos="42:5-44:45"><strong>Request:</strong>
                    <ul data-sourcepos="43:9-44:45">
                        <li data-sourcepos="43:9-43:49">Form data including the file (JPEG/PNG)</li>
                        <li data-sourcepos="44:9-44:45">Title and description for the photo</li>
                    </ul>
                </li>
                <li data-sourcepos="45:5-45:61">Photos are stored in the "userUploadedFiles" directory.</li>
            </ul>
        </li>
        <li data-sourcepos="46:1-46:40"><code>/me</code>: Get the current user's profile.</li>
        <li data-sourcepos="47:1-47:111"><code>/edit</code>: Edit an existing image. Request body:
            <code>{ name, title, description }</code>. (<code>name</code> is the image filename)</li>
        <li data-sourcepos="48:1-49:0"><code>/delete?name=&lt;name&gt;</code>: Delete an image. (<code>name</code> is
            the image filename specified as a query string)</li>
    </ul>
    <h3 data-sourcepos="50:1-50:23">Frontend: React App</h3>
    <p data-sourcepos="52:1-52:51">This project includes a simple React app template.</p>
    <ol data-sourcepos="54:1-61:0">
        <li data-sourcepos="54:1-57:0">
            <p data-sourcepos="54:4-54:29"><strong>Configure Backend URL:</strong></p>
            <p data-sourcepos="56:4-56:73">Update the backend URL for the React
                app in envirement variables.</p>
        </li>
        <li data-sourcepos="58:1-61:0">
            <p data-sourcepos="58:4-58:20"><strong>API Requests:</strong></p>
            <p data-sourcepos="60:4-60:131">The React app utilizes Axios (<a class="traceable-link" target="_blank"
                    rel="noopener noreferrer" href="https://axios-http.com/">https://axios-http.com/</a>) for making API
                requests to the backend server.</p>
        </li>
    </ol>
</div>
