export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100 dark:border-gray-800">
      <div className="section-container text-center text-sm text-gray-500 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Shihua Yu. All rights reserved.
      </div>
    </footer>
  );
}
