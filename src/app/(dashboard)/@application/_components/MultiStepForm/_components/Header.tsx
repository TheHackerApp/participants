import { ReactNode } from 'react';

interface Props {
  className?: string;
}

const Header = ({ className }: Props): ReactNode => (
  <div className={className}>
    <h1 className="text-xl font-medium leading-7 text-default-foreground">Complete your application</h1>
    <p className="mt-1 text-base font-medium leading-6 text-default-500">
      Apply to take part in our incredible hackathon experience!
    </p>
  </div>
);

export default Header;
