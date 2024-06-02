import { faCircleCheck } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardHeader, Link } from '@nextui-org/react';
import { ReactNode } from 'react';

const Pending = (): ReactNode => (
  <div className="mt-12 mx-auto max-w-3xl">
    <Card>
      <CardHeader className="flex justify-center">
        <FontAwesomeIcon icon={faCircleCheck} className="h-12 w-12 text-green-600" aria-hidden="true" />
      </CardHeader>
      <CardBody className="text-center space-y-4">
        <h3 className="text-xl leading-6 font-semibold">Submitted!</h3>
        <div className="mx-auto max-w-md space-y-2">
          <p>We&apos;ve received your application, and you&apos;ll receive an update in the coming weeks.</p>
          <p>
            In the meantime, why not follow us on{' '}
            <Link href="https://www.instagram.com/waffle.hacks" target="_blank">
              Instagram
            </Link>{' '}
            and{' '}
            <Link href="https://www.linkedin.com/company/wafflehacks" target="_blank">
              LinkedIn
            </Link>{' '}
            to keep up-to-date with the latest information.
          </p>
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Pending;
