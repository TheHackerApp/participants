import { faCircleXmark } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardHeader, Link } from '@nextui-org/react';
import { ReactNode } from 'react';

const Rejected = (): ReactNode => (
  <div className="mt-12 mx-auto max-w-3xl">
    <Card>
      <CardHeader className="flex justify-center">
        <FontAwesomeIcon icon={faCircleXmark} className="h-12 w-12 text-danger-500" aria-hidden="true" />
      </CardHeader>
      <CardBody className="text-center space-y-4">
        <h3 className="text-xl leading-6 font-semibold">Your application was rejected</h3>
        <div className="mx-auto max-w-md space-y-2">
          <p>
            It is with our sincerest regret to inform you that our admissions committee has chosen to not accept your
            application. We invite you to apply again next year.
          </p>
          <p>
            There are plenty of other hackathons this season, and it may not be too late to apply for those. Checkout{' '}
            <Link href="https://mlh.io/events" target="_blank">
              MLH&apos;s website
            </Link>{' '}
            to find out more information.
          </p>
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Rejected;
