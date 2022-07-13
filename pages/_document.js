import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <script
            src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
            async
          />
          <script src="/parSrc.js" async />
          <div id="particles-js" className="no-mobile"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  componentDidMount() {
    window.particlesJS.load("particles-js", "/particles.json", () => {
      particlesJS.load("particles-js", "/particles.json", function () {
        console.log("Stars loaded!");
        const pJSIndex = 0;
        const pJS = pJSDom[pJSIndex].pJS;
        pJS.particles.array.splice(
          0,
          pJS.particles.array.length - maxParticles
        );
        pJS.interactivity.el.addEventListener("click", () => {
          pJS.particles.array.splice(
            0,
            pJS.particles.array.length - maxParticles
          );
        });
      });
    });
  }
}

export default MyDocument;
