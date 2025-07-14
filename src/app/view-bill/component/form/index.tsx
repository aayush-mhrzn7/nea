"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NEABillForm() {
  const router = useRouter();
  return (
    <div className="min-h-screen font-manrope flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border ">
        <CardHeader className="text-center space-y-2 pb-2">
          <CardTitle className="text-2xl font-bold text-gray-900">
            View & Pay Your Electricity Bill
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm leading-relaxed">
            Enter your details below to view your current bill and make payments
            online
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-5">
            <div className="space-y-2">
              <Label
                htmlFor="scNo"
                className="text-sm font-medium text-gray-700"
              >
                SC Number
              </Label>
              <Input
                id="scNo"
                name="scNo"
                placeholder="Enter your Service Connection Number"
                className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="billNo"
                className="text-sm font-medium text-gray-700"
              >
                Bill Number
              </Label>
              <Input
                id="billNo"
                name="billNo"
                placeholder="Enter your Bill Number"
                className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="customerId"
                className="text-sm font-medium text-gray-700"
              >
                Customer ID
              </Label>
              <Input
                id="customerId"
                name="customerId"
                placeholder="Enter your Customer ID"
                className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="branchId"
                className="text-sm font-medium text-gray-700"
              >
                Branch ID
              </Label>
              <Input
                id="branchId"
                name="branchId"
                placeholder="Enter your Branch ID (Optional)"
                className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Button
              type="submit"
              onClick={() => {
                router.push("/view-bill/bill");
              }}
            >
              View Bill & Pay
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
