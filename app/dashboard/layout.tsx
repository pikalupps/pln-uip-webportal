import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="fixed">
        <Navbar />
      </div>
 
      {children}

      <div className="flex">
        <Footer />
      </div>
    </section>
  )
}