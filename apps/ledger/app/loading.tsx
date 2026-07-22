export default function Loading() {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <p className="text-on-surface-variant text-sm animate-pulse">İçerik yükleniyor...</p>
    </div>
  );
}
