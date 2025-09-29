import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import s from "./ProjectDetail.module.css";

export default function Loading() {
  return (
    <div className={s.container}>
      {/* Back button skeleton */}
      <div 
        className={s.backButton} 
        style={{ 
          opacity: 0.3, 
          pointerEvents: 'none' as const,
          width: '12rem'
        }}
      >
        <span>← Back to Projects</span>
      </div>

      {/* Hero skeleton */}
      <div className={s.hero} style={{ opacity: 0.5 }}>
        <div style={{ 
          height: '4rem', 
          background: 'linear-gradient(90deg, #1a1d23, #1f2330, #1a1d23)',
          borderRadius: '0.8rem',
          marginBottom: '2rem',
          maxWidth: '40rem',
          marginInline: 'auto'
        }} />
        <div style={{ 
          height: '2rem', 
          background: 'linear-gradient(90deg, #1a1d23, #1f2330, #1a1d23)',
          borderRadius: '0.8rem',
          marginBottom: '2rem',
          maxWidth: '20rem',
          marginInline: 'auto'
        }} />
        <div style={{ 
          height: '8rem', 
          background: 'linear-gradient(90deg, #1a1d23, #1f2330, #1a1d23)',
          borderRadius: '0.8rem',
          maxWidth: '80rem',
          marginInline: 'auto'
        }} />
      </div>

      {/* Grid skeleton */}
      <div className={s.grid}>
        <div>
          {/* Main content skeletons */}
          <div className={s.section}>
            <div style={{ 
              height: '2.4rem', 
              width: '15rem',
              background: 'linear-gradient(90deg, #1a1d23, #1f2330, #1a1d23)',
              borderRadius: '0.4rem',
              marginBottom: '2rem'
            }} />
            <div className={s.cardish} style={{ 
              minHeight: '10rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <LoadingSpinner />
            </div>
          </div>
        </div>

        {/* Sidebar skeleton */}
        <aside className={s.aside}>
          <div className={s.section}>
            <div style={{ 
              height: '2.4rem', 
              width: '10rem',
              background: 'linear-gradient(90deg, #1a1d23, #1f2330, #1a1d23)',
              borderRadius: '0.4rem',
              marginBottom: '2rem'
            }} />
            <div className={s.cardish} style={{ minHeight: '15rem' }} />
          </div>
        </aside>
      </div>
    </div>
  );
}
