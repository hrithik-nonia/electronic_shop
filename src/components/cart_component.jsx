import { X } from "lucide-react";

export default function CartPanel({ itemCount = 0, onClose }) {
  return (
    <div
      className="h-screen fixed inset-0 bg-black/50 flex justify-end z-30"
      onClick={onClose}
    >
      <div className="w-sm bg-white border-l border-gray-300 flex flex-col">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Cart
              <span className="text-base font-normal text-gray-500">
                ({itemCount} items)
              </span>
            </h2>
            <button
              onClick={onClose}
              className="text-gray-900 hover:text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="border-b border-gray-900" />

        {/* Body */}
        <div className="flex-1 flex items-center justify-center px-6">
          {itemCount === 0 ? (
            <p className="text-gray-900">Your cart is empty.</p>
          ) : (
            <p className="text-gray-500">Cart items go here.</p>
          )}
        </div>
      </div>
    </div>
  );
}
