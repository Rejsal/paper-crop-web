import "./style.css";

const base = import.meta.env.BASE_URL;
const asset = (fileName) => `${base}${fileName}`;

document.querySelector("#app").innerHTML = `
<div class="page-bg" aria-hidden="true"></div>

<header class="site-header">
  <a class="brand" href="#top" aria-label="PaperCrop home">
    <img src="${asset("logo.png")}" alt="PaperCrop logo" />
    <span>PaperCrop</span>
  </a>
  <a class="btn btn-small" href="#pricing">Get the App</a>
</header>

<main>
  <section class="section hero" id="top">
    <div class="hero-copy">
      <p class="kicker">Smart crop. Better documents. Stronger visuals.</p>
      <h1>Turn rough captures into polished results in seconds.</h1>
      <p class="lead">
        PaperCrop helps you auto-crop and enhance documents, generate high-quality visuals from markup, and
        transform photos with AI from one fast mobile workflow.
      </p>
      <div class="cta-row">
        <a class="btn" href="#pricing">Get the App</a>
        <a class="btn btn-ghost" href="#features">See Features</a>
      </div>
      <div class="platform-strip" role="list" aria-label="Supported platforms">
        <span role="listitem">iOS</span>
        <span role="listitem">Android</span>
        <span role="listitem">Privacy-focused processing</span>
      </div>
    </div>

    <div class="hero-visual" aria-label="PaperCrop preview">
      <div class="hero-image-shell">
        <img src="${asset("1.png")}" alt="Cropped and enhanced document preview" />
      </div>
      <div class="hero-chip chip-top">Auto edge detection</div>
      <div class="hero-chip chip-bottom">High-quality export</div>
    </div>
  </section>

  <section class="section comparisons" id="features">
    <div class="section-heading">
      <p class="eyebrow">Feature Highlights</p>
      <h2>Built to clean, create, and transform.</h2>
    </div>

    <div class="compare-grid">
      <article class="compare-card">
        <h3>Smart crop and enhancement</h3>
        <p>Go from manual framing to cleaner, readable scans with one quick pass.</p>
        <div class="clip-compare" style="--clip-delay: 0s">
          <img class="clip-base" src="${asset("2.png")}" alt="Document image before smart crop" />
          <img class="clip-top" src="${asset("1.png")}" alt="Document image after smart crop and enhancement" />
          <span class="clip-divider" aria-hidden="true"></span>
          <span class="label before">Before</span>
          <span class="label after">After</span>
        </div>
      </article>

      <article class="compare-card">
        <h3>Drawing and markup to image</h3>
        <p>Upload rough concepts and get high-quality visuals ready to share.</p>
        <div class="clip-compare" style="--clip-delay: 1.1s">
          <img class="clip-base" src="${asset("4.png")}" alt="Sketch markup image before generation" />
          <img class="clip-top" src="${asset("3.png")}" alt="Generated high-quality landscape image" />
          <span class="clip-divider" aria-hidden="true"></span>
          <span class="label before">Before</span>
          <span class="label after">After</span>
        </div>
      </article>
    </div>

    <div class="feature-grid">
      <article>
        <h3>Auto-crop documents</h3>
        <p>Detect edges fast and frame pages with better alignment.</p>
      </article>
      <article>
        <h3>Document enhancement</h3>
        <p>Improve clarity and readability for notes, forms, and records.</p>
      </article>
      <article>
        <h3>Markup to visual</h3>
        <p>Turn simple markup and rough drawings into polished image outputs.</p>
      </article>
      <article>
        <h3>AI photo transformation</h3>
        <p>Rework existing photos with style-based edits and refinements.</p>
      </article>
      <article>
        <h3>Fast mobile workflow</h3>
        <p>Capture or upload, process, and export without complex editing steps.</p>
      </article>
      <article>
        <h3>Secure handling</h3>
        <p>Built with privacy-focused processing and straightforward controls.</p>
      </article>
    </div>
  </section>

  <section class="section how" id="how-it-works">
    <div class="section-heading">
      <p class="eyebrow">How It Works</p>
      <h2>Three steps to a finished result.</h2>
    </div>
    <div class="step-grid">
      <article>
        <span>1</span>
        <h3>Capture or Upload</h3>
        <p>Start with a document photo, existing image, sketch, or markup.</p>
      </article>
      <article>
        <span>2</span>
        <h3>Enhance or Mark Up</h3>
        <p>Apply smart crop, clean up readability, or prompt image generation.</p>
      </article>
      <article>
        <span>3</span>
        <h3>Export High-Quality Result</h3>
        <p>Save your polished output and share it where you need it.</p>
      </article>
    </div>
  </section>

  <section class="section pricing" id="pricing">
    <div class="pricing-card">
      <p class="eyebrow">PaperCrop Pro</p>
      <h2>Unlock advanced processing and creative output.</h2>
      <p>
        Get subscription access to premium AI workflows for cleaner documents, stronger image generation, and faster
        export at scale.
      </p>
      <ul>
        <li>Advanced crop and enhancement controls</li>
        <li>Higher-volume generation and transformation usage</li>
        <li>Continuous pro feature updates</li>
      </ul>
      <div class="cta-row">
        <a class="btn btn-ghost" href="https://play.google.com/store" target="_blank" rel="noreferrer">Open Play Store</a>
      </div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div>
    <a class="brand" href="#top" aria-label="PaperCrop home">
      <img src="${asset("logo.png")}" alt="PaperCrop logo" />
      <span>PaperCrop</span>
    </a>
    <p>Scan smarter, create faster.</p>
  </div>
  <div class="footer-links">
    <a href="${asset("privacy-policy.html")}">Privacy Policy</a>
    <a href="${asset("terms-and-conditions.html")}">Terms and Conditions</a>
  </div>
  <p class="copyright">&copy; ${new Date().getFullYear()} PaperCrop. All rights reserved.</p>
</footer>
`;
