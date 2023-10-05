import '../styles/globals.css';
import { AppProps } from 'next/app';
import wrapper from '../store/configureStore';
import { Provider } from 'react-redux';

export interface PostData {
    id: string
    date: string
    title: string
    contentHtml: string
};

export interface PostIds {
    params: {id: string}
};

export interface UserData {
    id: number;
    name: string;
    email: string
    password: string
};

export interface UserIds {
    params: {id: string}
};


  
const App = ({ Component, pageProps }: AppProps ) => {
    const { store } = wrapper.useWrappedStore(pageProps);
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;