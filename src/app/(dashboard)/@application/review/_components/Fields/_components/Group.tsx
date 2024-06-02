import { Button, Card, CardBody, CardHeader, Divider, Link } from '@nextui-org/react';
import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  name: string;
  href: string;
}

const Group = ({ children, name, href }: PropsWithChildren<Props>): ReactNode => (
  <Card shadow="sm">
    <CardHeader className="flex justify-between">
      <h3 className="text-large font-semibold">{name}</h3>
      <Button as={Link} size="sm" variant="light" color="secondary" href={href}>
        Edit
      </Button>
    </CardHeader>
    <Divider />
    <CardBody className="space-y-1.5">{children}</CardBody>
  </Card>
);

export default Group;
