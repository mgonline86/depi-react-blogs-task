export default function FormWrapper({ children, title }) {
  return (
    <div className="container mt-8 mx-auto max-w-lg bg-secondary/40 rounded flex flex-col gap-5 justify-center shadow-xl shadow-slate-400/70 min-h-64">
      {title && (
        <div className="flex justify-center items-center text-2xl font-bold text-center bg-secondary/30 h-14 rounded-t border-b-2 border-slate-600/10">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
