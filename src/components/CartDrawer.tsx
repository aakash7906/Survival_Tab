import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from "lucide-react"
import type { ProductItem } from "./PurchaseSection"

export interface CartItem {
  product: ProductItem
  quantity: number
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemove: (id: string) => void
  onClear: () => void
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onClear,
}: CartDrawerProps) {
  if (!isOpen) return null

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  const isFreeShipping = subtotal >= 150
  const freeShippingThreshold = 150 - subtotal

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in-up">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-red-600" />
            <h3 className="font-bold text-lg text-zinc-950">Your Rations Cart</h3>
            <span className="rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold px-2 py-0.5">
              {items.reduce((acc, i) => acc + i.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Shipping Banner Progress */}
        <div className="bg-amber-50 px-6 py-3 border-b border-amber-200 text-xs text-amber-900">
          {isFreeShipping ? (
            <div className="flex items-center gap-2 font-bold text-emerald-800">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>You have unlocked Free Priority Shipping!</span>
            </div>
          ) : (
            <div>
              Add <strong>${freeShippingThreshold.toFixed(2)}</strong> more to get{" "}
              <strong>Free Shipping</strong> (orders over $150).
            </div>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center text-zinc-400 space-y-2">
              <ShoppingBag className="h-12 w-12 mx-auto stroke-1" />
              <div className="font-semibold text-zinc-600">Your cart is empty</div>
              <p className="text-xs">Browse the flavors above to add emergency rations.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-start justify-between gap-4 p-3 rounded-xl border border-zinc-200 bg-zinc-50"
              >
                <div>
                  <div className="font-bold text-sm text-zinc-900">{item.product.name}</div>
                  <div className="text-xs text-zinc-500">{item.product.flavor}</div>
                  <div className="text-xs text-zinc-700 font-semibold mt-1">
                    Qty: {item.quantity} &times; ${item.product.price.toFixed(2)}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="font-black text-sm text-zinc-950">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="text-zinc-400 hover:text-red-600"
                    title="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-zinc-200 bg-zinc-50 space-y-4">
            <div className="space-y-1.5 text-xs text-zinc-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-zinc-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{isFreeShipping ? "FREE" : "$9.95"}</span>
              </div>
              <div className="flex justify-between text-base font-black text-zinc-950 pt-2 border-t border-zinc-200">
                <span>Total</span>
                <span>${(subtotal + (isFreeShipping ? 0 : 9.95)).toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Proceeding to checkout with $${(subtotal + (isFreeShipping ? 0 : 9.95)).toFixed(2)} in Survival Tabs rations.`)
              }}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 uppercase tracking-wider text-xs shadow-lg transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={onClear}
              className="w-full text-center text-xs text-zinc-400 hover:text-zinc-700"
            >
              Clear Cart
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
