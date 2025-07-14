import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function Invoice() {
  return (
    <div className="max-w-4xl font-manrope mx-auto p-6 bg-white">
      <Card className="shadow-lg">
        <CardHeader className="pb-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Invoice</h1>
              <p className="text-gray-600 mt-1">#12346</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-gray-900">NEA</h2>
            </div>
          </div>

          {/* Project and Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-sm text-gray-600 mb-1">Project</p>
              <p className="font-semibold text-gray-900">
                Filio Product Design
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Issued Date</p>
              <p className="font-semibold text-gray-900">Feb 15, 2025</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Due Date</p>
              <p className="font-semibold text-gray-900">Feb 20, 2025</p>
            </div>
          </div>

          {/* From and To */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm text-gray-600 mb-2">From</p>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">Aayush Maharjan</p>
                <p className="text-sm text-gray-600">Shankhamul,Lalitpur</p>
                <p className="text-sm text-gray-600">ABN 12345</p>
                <p className="text-sm text-gray-600">aayush@gmail.com</p>
                <p className="text-sm text-gray-600">+977 9823202410</p>
                <p className="text-sm text-gray-600">aayush.com</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">To</p>
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">Tony Stark</p>
                <p className="text-sm text-gray-600">
                  Washington DC, United States
                </p>
                <p className="text-sm text-gray-600">tony@gmail.com</p>
                <p className="text-sm text-gray-600">(209) 234-22435</p>
                <p className="text-sm text-gray-600">tonystark.com</p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Invoice Table */}
          <Table className="mb-6">
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Description</TableHead>
                <TableHead className="text-center">Units (kWh)</TableHead>
                <TableHead className="text-right">Price ($)</TableHead>
                <TableHead className="text-right">GST (%)</TableHead>
                <TableHead className="text-right">Amount ($)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Electricity Consumption
                </TableCell>
                <TableCell className="text-center">1,000</TableCell>
                <TableCell className="text-right">$0.20</TableCell>
                <TableCell className="text-right">10.00</TableCell>
                <TableCell className="text-right">$220.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Solar Rebate</TableCell>
                <TableCell className="text-center">-500</TableCell>
                <TableCell className="text-right">$0.15</TableCell>
                <TableCell className="text-right">0.00</TableCell>
                <TableCell className="text-right">-$75.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Separator className="my-4" />

          {/* Total */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Total Amount</span>
            <span className="text-lg font-bold">$145.00</span>
          </div>

          {/* Note */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Note:</span> There will be a late
              payment fee of 10% per annum calculated daily for payments made
              after the due date.
            </p>
          </div>

          {/* Payment Method and Signature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Payment Method
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p> Bank Transfer</p>
                <p>Account Name : Aayush Maharjan</p>
                <p>Code : 123456</p>
                <p>Account Number : 9911884344451123</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="w-48 h-16 border-b border-gray-300 mb-2 flex items-end justify-center">
                <div className="text-2xl font-script text-gray-600 mb-2">
                  Mhrzn
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">
                Aayush Maharjan
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
