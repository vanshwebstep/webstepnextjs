# Webstep PHP API

1. Import `schema.sql` into your MySQL database.
2. Copy `config.example.php` to `config.php`.
3. Update DB credentials and mail addresses in `config.php`.
4. Upload this `php-api` folder to your PHP web root.
5. Set frontend env if needed:

```env
NEXT_PUBLIC_PHP_API_BASE_URL=https://your-domain.com/php-api
```

Endpoints:
- `GET /php-api/content.php?type=packages`
- `GET /php-api/content.php?type=portfolio`
- `GET /php-api/content.php?type=case-studies`
- `POST /php-api/contact.php`
