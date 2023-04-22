import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

export const widthRouter = (component: () => React.ReactElement) => () =>
    (
        <BrowserRouter>
            <Suspense fallback="...loading">{component()}</Suspense>
        </BrowserRouter>
    );
