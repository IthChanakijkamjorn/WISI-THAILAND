import { inter } from "./brand-fonts";
import SiteFooter from "./site-footer";

export default function SiteShell({ children }) {
  return (
    <div
      className={`${inter.className} relative min-h-screen overflow-x-hidden bg-[#F4F7FA] text-[#0D1B2A]`}
    >
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,72,116,0.15),_transparent_70%)] blur-3xl animate-float-slow"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,169,110,0.15),_transparent_70%)] blur-3xl animate-float-slower"
          style={{ animationDelay: "600ms" }}
        />
        <div
          className="absolute left-[-100px] top-[45%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,72,116,0.10),_transparent_70%)] blur-3xl animate-float-slow"
          style={{ animationDelay: "1200ms" }}
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
