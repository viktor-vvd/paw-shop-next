import DefaultLayout from "../components/DefaultLayout";
import {store} from "../src/redux/store";
import '@styles/scss/style.scss';

const { Provider } = require("react-redux");

function MyApp({ Component, pageProps }) {
    return (
      <div className="App">
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
      </div>
    );
  }

  export default MyApp;