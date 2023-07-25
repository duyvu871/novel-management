import "../styles/globals.css";
import "../styles/animation.css";

import Layout from "../components/layout";
import 'react-quill/dist/quill.snow.css';
import 'tailwindcss/tailwind.css';
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);
import { AuthUserProvider } from '../context/AuthUserProvider';
function MyApp({ Component, pageProps}) {
  return (
    <AuthUserProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthUserProvider>
  );
}

export default MyApp;
