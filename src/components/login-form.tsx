import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, type ComponentPropsWithoutRef } from "react"

interface LoginFormProps extends ComponentPropsWithoutRef<"div"> {
  handleLogin: (email: string, password: string) => void;
}

export function LoginForm({
  handleLogin,
  className,
  ...props
}: LoginFormProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e:any) =>{
    e.preventDefault();
    
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
                id="password" 
                type="password" 
                required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
