const SeoConfig = ({ title, description }) => {
  console.log(title);
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/safeimage.png" />
      <meta name="twitter:image:alt" content="Safe imagen de comandos" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/safeimage.png" />
    </>
  );
};

export default SeoConfig;
