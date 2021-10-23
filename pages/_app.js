import "../styles.css";

import Store from "../context/Store";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Store>
        <Component {...pageProps} />
      </Store>
    </>
  );
}
export default MyApp;
