export default function CopyrightBar() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
      <span className="text-sm text-[#051A24]">© {new Date().getFullYear()} Abhishek Gautam</span>
      <span className="text-sm text-[#051A24]">Bengaluru, India</span>
    </div>
  );
}
