// @refresh reload
import { lazy, Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Route,
  Routes,
  Scripts,
  Title,
} from "solid-start";

import Home from "./pages/Home";
const HomeLazy = lazy(() => import("./pages/HomeLazy"));

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Lazy SSR Test</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <p>static is always loaded, lazy never loads without js, filesystem works properly</p>
        <A class="static" href="/">Static</A>
        <A class="lazy" href="/lazy">Lazy</A>
        <A class="filesystem" href="/filesystem">Filesystem</A>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/lazy" component={HomeLazy} />
              {<FileRoutes />}
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
