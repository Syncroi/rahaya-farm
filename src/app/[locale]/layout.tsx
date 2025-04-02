import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import I18nProvider from '@/providers/i18nProvider';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';
import { locales } from '../../../i18n';

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = locale === 'ar' ? ar : en;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <I18nProvider locale={locale} messages={messages}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
