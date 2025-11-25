# Decap CMS Admin Panel Setup Guide

## What You Get
✅ Admin dashboard at `/admin`
✅ Write and edit posts with live preview
✅ Upload images directly
✅ All changes auto-commit to GitHub
✅ Astro rebuilds automatically
✅ PWA updates offline on next visit

## Setup Steps

### 1. Deploy to Netlify (if not already)
1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository: `monharvest/astrosoon`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### 2. Enable Netlify Identity
1. In your Netlify site dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select **Invite only** (recommended)
4. Under **External providers**, you can enable GitHub, Google, etc. (optional)
5. Scroll down to **Services** → **Git Gateway**, click **Enable Git Gateway**

### 3. Invite Yourself as Admin
1. Go to **Identity** tab in Netlify dashboard
2. Click **Invite users**
3. Enter your email address
4. Check your email and click the invite link
5. Set your password

### 4. Access Your Admin Panel
1. Visit your site: `https://your-site.netlify.app/admin`
2. Log in with your email and password
3. Start creating posts!

## How to Use

### Creating a New Post
1. Go to `/admin`
2. Click **Нийтлэлүүд** (Posts) → **New Нийтлэлүүд**
3. Fill in the fields:
   - **Гарчиг**: Post title
   - **Тайлбар**: Description
   - **Нийтэлсэн огноо**: Publish date
   - **Ангилал**: Category (select from dropdown)
   - **Түлхүүр үгс**: Tags (add multiple)
   - **Зураг**: Upload hero image
   - **Онцлох**: Featured post checkbox
   - **PDF файл URL**: Optional PDF URL
   - **Агуулга**: Write your post in Markdown
4. Click **Publish** → **Publish now**

### Uploading Images
1. In the **Зураг** field, click **Choose an image**
2. Upload from your computer
3. Images are stored in `/public/posts/`

### What Happens After Publishing
1. Decap CMS commits your post to GitHub (`/src/content/posts/`)
2. Netlify detects the commit and rebuilds your site
3. Your new post appears live in ~1-2 minutes
4. PWA caches update on next visit

## File Structure
```
/public/admin/
  ├── index.html       # Admin panel entry point
  └── config.yml       # CMS configuration

/src/content/posts/    # Your posts (auto-created by CMS)
/public/posts/         # Uploaded images
```

## Categories Available
- Сайн мэдээ
- Advent
- Үхэл ба амилал
- Сургаалт зүйрлэлүүд
- Мөнх үгийн ойлголт
- Тамын тухай

## Troubleshooting

### Can't access /admin
- Make sure Netlify Identity is enabled
- Check that Git Gateway is enabled
- Clear browser cache and try again

### Images not uploading
- Check that `/public/posts/` directory exists
- Verify Git Gateway has write access

### Posts not appearing
- Wait 1-2 minutes for Netlify rebuild
- Check Netlify deploy logs for errors
- Verify post has correct frontmatter format

## Security Notes
- Always use "Invite only" registration
- Only invite trusted admins
- Each admin gets their own login
- All changes are tracked in Git commits

## Support
For issues, check:
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
