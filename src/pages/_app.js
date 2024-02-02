import { Provider } from 'react-redux';
import { store } from '../store'; // Adjust the path to your store
import '../styles/globals.css';
import '../styles/title.css';
import dynamic from 'next/dynamic';

import Head from 'next/head';
import Script from 'next/script';

const DynamicPage = dynamic(() => import('./home.module'), {
    ssr: false, // Disable SSR for this component
});

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                strategy="beforeInteractive"
            />
            <Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"
            ></Script>
            <Provider store={store}>
                <Component {...pageProps} />
                <DynamicPage {...pageProps} /> {/* Render the dynamic page */}
            </Provider>
        </div>
    );
};

export default MyApp;