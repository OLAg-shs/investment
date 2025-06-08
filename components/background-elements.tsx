export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle gradient blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/10 to-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[200px] bg-gradient-to-r from-blue-100/10 to-blue-200/10 rounded-full rotate-45 blur-3xl opacity-50" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-[0.015]" />

      {/* Animated dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-500/20"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
