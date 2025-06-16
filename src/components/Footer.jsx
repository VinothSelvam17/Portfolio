import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
   <footer className="text-center py-4 mt-10 border-t text-sm text-gray-500">
  <p>© 2025 Vinoth Selva. Built with ❤️ using React & Tailwind CSS.</p>
  <div className="mt-2 flex justify-center space-x-4">
    <a href="https://github.com/VinothSelvam17" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/vinoth17/" target="_blank">LinkedIn</a>
    <a href="mailto:vinothselva345@gmail.com">Email</a>
  </div>
</footer>

  );
};