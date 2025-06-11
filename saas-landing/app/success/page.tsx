import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-4 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold">Payment Successful!</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Thank you for your subscription. We've sent you an email with all the details.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
