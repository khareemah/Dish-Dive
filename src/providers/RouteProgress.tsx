'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Suspense } from 'react';

function RouteProgress() {
  return (
    <Suspense fallback={null}>
      <ProgressBar
        height="4px"
        color="#A35C00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Suspense>
  );
}

export default RouteProgress;
