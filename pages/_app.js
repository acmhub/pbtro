import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { theme } from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import { StateProvider } from '../utils/StateProvider';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <StateProvider>
                    <Component {...pageProps} />
                </StateProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default appWithTranslation(MyApp);
