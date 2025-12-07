import React from 'react'

const FooterTrue = () => {
  return (
  <div className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50">
  <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">

    <div className="flex items-center gap-2 cursor-pointer">
      <img src="/enquiry-icon.png" className="w-5" />
      <span className="font-semibold">ENQUIRY</span>
    </div>

    <div className="h-6 w-[1px] bg-gray-300"></div>

    <div className="flex items-center gap-2 cursor-pointer">
      <img src="/call-icon.png" className="w-5" />
      <span className="font-semibold">CALL</span>
    </div>

    <div className="h-6 w-[1px] bg-gray-300"></div>

    <div className="flex items-center gap-2 cursor-pointer">
      <img src="/whatsapp-icon.png" className="w-5" />
      <span className="font-semibold">WHATSAPP</span>
    </div>

    <div className="h-6 w-[1px] bg-gray-300"></div>

    <div className="flex items-center gap-2 cursor-pointer">
      <img src="/contact-icon.png" className="w-5" />
      <span className="font-semibold">CONTACT US</span>
    </div>

  </div>
</div>

  )
}

export default FooterTrue