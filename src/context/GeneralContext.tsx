import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Define types
interface ScreenSize {
  width: number;
  height: number;
}

interface GeneralContextProps {
  screenSize: ScreenSize;
  scrollToSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  handleMobileMenu: () => void;
}

// Create the Context with default values
const GeneralContext = createContext<GeneralContextProps | undefined>(
  undefined
);

export const GeneralProvider = ({ children }: { children: ReactNode }) => {
  // Screen Size State
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Handle Resize - Optimized to update only when dimensions change
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      if (newWidth !== screenSize.width || newHeight !== screenSize.height) {
        setScreenSize({ width: newWidth, height: newHeight });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      // console.log(screenSize.width);
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <GeneralContext.Provider
      value={{
        screenSize,
        scrollToSection,
        isMobileMenuOpen,
        handleMobileMenu,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

// Custom Hook to Use Context
export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useGeneralContext must be used within a GeneralProvider");
  }
  return context;
};
