import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default appWithTranslation(MyApp);
