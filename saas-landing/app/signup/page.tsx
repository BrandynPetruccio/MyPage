import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>Enter your information to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name">Full Name</label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password">Password</label>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="confirm-password">Confirm Password</label>
                <Input id="confirm-password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm w-full">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline-offset-4 hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
