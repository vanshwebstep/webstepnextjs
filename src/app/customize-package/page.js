import CustomizePackage from '@/components/CustomizePackage';
import React, { Suspense } from 'react';

export const metadata = {
  title: "Customize Your Package | Webstep Solutions",
  description: "Get an instant estimated price by selecting the features you need for your upcoming project.",
};

export default function CustomizePackagePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Suspense fallback={null}>
        <CustomizePackage />
      </Suspense>
    </main>
  );
}
