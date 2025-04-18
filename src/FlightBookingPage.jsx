import { useState } from "react"
import SectionTabs from "./components/FlightBanner"
import ImageCarousel from "./components/booking/ImageCarousel"
import TabNavigation from "./components/booking/TabNavigation"
import FlightSearchForm from "./components/booking/FlightSearchForm"
import WebCheckInForm from "./components/booking/WebCheckInForm"
import MyBookingForm from "./components/booking/MyBookingForm"
import FlightStatusForm from "./components/booking/FlightStatusForm"
import SchedulesForm from "./components/booking/SchedulesForm"
import { carouselImages } from "./data"

const FlightBookingPage = () => {
  const [current, setCurrent] = useState(0)
  const [activeTab, setActiveTab] = useState("flight")

  const handleNext = () => {
    setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
  }

  const renderForm = () => {
    switch (activeTab) {
      case "flight":
        return <FlightSearchForm />
      case "webCheckIn":
        return <WebCheckInForm />
      case "myBooking":
        return <MyBookingForm />
      case "flightStatus":
        return <FlightStatusForm />
      case "schedules":
        return <SchedulesForm />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative bg-cover bg-center flex items-center justify-center text-white">
        <ImageCarousel 
          images={carouselImages} 
          current={current} 
          handlePrev={handlePrev} 
          handleNext={handleNext} 
        />
      </div>

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="bg-white py-6 px-4 md:px-8 lg:px-16 shadow-md mx-4 md:mx-8 lg:mx-16 rounded-b-lg relative z-10 -mt-0">
        <div className="max-w-6xl mx-auto">{renderForm()}</div>
      </div>

      <SectionTabs />
    </div>
  )
}

export default FlightBookingPage
