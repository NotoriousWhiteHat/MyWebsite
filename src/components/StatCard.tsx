interface StatCardProps {
  value: string;
  label: string;
  isLoading?: boolean;
}

const StatCard = ({ value, label, isLoading }: StatCardProps) => {
  return (
    <div className="flex-1 min-w-[130px] px-6 py-5 sm:px-10 sm:py-7 text-center">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-9 sm:h-11 bg-zinc-800 rounded w-20 sm:w-24 mx-auto mb-2"></div>
          <div className="h-3 bg-zinc-800 rounded w-16 sm:w-20 mx-auto"></div>
        </div>
      ) : (
        <>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tabular-nums tracking-tight bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
            {value}
          </p>
          <p className="text-[11px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2 uppercase tracking-widest font-medium">
            {label}
          </p>
        </>
      )}
    </div>
  );
};

export default StatCard;
