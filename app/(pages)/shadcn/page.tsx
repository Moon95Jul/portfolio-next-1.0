import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon, DotIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function ShadcnPage() {
    return (
        <div className="p-20 space-y-12">
            <div className="space-y-8">
                <div className="text-3xl font-bold"> Alert </div>
                <Alert variant='success'>
                    <CheckCircle2Icon/>
                    <AlertTitle>
                        Success! Your changes have been saved
                    </AlertTitle>
                    <AlertDescription>
                    This is an alert with icon, title and description.
                    </AlertDescription>
                </Alert>
                <Alert>
                    <PopcornIcon/>
                    <AlertTitle>
                        This Alert has a title and an icon. No description.
                    </AlertTitle>
                </Alert>

                <Alert variant='destructive'>
                    <AlertCircleIcon/>
                    <AlertTitle>
                        Unable to process your payment.
                    </AlertTitle>
                    <AlertDescription>
                        Please verify your billing information and try again.
                        <div className="space-y-1 text-sm">
                            <div className="flex"> 
                                <DotIcon></DotIcon>
                                Check your card details 
                            </div>
                            <div className="flex"> 
                                <DotIcon></DotIcon>
                                Ensure sufficient funds
                            </div>
                            <div className="flex"> 
                                <DotIcon></DotIcon>
                                Verify billing address
                            </div>
                        </div>
                    </AlertDescription>
                </Alert>
            </div>

            <div className="space-y-8">
                <div className="text-3xl font-bold"> Alert Dialog </div>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
}