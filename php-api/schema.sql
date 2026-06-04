CREATE TABLE IF NOT EXISTS dynamic_content (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  type VARCHAR(40) NOT NULL,
  data JSON NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_dynamic_content_type_active (type, is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS contact_leads (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  source VARCHAR(80) NOT NULL DEFAULT 'website',
  name VARCHAR(160) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(60) NULL,
  location VARCHAR(190) NULL,
  message TEXT NOT NULL,
  package_json JSON NULL,
  ip_address VARCHAR(80) NULL,
  user_agent TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_contact_leads_created_at (created_at),
  KEY idx_contact_leads_source (source)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO dynamic_content (type, data, is_active) VALUES
('packages', JSON_OBJECT(
  'tabs', JSON_ARRAY('website development', 'digital marketing', 'mobile app development'),
  'packages', JSON_ARRAY(
    JSON_OBJECT('title','Basic','category','website development','des','Starter website package for small businesses.','symbol','$','price',199,'pricedes','/project','events',JSON_ARRAY(JSON_OBJECT('title','Up to 5 Pages'),JSON_OBJECT('title','Responsive Design'),JSON_OBJECT('title','Basic SEO'),JSON_OBJECT('title','Contact Form')),'btn','Choose Plan','isPopular',false),
    JSON_OBJECT('title','Pro','category','website development','des','Complete website package with premium design.','symbol','$','price',499,'pricedes','/project','events',JSON_ARRAY(JSON_OBJECT('title','Up to 15 Pages'),JSON_OBJECT('title','Custom UI/UX'),JSON_OBJECT('title','Advanced SEO'),JSON_OBJECT('title','Analytics Setup')),'btn','Choose Plan','isPopular',true)
  )
), 1),
('portfolio', JSON_OBJECT(
  'categories', JSON_ARRAY('All','UI & UX','Shopify','WordPress','Front End Dev','Development','PHP','Laravel','Node.js','AI'),
  'projects', JSON_ARRAY()
), 1),
('case-studies', JSON_OBJECT(
  'categories', JSON_ARRAY('All','Healthcare','E-Commerce','SaaS','Education','Fintech','Non-Profit','Enterprise'),
  'caseStudies', JSON_ARRAY()
), 1);
