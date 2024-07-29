import Link from 'next/link';

import { Button, Center, Text } from '@chakra-ui/react';

export default function Redirect() {
  return (
    <Center h="300px">
      <Link href="/download/쿠팡플러스.apk">
        <Button as="a">
          <Text>쿠팡 앱 다운로드</Text>
        </Button>
      </Link>
    </Center>
  );
}
