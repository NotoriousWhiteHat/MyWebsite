interface StatCardProps {
  value: string;
  label: string;
  isLoading?: boolean;
}

const StatCard = ({ value, label, isLoading }: StatCardProps) => {
  return (
    <div className="shrink-0 px-5 py-5 sm:px-9 sm:py-7 text-center">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-8 sm:h-10 bg-zinc-800 rounded w-16 sm:w-20 mx-auto mb-2"></div>
          <div className="h-3 bg-zinc-800 rounded w-14 sm:w-20 mx-auto"></div>
        </div>
      ) : (
        <>
          <p className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-black text-foreground tabular-nums tracking-tight bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
            {value}
          </p>
          <p className="whitespace-nowrap text-[10px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2 uppercase tracking-widest font-medium">
            {label}
          </p>
        </>
      )}
    </div>
  );
};

export default StatCard;
