import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="ChatGPT 1"></meta>
  <title>CHATGPT1</title>
  <meta name="description" content="Experience the power of AI with our advanced chatbot. Leveraging the capabilities of GPT-3, our chatbot provides accurate responses and includes a search function for quick information retrieval. Ideal for anyone looking to interact with cutting-edge AI technology.">
</Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
