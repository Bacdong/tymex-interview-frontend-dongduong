// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './app/app.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    // </StrictMode>,
);

const tmpl = `
    <!-- *************** TYMEX APP INFORMATION *************** -->
    <!-- **                                                 ** -->
    <!-- ** App Version: v${__APP_VERSION__}                             ** -->
    <!-- **                                                 ** -->
    <!-- ** React: v18.3.1                                  ** -->
    <!-- ** React DOM: v18.3.1                              ** -->
    <!-- ** React Router DOM: v7.1.1                        ** -->
    <!-- **                                                 ** -->
    <!-- ** Ant Design UI: v5.23.0                          ** -->
    <!-- ** Ant Design Icons: v5.5.2                        ** -->
    <!-- **                                                 ** -->
    <!-- ** Bun: v1.1.33                                    ** -->
    <!-- ** NPX: v10.9.0                                    ** -->
    <!-- ** Vite: v6.0.5                                    ** -->
    <!-- ** Vitest: v2.1.8                                  ** -->
    <!-- **                                                 ** -->
    <!-- ** Typescript: v5.6.2                              ** -->
    <!-- **                                                 ** -->
    <!-- ** Husky: v9.1.7                                   ** -->
    <!-- ** Lint-staged: v15.3.0                            ** -->
    <!-- ** Prettier: v3.4.2                                ** -->
    <!-- **                                                 ** -->
    <!-- ***************************************************** -->
`;

document.querySelector('html')?.setAttribute('data-app-version', __APP_VERSION__);

const commentNode = document.createComment(tmpl);
document.documentElement.prepend(commentNode);
