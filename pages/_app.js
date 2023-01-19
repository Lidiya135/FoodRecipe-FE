import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../redux/store";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SSRProvider>
  </>
  )
}

export default MyApp
