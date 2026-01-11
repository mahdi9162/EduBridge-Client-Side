export function TabButton({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition',
        active
          ? 'bg-primary text-white shadow-md'
          : 'border border-base-200 bg-base-100/60 text-[#0f1a33] hover:bg-base-100 cursor-pointer',
      ].join(' ')}
    >
      {label}
    </button>
  );
}
