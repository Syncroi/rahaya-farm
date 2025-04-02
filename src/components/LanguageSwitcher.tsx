// src/components/common/LanguageSwitcher.tsx

'use client';

import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1]; // "en" or "ar"
  const newLocale = currentLocale === 'en' ? 'ar' : 'en';

  const handleSwitch = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button onClick={handleSwitch} className="lang-switch-btn">
      🌐 {newLocale.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
