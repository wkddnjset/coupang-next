import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    // router.push('https://link.coupang.com/a/bLr0fm');
  }, []);

  return null;
}
