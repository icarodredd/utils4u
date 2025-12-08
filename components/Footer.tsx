import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
        <a href="#">
          <div className="flex items-center gap-3">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
              utils4u
            </h1>
          </div>
        </a>

        <div className="flex items-center gap-5 whitespace-nowrap">
          <a href="#">About</a>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`} <a href="#">icarodredd</a>, Made with
          ❤️ for better web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
