import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible by default to prevent blank content
  const [isVisible, setIsVisible] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(30px)';
      case 'right': return 'translateX(-30px)';
      case 'scale': return 'scale(0.95)';
      default: return 'translateY(30px)';
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if element is below the viewport on initial load
    const rect = element.getBoundingClientRect();
    const isBelowFold = rect.top > window.innerHeight;

    if (isBelowFold) {
      // Only animate elements that start below the fold
      setShouldAnimate(true);
      setIsVisible(false);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px' }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }
    // Elements already in view stay visible without animation
  }, []);

  // If not animating, just render children directly
  if (!shouldAnimate) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0) scale(1)' : getInitialTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay / 1000}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay / 1000}s`,
      }}
    >
      {children}
    </div>
  );
};
