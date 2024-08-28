export default function PaginationButton({ disabled, onClick, icon }) {
  return (
    <button
      className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:bg-accent disabled:bg-slate-500 md:w-8 md:h-8"
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
