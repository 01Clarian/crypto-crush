import { Provider } from 'react-redux';
import { store } from '../store';
import '../styles/globals.css';
import '../styles/title.module.css';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const DynamicPage = dynamic(() => import('./index'), {
  ssr: false, // Disable SSR for this component
});

const MyApp = ({ pageProps }) => { // Note: Component prop is removed
  return (
    <div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js" />
      <Provider store={store}>
        <DynamicPage {...pageProps} /> {/* Render the dynamic page directly */}
      </Provider>
    </div>
  );
};

export default MyApp; // Export DynamicPage as the default