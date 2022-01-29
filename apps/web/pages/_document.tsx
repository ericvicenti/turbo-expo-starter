import { Children } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { AppRegistry } from "react-native";

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent("main", () => Main);
    const { getStyleElement } = AppRegistry.getApplication("main");
    const page = await renderPage();
    const styles = [
      <style
        key="nextElements"
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
      />,
      getStyleElement(),
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html style={{ height: "100%" }}>
        <Head />
        <body style={{ height: "100%", overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
