import Script from 'next/script';

export default function Head() {
  return (
    <Script id="cart-speculation-rules" strategy="beforeInteractive" type="speculationrules">
      {JSON.stringify(
        {
          prerender: [
            {
              urls: ['checkout'],
            },
          ],
        },
        null,
        2,
      )}
    </Script>
  );
}
