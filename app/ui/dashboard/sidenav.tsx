export default function SideNav() {
  return (
    <nav className="p-4 bg-gray-800 text-white h-full">
      <ul className="space-y-2">
        <li>
          <a href="/dashboard" className="block p-2 hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/dashboard/customers" className="block p-2 hover:bg-gray-700">
            Customers
          </a>
        </li>
        <li>
          <a href="/dashboard/invoices" className="block p-2 hover:bg-gray-700">
            Invoices
          </a>
        </li>
      </ul>
    </nav>
  );
}
