import { Helmet } from "react-helmet-async";

const SITE_NAME = "Dipankar Anand";
const SITE_URL = "https://dipankar-anand-portfolio.vercel.app/";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title = `${SITE_NAME} | Full Stack Developer`,
  description =
    "Full Stack Developer specializing in React, Spring Boot, Java, scalable backend systems and modern web applications.",
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  type = "website",
  robots = "index,follow,max-image-preview:large",
  keywords =
    "Dipankar Anand, Full Stack Developer, React Developer, Spring Boot Developer, Java Developer, Portfolio, Web Developer",
}) {
  const canonical = url.startsWith("http")
    ? url
    : `${SITE_URL}${url}`;

  const ogImage = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#050505" />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} Portfolio`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta
        name="twitter:image:alt"
        content={`${SITE_NAME} Portfolio`}
      />
    </Helmet>
  );
}