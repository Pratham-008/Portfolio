import "./globals.css";

export const metadata = {
  title: "Protfolio",
  description: "My awesome portfolio",
  icons: {
    icon: "/My-favicon.png", // updated path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="text-zinc-900 dark:text-zinc-100 gap-3 max-w-xl mx-auto px-4 py-4 min-h-svh flex flex-col">
        {children}
      </body>
    </html>
  );
}
