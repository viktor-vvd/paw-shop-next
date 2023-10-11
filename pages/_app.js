import DefaultLayout from "../components/DefaultLayout";
import { wrapper } from "../src/redux/store";
import "@styles/scss/style.scss";

const { Provider } = require("react-redux");

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    </Provider>
  );
}

export default MyApp;
