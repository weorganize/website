import { useState } from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Linkedin } from "lucide-react";
import {
  blogPosts,
  blogCategories,
  getFeaturedPosts,
  getPostsByCategory,
  type BlogPost as BlogPostType,
} from "@/data/blogData";

// Export for SEO schema usage
export { blogPosts } from "@/data/blogData";

const BlogCard = ({ post, featured = false }: { post: BlogPostType; featured?: boolean }) => (
  <Link to={`/blog/${post.slug}`}>
    <Card className="overflow-hidden border border-border/40 hover:border-primary/30 transition-all hover:shadow-lg group h-full">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className={featured ? "p-6" : "p-5"}>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className={featured ? "" : "text-xs"}>
            {post.category}
          </Badge>
          {post.featured && featured && (
            <Badge variant="default" className="bg-primary/10 text-primary text-xs">
              Featured
            </Badge>
          )}
        </div>
        <h3 className={`font-semibold mb-2 group-hover:text-primary transition-colors ${featured ? "text-xl" : ""} line-clamp-2`}>
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{post.author.name}</p>
            <p className="text-xs text-muted-foreground truncate">{post.author.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          {featured && (
            <span className="flex items-center gap-1 text-primary font-medium">
              Read More <ArrowRight className="w-3 h-3" />
            </span>
          )}
        </div>
      </div>
    </Card>
  </Link>
);

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const featuredPosts = getFeaturedPosts();
  const filteredPosts = getPostsByCategory(selectedCategory);
  const regularPosts = filteredPosts.filter((post) => !post.featured || selectedCategory !== "All");

  return (
    <PageLayout>
      <SEO
        title="Blog & Insights | AI Automation Resources"
        description="Expert insights on AI automation, implementation strategies, and real-world use cases from our team of enterprise AI veterans. Practical knowledge, no fluff."
        keywords="AI blog, AI automation insights, enterprise AI, LLM implementation, AI strategy, machine learning best practices"
        canonical="https://weorganize.ai/blog"
        type="website"
      />
      <PageHero
        title="Insights & Resources"
        subtitle="Practical AI automation knowledge from 16+ years of enterprise experience. Real implementations, honest assessments, actionable guidance."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      {/* Categories */}
      <section className="py-8 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {blogCategories.map((category) => (
              <Badge
                key={category}
                variant={category === selectedCategory ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({blogPosts.filter((p) => p.category === category).length})
                  </span>
                )}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - Only show on "All" */}
      {selectedCategory === "All" && featuredPosts.length > 0 && (
        <section className="py-12 container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-semibold">Featured Articles</h2>
            <div className="flex-1 h-px bg-border/40"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className={`${selectedCategory === "All" ? "" : "py-12"} container mx-auto px-4`}>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold">
            {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
          </h2>
          <div className="flex-1 h-px bg-border/40"></div>
          <span className="text-sm text-muted-foreground">
            {regularPosts.length} article{regularPosts.length !== 1 ? "s" : ""}
          </span>
        </div>

        {regularPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles in this category yet.</p>
          </div>
        )}
      </section>

      {/* About Our Blog */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">About Our Content</h2>
            <p className="text-muted-foreground mb-6">
              Every article is written by our team based on real implementation experience.
              No ghost writers. No AI-generated fluff. No fabricated case studies.
              Just practical insights from building AI solutions at enterprises processing
              millions of transactions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Kodandarao Kola</p>
                  <p className="text-muted-foreground text-xs">Founder & CEO</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/kodandarao-kola-989b1786/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Manvendra Kumar</p>
                  <p className="text-muted-foreground text-xs">Head of Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-card border-border/40">
            <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get practical AI automation insights delivered to your inbox.
              No spam, no sales pitches—just valuable content from real implementations.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
