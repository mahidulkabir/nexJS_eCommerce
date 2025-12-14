'use client'
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { use, useEffect, useState } from "react";
import verifiedImage from "@/public/assets/images/verified.gif"
import verificationFailedImage from "@/public/assets/images/verification-failed.gif"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WEBSITE_HOME } from "@/routes/WebsiteRoute";
const EmailVerification = ({ params }) => {
  const { token } = use(params);
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    const verify = async () => {
      const { data: verificationResponse } = await axios.post(
        "/api/auth/verify-email",
        { token }
      );
      if (verificationResponse.success) {
        setIsVerified(true);
      }
    };
    verify();
  }, [token]);
  return (
    <div>
     <Card className="w-[400px]">
        <CardContent>
            {isVerified ? 
                <div>
                    <div className="flex justify-center items-center">
                        <Image src={verifiedImage.src} height={100} width={100}alt="verificattion image"/>

                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold my-5 text-green-500">Email Verification Successful!</h1>
                        <Button asChild>
                            
                            <Link href={WEBSITE_HOME}>Continue Shopping</Link>

                        </Button>
                    </div>
                </div>:
                <div>
                    <div className="flex justify-center items-center">
                        <Image src={verificationFailedImage.src} height={100} width={100} alt="verification faild"/>

                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold my-5 ">Email Verification Failed!</h1>
                        <Button asChild>
                            
                            <Link href={WEBSITE_HOME}>Continue Shopping</Link>

                        </Button>
                    </div>
                </div>
        
            }
        </CardContent>
     </Card>
    </div>
  );
};

export default EmailVerification;
