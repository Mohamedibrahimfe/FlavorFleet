import { SignIn } from "@clerk/clerk-react";

export default function SigninPage() {
  return (
    <div className="flex justify-center items-center min-h-screen py-12">
      <SignIn 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white shadow-xl rounded-xl",
          }
        }}
      />
    </div>
  );
}
