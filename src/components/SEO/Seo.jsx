import { Helmet } from "react-helmet-async";


export default function SEO({ description, title, link, keywords }) {
  return (
    <>
    <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={link} />
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:type" content="website"/>
        <meta name="robots" content="noindex"/>

      </Helmet>
      
      <div style={{display:"none"}}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      </>
  )
}