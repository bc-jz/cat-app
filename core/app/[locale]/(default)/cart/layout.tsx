// core/app/[locale]/(default)/cart/layout.tsx
import Script from 'next/script';

export default function CartLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="cart-speculation-rules"
        strategy="beforeInteractive"
        type="speculationrules"
      >
        {JSON.stringify({
          prerender: [{ urls: ['checkout'] }],
        })}
      </Script>

      {children}
    </>
  );
}
