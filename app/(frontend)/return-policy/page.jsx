export default function ReturnPolicy() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Return &amp; Refund Policy</h1>
      <p className="mb-4 text-gray-700">
        At QuickCart, we want you to be completely satisfied with your purchase. If you are not satisfied, we're here to help.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. Returns</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>You may request a return within 7 days of receiving your order.</li>
        <li>To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging.</li>
        <li>Some items such as perishable goods, personal care items, and gift cards are non-returnable.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. Return Process</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>To initiate a return, please contact our support team at <a href="mailto:quickcart@gmail.com" className="text-orange-600 underline">quickcart@gmail.com</a> with your order details.</li>
        <li>Once your return is approved, we will provide instructions for shipping the item back to us.</li>
        <li>You will be responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. Refunds</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund.</li>
        <li>If approved, your refund will be processed to your original method of payment within 7-10 business days.</li>
        <li>Late or missing refunds? Please check your bank account and contact your payment provider. If you still have not received your refund, contact us at <a href="mailto:quickcart@gmail.com" className="text-orange-600 underline">quickcart@gmail.com</a>.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. Exchanges</h2>
      <p className="mb-4 text-gray-700">
        We only replace items if they are defective or damaged. If you need to exchange an item, please contact us.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. Contact Us</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions about our Return &amp; Refund Policy, please <a href="/contact" className="text-orange-600 underline">contact us</a>.
      </p>
    </div>
  );
}