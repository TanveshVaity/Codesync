import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
export default function Home() {
  return (
    <div>
      <SignInButton>
        <Button >Sign in</Button>
      </SignInButton>
    </div>
  );
}
