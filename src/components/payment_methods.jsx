export default function PaymentMethods() {
  return (
    <section className="border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-700 text-base mb-10">
          We accept the following paying methods
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Visa */}
          <div className="flex h-11 w-20 flex-col items-center justify-center border border-gray-200 rounded px-2">
            <span className="font-extrabold italic text-[#1a1f71] text-lg leading-none">
              VISA
            </span>
            <span className="mt-1 h-[3px] w-full bg-[#f7b600]" />
          </div>

          {/* Mastercard */}
          <div className="flex h-11 w-20 items-center justify-center border border-gray-200 rounded">
            <div className="flex">
              <span className="h-6 w-6 rounded-full bg-[#eb001b]" />
              <span className="h-6 w-6 -ml-3 rounded-full bg-[#f79e1b] mix-blend-multiply" />
            </div>
          </div>

          {/* American Express */}
          <div className="flex h-11 w-20 items-center justify-center rounded bg-[#2557d6] text-white text-center px-1">
            <span className="text-[11px] font-bold leading-tight">
              AMERICAN
              <br />
              EXPRESS
            </span>
          </div>

          {/* UnionPay */}
          <div className="relative flex h-11 w-20 overflow-hidden rounded border border-gray-200">
            <span className="flex-1 bg-[#e21836]" />
            <span className="flex-1 bg-[#00447c]" />
            <span className="flex-1 bg-[#007a3d]" />
            <span className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span className="text-[11px] font-bold">UnionPay</span>
              <span className="text-[8px]">银联</span>
            </span>
          </div>

          {/* JCB */}
          <div className="relative flex h-11 w-20 overflow-hidden rounded">
            <span className="flex-1 bg-[#0e4c96]" />
            <span className="flex-1 bg-[#d0021b]" />
            <span className="flex-1 bg-[#00874e]" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl italic">
              JCB
            </span>
          </div>

          {/* Diners Club */}
          <div className="flex h-11 w-24 flex-col items-center justify-center border border-gray-300 rounded px-2 text-[#004a98]">
            <span className="font-serif italic text-sm leading-none">
              Diners Club
            </span>
            <span className="text-[7px] tracking-wide font-semibold">
              INTERNATIONAL
            </span>
          </div>

          {/* Discover */}
          <div className="relative flex h-11 w-24 items-center overflow-hidden rounded border border-gray-200 bg-white px-2">
            <span className="text-sm font-bold italic text-gray-800">
              DISCOVER
            </span>
            <span className="absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-[#f58220]" />
          </div>

          {/* PayPal */}
          <div className="flex h-11 w-24 flex-col items-center justify-center">
            <span className="text-xl font-bold italic text-[#003087] leading-none">
              Pay
              <span className="text-[#009cde]">Pal</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
