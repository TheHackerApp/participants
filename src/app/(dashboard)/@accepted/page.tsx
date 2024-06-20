import { faPartyHorn } from '@fortawesome/pro-duotone-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, CardHeader, Link } from '@nextui-org/react';
import { ReactNode } from 'react';

const Accepted = (): ReactNode => (
  <div className="mt-12 mx-auto max-w-3xl">
    <Card>
      <CardHeader className="flex justify-center">
        <FontAwesomeIcon icon={faPartyHorn} className="h-12 w-12 text-purple-600" aria-hidden="true" />
      </CardHeader>
      <CardBody className="text-center space-y-4">
        <h3 className="text-xl leading-6 font-semibold">Congratulations, you&apos; in!</h3>
        <div className="mx-auto max-w-md space-y-2">
          <p>We can&apos;t wait to see what you build!</p>
          <div className="flex justify-center">
            <Button
              as={Link}
              href="https://discord.gg/AVkMYsdMpG"
              className="text-default-50"
              target="_blank"
              rel="noreferrer"
              color="success"
              endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-default-50 h-5 w-5" />}
            >
              Discord
            </Button>
          </div>
          <p>
            Don&apos;t forget to join our Discord to receive announcements, participate in workshops, and connect with
            other participants!
          </p>
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Accepted;
