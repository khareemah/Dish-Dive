'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Suspense } from 'react';

function RouteProgress() {
  return (
    <Suspense fallback={null}>
      <ProgressBar
        height="4px"
        color="#2C8800"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Suspense>
  );
}

export default RouteProgress;
