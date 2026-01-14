import { useParams, Link, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Tag,
} from "lucide-react";
import { useState } from "react";
import { blogPosts, getRelatedPosts } from "@/data/blogData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const post = blogPosts.find((p) => p.slug === slug);

  const relatedPosts = useMemo(() => {
    if (!slug) return [];
    return getRelatedPosts(slug, 2);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(post.title);

  return (
    <PageLayout>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        keywords={post.tags.join(", ")}
        type="article"
        canonical={`https://weorganize.ai/blog/${post.slug}`}
        article={{
          publishedTime: post.date,
          modifiedTime: post.date,
          author: post.author.name,
          section: post.category,
          tags: post.tags,
        }}
        breadcrumbs={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.featured && (
                <Badge variant="default" className="bg-primary/10 text-primary">
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-xs">{post.author.role}</p>
                </div>
                {post.author.linkedin && (
                  <a
                    href={post.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${post.author.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 -mt-6">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Article Content */}
          <article className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/30 prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground prose-li:marker:text-primary
            prose-strong:text-foreground prose-strong:font-semibold
            prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:bg-secondary/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-muted-foreground prose-blockquote:my-6
            prose-code:bg-secondary prose-code:text-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#1a1f2e] prose-pre:border prose-pre:border-border/40 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-table:text-sm prose-table:border prose-table:border-border/40 prose-table:rounded-lg prose-table:overflow-hidden
            prose-th:text-left prose-th:font-semibold prose-th:bg-secondary/70 prose-th:text-foreground prose-th:px-4 prose-th:py-3 prose-th:border-b prose-th:border-border/40
            prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-border/30 prose-td:text-muted-foreground
            prose-hr:border-border/40 prose-hr:my-8
            prose-ul:my-4 prose-ol:my-4
            prose-img:rounded-lg prose-img:shadow-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border/40">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center justify-between py-8 border-t border-border/40 mt-8">
            <span className="text-sm font-medium flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share this article
            </span>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyLink}
                className="p-2.5 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Copy link"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Author Card */}
          <Card className="p-6 bg-secondary/30 border-border/40">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold">{post.author.name}</p>
                  {post.author.linkedin && (
                    <a
                      href={post.author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-primary mb-3">{post.author.role} at WeOrganize.ai</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to discuss your AI project?</h3>
            <p className="text-muted-foreground mb-6">
              Get a free proof of concept and see how AI automation can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Call
              </Link>
              <Link
                to="/services"
                className="px-6 py-2.5 border border-border bg-background rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                View Services
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                  <Card className="overflow-hidden border border-border/40 hover:border-primary/30 transition-all hover:shadow-lg group h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {relatedPost.author.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default BlogPost;
