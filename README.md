This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Prerequisites
- A [GitHub](https://github.com) account with this repository forked or cloned
- A [Vercel](https://vercel.com) account (free tier works great)
- (Optional) A custom domain from GoDaddy or another provider

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Recommended for first-time setup)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com/signup)
   - Sign up using your GitHub account for easier integration

2. **Import Your Project**
   - Click "Add New Project" or "Import Project"
   - Select your GitHub repository from the list
   - Vercel will auto-detect Next.js and configure build settings

3. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `your-project-name.vercel.app`

#### Option 2: Deploy via CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy from your project directory**
   ```bash
   cd floating-arrangements-website
   vercel --yes
   ```

3. **For production deployment**
   ```bash
   vercel --prod
   ```

### Connecting a Custom Domain (GoDaddy)

After your site is deployed:

1. **Add Domain in Vercel**
   - Go to your project dashboard on Vercel
   - Navigate to **Settings** → **Domains**
   - Click **"Add"** and enter your domain (e.g., `yourdomain.com`)
   - Also add `www.yourdomain.com` if desired
   - Vercel will display the DNS records you need to configure

2. **Configure DNS in GoDaddy**
   - Log into your GoDaddy account
   - Go to **My Products** → **Domains** → Select your domain → **DNS**
   - Add the following records (Vercel will provide the exact values):

   **For apex domain (yourdomain.com):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: `600` (or default)

   **For www subdomain (www.yourdomain.com):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (or your unique project CNAME from Vercel)
   - TTL: `600` (or default)

3. **Verify Domain**
   - Back in Vercel, click "Verify" on your domain
   - DNS propagation typically takes 5 minutes to 48 hours (usually within an hour)
   - Once verified, your site will be live on your custom domain!

### Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the main/master branch to production
- Create preview deployments for pull requests
- Run builds and show deployment status in GitHub

### Additional Resources
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Documentation](https://vercel.com/docs)
- [Custom Domain Setup](https://vercel.com/docs/projects/domains/add-a-domain)
