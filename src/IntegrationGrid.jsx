// app/page.tsx (or pages/index.tsx)
import Image from "next/image";

export default function IntegrationGrid() {
  return (
    <>
    <div className="min-h-screen bg-white text-[#111] font-sans">
      {/* Header */}
      <section className="text-center py-6  ">
        <h1 className="text-[30px] mb-2 font-bold">All-in, Zero Cost. Full Power Onboarding + Support</h1>
        <p className="text-sm font-medium py-6 px-4 bg-[#fff7ec] border-b border-[#f0e6dc]">
          💻 <strong className="font-semibold">Website Widget Included</strong> – Go live without writing a single line of code
        </p>
      </section>

      {/* Grid */}
      <div className="relative max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-50 grid-innercard p-5">
        {/* Cards */}
      <div className="bg-[#fffaf3] border border-[#f4e4ce] rounded-xl p-5 text-center shadow-md relative z-10 card-hubspot">
  <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" alt="HubSpot" className="h-8 mb-3 mx-auto" />
  <h2 className="text-lg font-semibold mb-2">Auto-Capture Leads</h2>
  <p className="text-sm text-[#555]">Instantly push WhatsApp inquiries to HubSpot as CRM leads. No manual data entry.</p>
  <strong className="block mt-3 text-sm text-black">Faster follow-ups, higher conversions.</strong>
</div>

<div className="bg-[#fffaf3] border border-[#f4e4ce] rounded-xl p-5 text-center shadow-md relative z-10 card-shopify">
  <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="h-8 mb-3 mx-auto" />
  <h2 className="text-lg font-semibold mb-2">Smart Order Updates</h2>
  <p className="text-sm text-[#555]">Send real-time order alerts, delivery updates, and abandoned cart nudges on WhatsApp.</p>
  <strong className="block mt-3 text-sm text-black">More repeats, fewer drop-offs.</strong>
</div>

<div className="bg-[#fffaf3] border border-[#f4e4ce] rounded-xl p-5 text-center shadow-md relative z-10 card-salesforce">
  <img src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" alt="Salesforce" className="h-8 mb-3 mx-auto" />
  <h2 className="text-lg font-semibold mb-2">WhatsApp → CRM Magic</h2>
  <p className="text-sm text-[#555]">Enrich every chat with customer data from Salesforce and log conversations back into it.</p>
  <strong className="block mt-3 text-sm text-black">Smarter conversations, seamless sync.</strong>
</div>

<div className="bg-[#fffaf3] border border-[#f4e4ce] rounded-xl p-5 text-center shadow-md relative z-10 card-razorpay">
  <img src="https://cdn.worldvectorlogo.com/logos/razorpay.svg" alt="Razorpay" className="h-8 mb-3 mx-auto" />
  <h2 className="text-lg font-semibold mb-2">Payment Links via Chat</h2>
  <p className="text-sm text-[#555]">Send payment requests directly on WhatsApp and track real-time status.</p>
  <strong className="block mt-3 text-sm text-black">Simplified checkout, faster cashflow.</strong>
</div>

        {/* Center Card */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fff8eb] border-2 border-dashed border-[#f6c768] rounded-xl p-6 text-center z-20 w-[280px] hidden md:block">
          <div className="text-2xl mb-2">🟢 + 🐝</div>
          <h2 className="text-base mb-3 font-semibold">One brain. All systems.</h2>
          <button className="px-4 py-2 bg-[#fcd36d] text-sm font-bold rounded-md">See all integrations</button>
        </div>
      </div>
{/* <div class="relative w-full h-64 bg-white">
  <div class="absolute left-1/4 top-0 h-40 w-1 rounded-t-full bg-gradient-to-b from-yellow-300 to-orange-400"></div>
  <div class="absolute left-1/4 top-40 h-1 w-24 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-r-full"></div>
  <div class="absolute left-[calc(25%+6rem)] top-40 w-4 h-4 bg-orange-400 border-2 border-yellow-300 rounded-full"></div>
</div>
 */}
      {/* Center Card for mobile */}
      <div className="block md:hidden mx-auto my-5 w-[280px] bg-[#fff8eb] border-2 border-dashed border-[#f6c768] rounded-xl p-6 text-center">
        <div className="text-2xl mb-2">🟢 + 🐝</div>
        <h2 className="text-base mb-3 font-semibold">One brain. All systems.</h2>
        <button className="px-4 py-2 bg-[#fcd36d] text-sm font-bold rounded-md">See all integrations</button>
      </div>
    </div>
    </>
  );
}
