import { AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MaintenancePage() {
  return (
    (<div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center space-y-2">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto" />
          <h1 className="text-3xl font-bold tracking-tight">Website Temporarily Unavailable</h1>
          <p className="text-muted-foreground">We are currently experiencing issues with our resources.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* English Message */}
          <Card>
            <CardHeader>
              <CardTitle>Service Disruption</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We apologize for the inconvenience. Our website is currently down due to technical issues with our
                resources. Our team is working diligently to resolve this matter as quickly as possible. Please check
                back later or contact us using the information below.
              </p>
            </CardContent>
          </Card>

          {/* Marathi Message */}
          <Card>
            <CardHeader>
              <CardTitle>सेवा व्यत्यय</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                असुविधेबद्दल आम्ही दिलगीर आहोत. आमची वेबसाइट सध्या आमच्या संसाधनांमधील तांत्रिक समस्यांमुळे डाउन आहे. आमचे टीम या समस्येचे
                शक्य तितक्या लवकर निराकरण करण्यासाठी परिश्रमपूर्वक काम करत आहे. कृपया नंतर पुन्हा तपासा किंवा खालील माहितीचा वापर
                करून आमच्याशी संपर्क साधा.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <Link href="tel:+911234567890" className="hover:underline">
                +91 1234 567 890
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Our support team is available Monday to Friday, 9:00 AM to 6:00 PM IST.
            </p>
          </div>
        </div>
      </div>
    </div>)
  );
}

