import { Link, useLocation } from "react-router-dom";
import { menu } from "../Menu/menuConfig";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-sm flex flex-col">
      <div className="p-6 font-bold text-xl text-blue-700 tracking-wide border-b">
        Sistema de Estoque
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-2">
          {menu.map((item) =>
            !item.children ? (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-50 transition ${
                    location.pathname === item.to ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ) : (
              <li key={item.label}>
                <div className="flex items-center gap-3 px-4 py-2 text-gray-500 font-semibold">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                <ul className="ml-8 space-y-1">
                  {item.children.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        to={sub.to}
                        className={`flex items-center gap-2 px-3 py-1 rounded hover:bg-blue-50 transition ${
                          location.pathname === sub.to ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-600"
                        }`}
                      >
                        <sub.icon className="w-5 h-5" />
                        <span>{sub.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;