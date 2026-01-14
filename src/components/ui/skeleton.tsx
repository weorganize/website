import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

// Card Skeleton for loading states
function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 rounded-xl border border-border bg-card", className)}>
      <Skeleton className="h-12 w-12 rounded-lg mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

// Page Skeleton for full page loading
function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header skeleton */}
      <div className="h-18 border-b border-border/20 px-6 flex items-center justify-between">
        <Skeleton className="h-8 w-40" />
        <div className="flex gap-6">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-28 rounded-lg" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Skeleton className="h-6 w-32 mx-auto mb-6" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-12 w-40 rounded-lg" />
            <Skeleton className="h-12 w-40 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
}

// Team member skeleton
function TeamMemberSkeleton() {
  return (
    <div className="p-6 rounded-xl border border-border bg-card text-center">
      <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
      <Skeleton className="h-6 w-32 mx-auto mb-2" />
      <Skeleton className="h-4 w-24 mx-auto mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
    </div>
  );
}

// Blog post skeleton
function BlogPostSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-6">
        <Skeleton className="h-4 w-20 mb-3" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

// Testimonial skeleton
function TestimonialSkeleton() {
  return (
    <div className="p-6 rounded-xl border border-border bg-card">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-4 h-4" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24 mb-1" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  );
}

export { Skeleton, CardSkeleton, PageSkeleton, TeamMemberSkeleton, BlogPostSkeleton, TestimonialSkeleton };
