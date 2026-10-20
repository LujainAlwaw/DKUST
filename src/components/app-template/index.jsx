import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "../navbar";
import Footer from "../footer";
import environment from "../../environment";

const AppTemplate = ({
  pageTitle,
  pageDescription,
  path,
  keywords,
  ogType = "website",
  ogImage,
  navbar,
  footer,
  children,
}) => {
  const { t } = useTranslation();
  const location = useLocation();


  const siteUrl = environment.siteUrl;
  const canonicalPath = path || location.pathname || "/";
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const title = pageTitle
    ? `${t(pageTitle)} | ${t("App Name")}`
    : t("App Name");
  const description = pageDescription
    ? t(pageDescription)
    : t("Home Description");
  const imageUrl = `${siteUrl}${ogImage || environment.ogImage}`;
  const keywordList = t(keywords || "Seo Keywords");

  return (
    <div className="app-shell">
      <Helmet >
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywordList} />
        <meta name="author" content="Week 15 Project Structure" />
        <meta name="theme-color" content="#0f6b4c" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={t("App Name")} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={title} />
      </Helmet>

      {navbar && (
        <div className="navbar-content">
          <NavBar />
        </div>
      )}
      <main className="app-main">{children}</main>
      {footer && <Footer />}
    </div>
  );
};

export default AppTemplate;
